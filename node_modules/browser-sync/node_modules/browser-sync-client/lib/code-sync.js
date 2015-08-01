"use strict";
var events = require("./events");
var utils  = require("./browser.utils").utils;

var options = {

    tagNames: {
        "css":  "link",
        "jpg":  "img",
        "jpeg": "img",
        "png":  "img",
        "svg":  "img",
        "gif":  "img",
        "js":   "script"
    },
    attrs: {
        "link":   "href",
        "img":    "src",
        "script": "src"
    }
};

var hiddenElem;
var OPT_PATH = "codeSync";

var current = function () {
    return window.location.pathname;
};

/**
 * @param {BrowserSync} bs
 */
exports.init = function (bs) {
    exports.saveScroll(utils.getWindow(), utils.getDocument());
    bs.socket.on("file:reload", exports.reload(bs));
    bs.socket.on("browser:reload", function () {
        if (bs.canSync({url: current()}, OPT_PATH)) {
            exports.reloadBrowser(true);
        }
    });
};

/**
 * Use a cookie-drop to save scroll position of
 * @param $window
 * @param $document
 */
exports.saveScroll = function ($window, $document) {

    if (!utils.isOldIe()) {
        return;
    }

    if ($document.readyState === "complete") {
        utils.restoreScrollPosition();
    } else {
        events.manager.addEvent($document, "readystatechange", function() {
            if ($document.readyState === "complete") {
                utils.restoreScrollPosition();
            }
        });
    }

    events.manager.addEvent(window, "beforeunload", utils.saveScrollPosition);
};

/**
 * @param elem
 * @param attr
 * @param options
 * @returns {{elem: HTMLElement, timeStamp: number}}
 */
exports.swapFile = function (elem, attr, options) {

    var currentValue = elem[attr];
    var timeStamp = new Date().getTime();
    var suffix = "?rel=" + timeStamp;

    var justUrl = /^[^\?]+(?=\?)/.exec(currentValue);

    if (justUrl) {
        currentValue = justUrl[0];
    }

    if (options) {
        if (!options.timestamps) {
            suffix = "";
        }
    }

    elem[attr] = currentValue + suffix;


    var body = document.body;

        setTimeout(function () {
            if (!hiddenElem) {
                hiddenElem = document.createElement("DIV");
                body.appendChild(hiddenElem);
            } else {
                hiddenElem.style.display = "none";
                hiddenElem.style.display = "block";
            }
        }, 200);


    return {
        elem: elem,
        timeStamp: timeStamp
    };
};

/**
 * @param {BrowserSync} bs
 * @returns {*}
 */
exports.reload = function (bs) {

    /**
     * @param data - from socket
     */
    return function (data) {

        if (!bs.canSync({url: current()}, OPT_PATH)) {
            return;
        }
        var transformedElem;
        var options    = bs.options;
        var emitter = bs.emitter;

        if (data.url || !options.injectChanges) {
            exports.reloadBrowser(true);
        }

        if (data.assetFileName && data.fileExtension) {

            var domData = exports.getElems(data.fileExtension);
            var elems   = exports.getMatches(domData.elems, data.assetFileName, domData.attr);

            if (elems.length && options.notify) {
                emitter.emit("notify", {message: "Injected: " + data.assetFileName});
            }

            for (var i = 0, n = elems.length; i < n; i += 1) {
                transformedElem = exports.swapFile(elems[i], domData.attr, options);
            }
        }

        return transformedElem;
    };
};

/**
 * @param fileExtension
 * @returns {*}
 */
exports.getTagName = function (fileExtension) {
    return options.tagNames[fileExtension];
};

/**
 * @param tagName
 * @returns {*}
 */
exports.getAttr = function (tagName) {
    return options.attrs[tagName];
};

/**
 * @param elems
 * @param url
 * @param attr
 * @returns {Array}
 */
exports.getMatches = function (elems, url, attr) {

    var matches = [];

    for (var i = 0, len = elems.length; i < len; i += 1) {
        if (elems[i][attr].indexOf(url) !== -1) {
            matches.push(elems[i]);
        }
    }

    return matches;
};

/**
 * @param fileExtension
 * @returns {{elems: NodeList, attr: *}}
 */
exports.getElems = function(fileExtension) {

    var tagName = exports.getTagName(fileExtension);
    var attr    = exports.getAttr(tagName);

    return {
        elems: document.getElementsByTagName(tagName),
        attr: attr
    };
};

/**
 * @returns {window}
 */
exports.getWindow = function () {
    return window;
};

/**
 * @param confirm
 */
exports.reloadBrowser = function (confirm) {
    var $window = exports.getWindow();
    if (confirm) {
        $window.location.reload(true);
    }
};