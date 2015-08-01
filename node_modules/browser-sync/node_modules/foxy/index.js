var respMod   = require("resp-modifier");
var httpProxy = require("http-proxy");
var http      = require("http");
var url       = require("url");
var utils     = require("./lib/utils");

/**
 * @param {String} target - a url such as http://www.bbc.co.uk or http://localhost:8181
 * @param {Object} config
 * @returns {http.Server}
 */
function init(target, config) {

    config = config || {};
    var urlObj      = url.parse(target);
    target          = urlObj.protocol + "//" + urlObj.hostname;

    if (urlObj.port) {
        target += ":" + urlObj.port;
    }

    var proxyServer = httpProxy.createProxyServer();
    var hostHeader  = utils.getProxyHost(urlObj);
    var host = false;

    if (!config.errHandler) {
        config.errHandler = function (err) {
            console.log(err.message);
        }
    }

    var server = http.createServer(function(req, res) {

        if (!host) {
            host = req.headers.host;
        }
        var middleware  = respMod({
            rules: getRules(req.headers.host),
            ignorePaths: config.ignorePaths
        });

        var next = function () {
            proxyServer.web(req, res, {
                target: target,
                hostRewrite: req.headers.host,
                headers: {
                    "host": hostHeader,
                    "accept-encoding": "identity",
                    "agent": false
                }
            });
        };

        if (config.middleware) {
            config.middleware(req, res, function (success) {
                if (success) {
                    return;
                }
                utils.handleIe(req);
                middleware(req, res, next);
            });
        } else {
            utils.handleIe(req);
            middleware(req, res, next);
        }
    }).on("error", config.errHandler);

    // Handle proxy errors
    proxyServer.on("error", config.errHandler);

    // Remove headers
    proxyServer.on("proxyRes", function (res) {
        utils.removeHeaders(res.headers, ["content-length", "content-encoding"]);
        host = false;
    });

    function getRules(host) {

        var rules = [utils.rewriteLinks(urlObj, host)];

        if (config.rules) {
            if (Array.isArray(config.rules)) {
                config.rules.forEach(function (rule) {
                    rules.push(rule);
                })
            } else {
                rules.push(config.rules);
            }
        }
        return rules;
    }

    return server;
}

module.exports      = init;
module.exports.init = init;

