var Emitter = require('events').EventEmitter;

/**
 * Module exports;
 */

module.exports = modify;

/**
 * Modify a transform `stream` to run at `concurrency`
 *
 * @param {Transform} stream
 * @param {Number} concurrency
 * @return {Transform} stream
 */

function modify(stream, concurrency){
  var _transform = stream._transform;
  var _flush = stream._flush;
  var done;
  var inFlight = 0;

  /**
   * Override the _transform method with extra inFlight requests
   */

  stream._transform = function(chunk, encoding, callback){
    inFlight++;
    var self = this;
    var deferred = inFlight >= concurrency;
    _transform.call(this, chunk, encoding, function(err, res){
      inFlight--;
      if (err) return self.emit('error', err);
      if (arguments.length > 1) self.push(res);
      if (deferred) callback();
      if (done && !inFlight) done.emit('finish');
    });
    if (!deferred) setImmediate(callback);
  };

  /**
   * Override flush once all outstanding requests have completed
   */

  stream._flush = function(callback){
    var self = this;
    if (!inFlight) return flush();
    done = new Emitter();
    done.once('finish', flush);
    function flush(){
      if (!_flush) return callback();
      _flush.call(self, callback);
    }
  };

  return stream;
};