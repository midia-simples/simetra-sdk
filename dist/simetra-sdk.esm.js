import http from 'http';
import https from 'https';
import url from 'url';
import assert from 'assert';
import stream from 'stream';
import tty from 'tty';
import util from 'util';
import os from 'os';
import zlib from 'zlib';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies$1 = cookies;

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies$1.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

var debug = createCommonjsModule(function (module, exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = ms;

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}
});
var debug_1 = debug.coerce;
var debug_2 = debug.disable;
var debug_3 = debug.enable;
var debug_4 = debug.enabled;
var debug_5 = debug.humanize;
var debug_6 = debug.instances;
var debug_7 = debug.names;
var debug_8 = debug.skips;
var debug_9 = debug.formatters;

var browser = createCommonjsModule(function (module, exports) {
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
});
var browser_1 = browser.log;
var browser_2 = browser.formatArgs;
var browser_3 = browser.save;
var browser_4 = browser.load;
var browser_5 = browser.useColors;
var browser_6 = browser.storage;
var browser_7 = browser.colors;

var hasFlag = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if ('GITHUB_ACTIONS' in env) {
		return 1;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};

var node = createCommonjsModule(function (module, exports) {
/**
 * Module dependencies.
 */




/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = debug;
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [ 6, 2, 3, 4, 5, 1 ];

try {
  var supportsColor = supportsColor_1;
  if (supportsColor && supportsColor.level >= 2) {
    exports.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
      205, 206, 207, 208, 209, 214, 215, 220, 221
    ];
  }
} catch (err) {
  // swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(process.stderr.fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  } else {
    return new Date().toISOString() + ' ';
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());
});
var node_1 = node.init;
var node_2 = node.log;
var node_3 = node.formatArgs;
var node_4 = node.save;
var node_5 = node.load;
var node_6 = node.useColors;
var node_7 = node.colors;
var node_8 = node.inspectOpts;

var src = createCommonjsModule(function (module) {
/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer') {
  module.exports = browser;
} else {
  module.exports = node;
}
});

var Writable = stream.Writable;
var debug$1 = src("follow-redirects");

// RFC7231§4.2.1: Of the request methods defined by this specification,
// the GET, HEAD, OPTIONS, and TRACE methods are defined to be safe.
var SAFE_METHODS = { GET: true, HEAD: true, OPTIONS: true, TRACE: true };

// Create handlers that pass events from native requests
var eventHandlers = Object.create(null);
["abort", "aborted", "error", "socket", "timeout"].forEach(function (event) {
  eventHandlers[event] = function (arg) {
    this._redirectable.emit(event, arg);
  };
});

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  options.headers = options.headers || {};
  this._options = options;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new Error("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new Error("Request body larger than maxBodyLength limit"));
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data and end
  var currentRequest = this._currentRequest;
  this.write(data || "", encoding, function () {
    currentRequest.end(null, null, callback);
  });
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Proxy all other public ClientRequest methods
[
  "abort", "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive", "setTimeout",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new Error("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var event in eventHandlers) {
    /* istanbul ignore else */
    if (event) {
      request.on(event, eventHandlers[event]);
    }
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var buffers = this._requestBodyBuffers;
    (function writeNext() {
      if (i < buffers.length) {
        var buffer = buffers[i++];
        request.write(buffer.data, buffer.encoding, writeNext);
      }
      else {
        request.end();
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: response.statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      response.statusCode >= 300 && response.statusCode < 400) {
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new Error("Max redirects exceeded."));
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe […],
    // since the user might not wish to redirect an unsafe request.
    // RFC7231§6.4.7: The 307 (Temporary Redirect) status code indicates
    // that the target resource resides temporarily under a different URI
    // and the user agent MUST NOT change the request method
    // if it performs an automatic redirection to that URI.
    var header;
    var headers = this._options.headers;
    if (response.statusCode !== 307 && !(this._options.method in SAFE_METHODS)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      for (header in headers) {
        if (/^content-/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Drop the Host header, as the redirect might lead to a different host
    if (!this._isRedirect) {
      for (header in headers) {
        if (/^host$/i.test(header)) {
          delete headers[header];
        }
      }
    }

    // Perform the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug$1("redirecting to", redirectUrl);
    Object.assign(this._options, url.parse(redirectUrl));
    this._isRedirect = true;
    this._performRequest();

    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    wrappedProtocol.request = function (options, callback) {
      if (typeof options === "string") {
        options = url.parse(options);
        options.maxRedirects = exports.maxRedirects;
      }
      else {
        options = Object.assign({
          protocol: protocol,
          maxRedirects: exports.maxRedirects,
          maxBodyLength: exports.maxBodyLength,
        }, options);
      }
      options.nativeProtocols = nativeProtocols;
      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug$1("options", options);
      return new RedirectableRequest(options, callback);
    };

    // Executes a GET request, following redirects
    wrappedProtocol.get = function (options, callback) {
      var request = wrappedProtocol.request(options, callback);
      request.end();
      return request;
    };
  });
  return exports;
}

// Exports
var followRedirects = wrap({ http: http, https: https });
var wrap_1 = wrap;
followRedirects.wrap = wrap_1;

var name = "axios";
var version = "0.19.2";
var description = "Promise based HTTP client for the browser and node.js";
var main = "index.js";
var scripts = {
	test: "grunt test && bundlesize",
	start: "node ./sandbox/server.js",
	build: "NODE_ENV=production grunt build",
	preversion: "npm test",
	version: "npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",
	postversion: "git push && git push --tags",
	examples: "node ./examples/server.js",
	coveralls: "cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",
	fix: "eslint --fix lib/**/*.js"
};
var repository = {
	type: "git",
	url: "https://github.com/axios/axios.git"
};
var keywords = [
	"xhr",
	"http",
	"ajax",
	"promise",
	"node"
];
var author = "Matt Zabriskie";
var license = "MIT";
var bugs = {
	url: "https://github.com/axios/axios/issues"
};
var homepage = "https://github.com/axios/axios";
var devDependencies = {
	bundlesize: "^0.17.0",
	coveralls: "^3.0.0",
	"es6-promise": "^4.2.4",
	grunt: "^1.0.2",
	"grunt-banner": "^0.6.0",
	"grunt-cli": "^1.2.0",
	"grunt-contrib-clean": "^1.1.0",
	"grunt-contrib-watch": "^1.0.0",
	"grunt-eslint": "^20.1.0",
	"grunt-karma": "^2.0.0",
	"grunt-mocha-test": "^0.13.3",
	"grunt-ts": "^6.0.0-beta.19",
	"grunt-webpack": "^1.0.18",
	"istanbul-instrumenter-loader": "^1.0.0",
	"jasmine-core": "^2.4.1",
	karma: "^1.3.0",
	"karma-chrome-launcher": "^2.2.0",
	"karma-coverage": "^1.1.1",
	"karma-firefox-launcher": "^1.1.0",
	"karma-jasmine": "^1.1.1",
	"karma-jasmine-ajax": "^0.1.13",
	"karma-opera-launcher": "^1.0.0",
	"karma-safari-launcher": "^1.0.0",
	"karma-sauce-launcher": "^1.2.0",
	"karma-sinon": "^1.0.5",
	"karma-sourcemap-loader": "^0.3.7",
	"karma-webpack": "^1.7.0",
	"load-grunt-tasks": "^3.5.2",
	minimist: "^1.2.0",
	mocha: "^5.2.0",
	sinon: "^4.5.0",
	typescript: "^2.8.1",
	"url-search-params": "^0.10.0",
	webpack: "^1.13.1",
	"webpack-dev-server": "^1.14.1"
};
var browser$1 = {
	"./lib/adapters/http.js": "./lib/adapters/xhr.js"
};
var typings = "./index.d.ts";
var dependencies = {
	"follow-redirects": "1.5.10"
};
var bundlesize = [
	{
		path: "./dist/axios.min.js",
		threshold: "5kB"
	}
];
var _package = {
	name: name,
	version: version,
	description: description,
	main: main,
	scripts: scripts,
	repository: repository,
	keywords: keywords,
	author: author,
	license: license,
	bugs: bugs,
	homepage: homepage,
	devDependencies: devDependencies,
	browser: browser$1,
	typings: typings,
	dependencies: dependencies,
	bundlesize: bundlesize
};

var _package$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    name: name,
    version: version,
    description: description,
    main: main,
    scripts: scripts,
    repository: repository,
    keywords: keywords,
    author: author,
    license: license,
    bugs: bugs,
    homepage: homepage,
    devDependencies: devDependencies,
    browser: browser$1,
    typings: typings,
    dependencies: dependencies,
    bundlesize: bundlesize,
    'default': _package
});

var pkg = getCjsExportFromNamespace(_package$1);

var httpFollow = followRedirects.http;
var httpsFollow = followRedirects.https;






var isHttps = /https:?/;

/*eslint consistent-return:0*/
var http_1 = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }


        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      options.port = proxy.port;
      options.path = protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path;

      // Basic proxy authorization
      if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
        options.headers['Proxy-Authorization'] = 'Basic ' + base64;
      }
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxContentLength && config.maxContentLength > -1) {
      options.maxBodyLength = config.maxContentLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;
      switch (res.headers['content-encoding']) {
      /*eslint default-case:0*/
      case 'gzip':
      case 'compress':
      case 'deflate':
        // add the unzipper to the body stream processing pipeline
        stream = (res.statusCode === 204) ? stream : stream.pipe(zlib.createUnzip());

        // remove the content-encoding in order to not confuse downstream operations
        delete res.headers['content-encoding'];
        break;
      }

      // return the last request in case of redirects
      var lastRequest = res.req || req;

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted) return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(config.timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = http_1;
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults_1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios_1;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = Cancel_1;
axios.CancelToken = CancelToken_1;
axios.isCancel = isCancel;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;

var axios_1 = axios;

// Allow use of default import syntax in TypeScript
var default_1 = axios;
axios_1.default = default_1;

var axios$1 = axios_1;

var ApiError = /** @class */ (function () {
    function ApiError(_a) {
        var data = _a.data, status = _a.status, request = _a.request;
        this.data = data;
        this.status = status;
        this.request = request;
        Object.setPrototypeOf(this, ApiError.prototype);
        Error.captureStackTrace(this, ApiError);
    }
    return ApiError;
}());

var HttpClient = /** @class */ (function () {
    function HttpClient(config) {
        this.client = axios$1.create({
            baseURL: config.baseURI,
            timeout: 50000,
        });
    }
    HttpClient.prototype.request = function (_a) {
        var method = _a.method, _b = _a.url, url = _b === void 0 ? '' : _b, _c = _a.params, params = _c === void 0 ? {} : _c, _d = _a.data, dataParam = _d === void 0 ? {} : _d, _e = _a.headers, headers = _e === void 0 ? {} : _e;
        return __awaiter(this, void 0, void 0, function () {
            var axiosConfig, _f, dataResponse, status, error_1, _g, status, data;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _h.trys.push([0, 2, , 3]);
                        axiosConfig = {
                            data: dataParam,
                            url: url,
                            params: params,
                            method: method,
                            headers: headers,
                        };
                        return [4 /*yield*/, this.client(axiosConfig)];
                    case 1:
                        _f = _h.sent(), dataResponse = _f.data, status = _f.status;
                        return [2 /*return*/, {
                                data: dataResponse,
                                status: status,
                                request: {
                                    method: method,
                                    url: url,
                                    params: params,
                                    data: dataParam,
                                    headers: headers,
                                },
                            }];
                    case 2:
                        error_1 = _h.sent();
                        if (error_1.response) {
                            _g = error_1.response, status = _g.status, data = _g.data;
                            throw new ApiError({
                                data: data,
                                status: status,
                                request: { method: method, url: url, params: params, data: dataParam, headers: headers },
                            });
                        }
                        throw new Error(error_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return HttpClient;
}());

var SimetraError = /** @class */ (function (_super) {
    __extends(SimetraError, _super);
    function SimetraError(name, data, request) {
        if (data === void 0) { data = undefined; }
        if (request === void 0) { request = undefined; }
        var _this = _super.call(this, name) || this;
        _this.request = request;
        _this.data = data;
        Object.setPrototypeOf(_this, SimetraError.prototype);
        return _this;
    }
    return SimetraError;
}(Error));

var Resource = /** @class */ (function () {
    function Resource(config) {
        this.config = config;
        this.httpClient = new HttpClient({ baseURI: config.baseURI });
    }
    Resource.prototype.paramsAuth = function () {
        var _a = this.config, usuario = _a.usuario, senha = _a.senha;
        return {
            usuario: usuario,
            senha: senha,
        };
    };
    Resource.prototype.processResponse = function (response) {
        try {
            var data = response.data, request = response.request, status = response.status;
            if (data.retorno === 'ACESSO NAO AUTORIZADO') {
                throw new SimetraError('Acesso não autorizado, verifique as credencias informadas', data, request);
            }
            return {
                data: data,
                status: status,
                request: request,
            };
        }
        catch (error) {
            if (error instanceof SimetraError) {
                throw new Error(error.message);
            }
            throw new Error('Erro desconhecido, verifique os parâmetros da sua requisição');
        }
    };
    Resource.prototype.callApi = function (_a) {
        var method = _a.method, data = _a.data, params = _a.params;
        return __awaiter(this, void 0, void 0, function () {
            var _b, usuario, senha, response;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = this.paramsAuth(), usuario = _b.usuario, senha = _b.senha;
                        return [4 /*yield*/, this.httpClient.request({
                                method: method,
                                data: data,
                                params: __assign(__assign({}, params), { sUser: usuario, sSenha: senha }),
                            })];
                    case 1:
                        response = _c.sent();
                        return [2 /*return*/, this.processResponse(response)];
                }
            });
        });
    };
    return Resource;
}());

var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(config) {
        return _super.call(this, config) || this;
    }
    Cliente.prototype.consulta = function (_a) {
        var _b = _a.CNPJ_CPF_CLIE, CNPJ_CPF_CLIE = _b === void 0 ? undefined : _b, _c = _a.COD_CNTR, COD_CNTR = _c === void 0 ? undefined : _c;
        return __awaiter(this, void 0, void 0, function () {
            var _d, data, request;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CLIENTE_CONSULTAR' },
                            data: {
                                CNPJ_CPF_CLIE: CNPJ_CPF_CLIE,
                                COD_CNTR: COD_CNTR,
                            },
                        })];
                    case 1:
                        _d = _e.sent(), data = _d.data, request = _d.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.login = function (_a) {
        var CNPJ_CPF_CLIE = _a.CNPJ_CPF_CLIE, ASSINANTE_SENHA = _a.ASSINANTE_SENHA;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CLIENTE_LOGIN' },
                            data: {
                                CNPJ_CPF_CLIE: CNPJ_CPF_CLIE,
                                ASSINANTE_SENHA: ASSINANTE_SENHA,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.cadastrarContrato = function (_a) {
        var Cpf = _a.Cpf, Nome = _a.Nome, Rg = _a.Rg, NomePai = _a.NomePai, NomeMae = _a.NomeMae, DataNascimento = _a.DataNascimento, Cep = _a.Cep, Logradouro = _a.Logradouro, Numero = _a.Numero, Complemento = _a.Complemento, Bairro = _a.Bairro, Cidade = _a.Cidade, Uf = _a.Uf, DddTelefone = _a.DddTelefone, NumeroTelefone = _a.NumeroTelefone, DddCelular = _a.DddCelular, NumeroCelular = _a.NumeroCelular, Email = _a.Email, Cod_prod = _a.Cod_prod, Parc_instalacao = _a.Parc_instalacao, Dia_Vencimento = _a.Dia_Vencimento, FormaPagto = _a.FormaPagto, COD_BANCO = _a.COD_BANCO, TIPOCONTA = _a.TIPOCONTA, AGENCIA = _a.AGENCIA, Conta = _a.Conta, dvConta = _a.dvConta, DataInstalacao = _a.DataInstalacao, PeriodoInstalacao = _a.PeriodoInstalacao, fixo = _a.fixo, movel = _a.movel;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CLIENTE_CADASTRAR_CONTRATO' },
                            data: {
                                Cpf: Cpf,
                                Nome: Nome,
                                Rg: Rg,
                                NomePai: NomePai,
                                NomeMae: NomeMae,
                                DataNascimento: DataNascimento,
                                Cep: Cep,
                                Logradouro: Logradouro,
                                Numero: Numero,
                                Complemento: Complemento,
                                Bairro: Bairro,
                                Cidade: Cidade,
                                Uf: Uf,
                                DddTelefone: DddTelefone,
                                NumeroTelefone: NumeroTelefone,
                                DddCelular: DddCelular,
                                NumeroCelular: NumeroCelular,
                                Email: Email,
                                Cod_prod: Cod_prod,
                                Parc_instalacao: Parc_instalacao,
                                Dia_Vencimento: Dia_Vencimento,
                                FormaPagto: FormaPagto,
                                COD_BANCO: COD_BANCO,
                                TIPOCONTA: TIPOCONTA,
                                AGENCIA: AGENCIA,
                                Conta: Conta,
                                dvConta: dvConta,
                                DataInstalacao: DataInstalacao,
                                PeriodoInstalacao: PeriodoInstalacao,
                                fixo: fixo,
                                movel: movel,
                            },
                        })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.cadastrarVindi = function (_a) {
        var CNPJ_CPF_CLIE = _a.CNPJ_CPF_CLIE, nomeCartao = _a.nomeCartao, dataValidadeCartao = _a.dataValidadeCartao, numeroCartao = _a.numeroCartao, cvvCartao = _a.cvvCartao, bandeiraCartao = _a.bandeiraCartao;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_VINDI_CARTAO_CADASTRAR' },
                            data: {
                                CNPJ_CPF_CLIE: CNPJ_CPF_CLIE,
                                nomeCartao: nomeCartao,
                                dataValidadeCartao: dataValidadeCartao,
                                numeroCartao: numeroCartao,
                                cvvCartao: cvvCartao,
                                bandeiraCartao: bandeiraCartao,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.consultaCadastroVindi = function (_a) {
        var CNPJ_CPF_CLIE = _a.CNPJ_CPF_CLIE;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_VINDI_CONSULTAR_CADASTRO' },
                            data: {
                                CNPJ_CPF_CLIE: CNPJ_CPF_CLIE,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.atualizar = function (_a) {
        var CNPJ_CPF_CLIE = _a.CNPJ_CPF_CLIE, COD_CLIE = _a.COD_CLIE, EMAIL = _a.EMAIL, TELEFONE1 = _a.TELEFONE1, TELEFONE2 = _a.TELEFONE2, TELEFONE3 = _a.TELEFONE3, TELEFONE4 = _a.TELEFONE4;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CLIENTE_ATUALIZAR' },
                            data: {
                                CNPJ_CPF_CLIE: CNPJ_CPF_CLIE,
                                COD_CLIE: COD_CLIE,
                                EMAIL: EMAIL,
                                TELEFONE1: TELEFONE1,
                                TELEFONE2: TELEFONE2,
                                TELEFONE3: TELEFONE3,
                                TELEFONE4: TELEFONE4,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * @param {Object} param
     * @param param.COD_CLIE
     * @param param.COD_CNTR
     * @param param.CNPJ_CPF_CLIE
     * @param param.nomeCartao
     * @param param.dataValidadeCartao DEVE SER PADRAO MMAA, exemplo: 0425
     * @param param.numeroCartao
     * @param param.cvvCartao
     * @param param.bandeiraCartao Americanet: Amex, Diners, Hipercard, Master, Visa, Fit: visa, elo, hipercard, mastercard, diners_club, american_express, Rede: mastercard, visa, diners_club, elo, american_express, Network: visa, master, amex, elo, aura, jcb, diners, discover
     * @param param.COD_EMPR_FATR Retornado no método FITTELECOM_CLIENTE_CONSULTAR
     */
    Cliente.prototype.CartaoCadastrarNovo = function (_a) {
        var COD_CLIE = _a.COD_CLIE, COD_CNTR = _a.COD_CNTR, CNPJ_CPF_CLIE = _a.CNPJ_CPF_CLIE, nomeCartao = _a.nomeCartao, dataValidadeCartao = _a.dataValidadeCartao, numeroCartao = _a.numeroCartao, cvvCartao = _a.cvvCartao, bandeiraCartao = _a.bandeiraCartao, COD_EMPR_FATR = _a.COD_EMPR_FATR;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CONTRATO_CADASTRAR_CARTAO' },
                            data: {
                                COD_CLIE: COD_CLIE,
                                COD_CNTR: COD_CNTR,
                                CNPJ_CPF_CLIE: CNPJ_CPF_CLIE,
                                nomeCartao: nomeCartao,
                                dataValidadeCartao: dataValidadeCartao,
                                numeroCartao: numeroCartao,
                                cvvCartao: cvvCartao,
                                bandeiraCartao: bandeiraCartao,
                                COD_EMPR_FATR: COD_EMPR_FATR,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * @param {Object} param
     * @param param.COD_CLIE Retornado no método FITTELECOM_CLIENTE_CONSULTAR
     * @param param.COD_CLIE_CARTAO Retornado no método FITTELECOM_CLIENTE_CONSULTAR_CARTAO
     * @param param.COD_CNTR_TITL Retornado no método FITTELECOM_CONTRATO_CONSULTAR_TITULO
     * @param param.NRO_PARCELA Ate 6 vezes
     * @param param.VLR_TOTAL Passar 0 (somente usado para acordo)
     * @param param.CNPJ_CPF_CLIE
     * @param param.OPERACAO_USN Passar 0
     * @param param.CODE_OPERACAO Passar tit_COD_CNTR_TITL - exemplo tit_56087544
     * @constructor
     */
    Cliente.prototype.CartaoPagamentorapido = function (_a) {
        var COD_CLIE = _a.COD_CLIE, COD_CLIE_CARTAO = _a.COD_CLIE_CARTAO, COD_CNTR_TITL = _a.COD_CNTR_TITL, NRO_PARCELA = _a.NRO_PARCELA, VLR_TOTAL = _a.VLR_TOTAL, CNPJ_CPF_CLIE = _a.CNPJ_CPF_CLIE, OPERACAO_USN = _a.OPERACAO_USN, CODE_OPERACAO = _a.CODE_OPERACAO;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CONTRATO_TITULO_PAGAMENTO_RAPIDO' },
                            data: {
                                COD_CLIE: COD_CLIE,
                                COD_CLIE_CARTAO: COD_CLIE_CARTAO,
                                COD_CNTR_TITL: COD_CNTR_TITL,
                                NRO_PARCELA: NRO_PARCELA,
                                VLR_TOTAL: VLR_TOTAL,
                                CNPJ_CPF_CLIE: CNPJ_CPF_CLIE,
                                OPERACAO_USN: OPERACAO_USN,
                                CODE_OPERACAO: CODE_OPERACAO,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.EnviarEmail = function (_a) {
        var CNPJ_CPF_CLIE = _a.CNPJ_CPF_CLIE, EMAIL_ASSUNTO = _a.EMAIL_ASSUNTO, EMAIL_DESTINO = _a.EMAIL_DESTINO, EMAIL_MENSAGEM = _a.EMAIL_MENSAGEM, EMAIL_SENDER = _a.EMAIL_SENDER;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_ENVIAR_EMAIL' },
                            data: {
                                EMAIL_ASSUNTO: EMAIL_ASSUNTO,
                                EMAIL_DESTINO: EMAIL_DESTINO,
                                EMAIL_MENSAGEM: EMAIL_MENSAGEM,
                                EMAIL_SENDER: EMAIL_SENDER,
                                CNPJ_CPF_CLIE: CNPJ_CPF_CLIE,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.CartaoConsultarCadastrados = function (_a) {
        var CNPJ_CPF_CLIE = _a.CNPJ_CPF_CLIE;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CLIENTE_CONSULTAR_CARTAO' },
                            data: {
                                CNPJ_CPF_CLIE: CNPJ_CPF_CLIE,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.IndicarNovoLead = function (_a) {
        var CNPJ_CPF = _a.CNPJ_CPF, CNPJ_CPF_INDICANTE = _a.CNPJ_CPF_INDICANTE, DATA_NASCIMENTO = _a.DATA_NASCIMENTO, DDD_CELULAR1 = _a.DDD_CELULAR1, DDD_CELULAR2 = _a.DDD_CELULAR2, DDD_CELULAR3 = _a.DDD_CELULAR3, DDD_TELEFONE1 = _a.DDD_TELEFONE1, DDD_TELEFONE2 = _a.DDD_TELEFONE2, DDD_TELEFONE3 = _a.DDD_TELEFONE3, EMAIL = _a.EMAIL, ENDERECO_BAIRRO = _a.ENDERECO_BAIRRO, ENDERECO_CEP = _a.ENDERECO_CEP, ENDERECO_CIDADE = _a.ENDERECO_CIDADE, ENDERECO_COMPLEMENTO = _a.ENDERECO_COMPLEMENTO, ENDERECO_LOGRADOURO = _a.ENDERECO_LOGRADOURO, ENDERECO_LOGRADOURO_TIPO = _a.ENDERECO_LOGRADOURO_TIPO, ENDERECO_NUMERO = _a.ENDERECO_NUMERO, ENDERECO_UF = _a.ENDERECO_UF, INSCRICAO_MUNICIPAL = _a.INSCRICAO_MUNICIPAL, NOME_CLIENTE = _a.NOME_CLIENTE, NOME_MAE = _a.NOME_MAE, NOME_PAI = _a.NOME_PAI, NUMERO_CELULAR1 = _a.NUMERO_CELULAR1, NUMERO_CELULAR2 = _a.NUMERO_CELULAR2, NUMERO_CELULAR3 = _a.NUMERO_CELULAR3, NUMERO_TELEFONE1 = _a.NUMERO_TELEFONE1, NUMERO_TELEFONE2 = _a.NUMERO_TELEFONE2, NUMERO_TELEFONE3 = _a.NUMERO_TELEFONE3, ORIGEM = _a.ORIGEM, RAZAO_SOCIAL = _a.RAZAO_SOCIAL, RG = _a.RG, SEXO = _a.SEXO;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_NOVO_LEAD' },
                            data: {
                                CNPJ_CPF: CNPJ_CPF,
                                CNPJ_CPF_INDICANTE: CNPJ_CPF_INDICANTE,
                                DATA_NASCIMENTO: DATA_NASCIMENTO,
                                DDD_CELULAR1: DDD_CELULAR1,
                                DDD_CELULAR2: DDD_CELULAR2,
                                DDD_CELULAR3: DDD_CELULAR3,
                                DDD_TELEFONE1: DDD_TELEFONE1,
                                DDD_TELEFONE2: DDD_TELEFONE2,
                                DDD_TELEFONE3: DDD_TELEFONE3,
                                EMAIL: EMAIL,
                                ENDERECO_BAIRRO: ENDERECO_BAIRRO,
                                ENDERECO_CEP: ENDERECO_CEP,
                                ENDERECO_CIDADE: ENDERECO_CIDADE,
                                ENDERECO_COMPLEMENTO: ENDERECO_COMPLEMENTO,
                                ENDERECO_LOGRADOURO: ENDERECO_LOGRADOURO,
                                ENDERECO_LOGRADOURO_TIPO: ENDERECO_LOGRADOURO_TIPO,
                                ENDERECO_NUMERO: ENDERECO_NUMERO,
                                ENDERECO_UF: ENDERECO_UF,
                                INSCRICAO_MUNICIPAL: INSCRICAO_MUNICIPAL,
                                NOME_CLIENTE: NOME_CLIENTE,
                                NOME_MAE: NOME_MAE,
                                NOME_PAI: NOME_PAI,
                                NUMERO_CELULAR1: NUMERO_CELULAR1,
                                NUMERO_CELULAR2: NUMERO_CELULAR2,
                                NUMERO_CELULAR3: NUMERO_CELULAR3,
                                NUMERO_TELEFONE1: NUMERO_TELEFONE1,
                                NUMERO_TELEFONE2: NUMERO_TELEFONE2,
                                NUMERO_TELEFONE3: NUMERO_TELEFONE3,
                                ORIGEM: ORIGEM,
                                RAZAO_SOCIAL: RAZAO_SOCIAL,
                                RG: RG,
                                SEXO: SEXO,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!data.retorno) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.EnviarSMS = function (_a) {
        var Celular = _a.Celular, Texto = _a.Texto, Cod_Cntr = _a.Cod_Cntr;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_ENVIAR_SMS' },
                            data: {
                                Celular: Celular,
                                Texto: Texto,
                                Cod_Cntr: Cod_Cntr,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(String(data.retorno.codigo) === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.RegistrarLogDeAcesso = function (_a) {
        var COD_CLIE = _a.COD_CLIE, AUDIT_APL_INCL = _a.AUDIT_APL_INCL, AUDIT_IP_INCL = _a.AUDIT_IP_INCL, CNPJ_CPF_CLIE = _a.CNPJ_CPF_CLIE, COD_CLIE_PORTAL_LOG_ACAO = _a.COD_CLIE_PORTAL_LOG_ACAO;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CLIENTE_REGISTRAR_LOG_ACESSO' },
                            data: {
                                COD_CLIE: COD_CLIE,
                                AUDIT_APL_INCL: AUDIT_APL_INCL,
                                AUDIT_IP_INCL: AUDIT_IP_INCL,
                                CNPJ_CPF_CLIE: CNPJ_CPF_CLIE,
                                COD_CLIE_PORTAL_LOG_ACAO: COD_CLIE_PORTAL_LOG_ACAO,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(String(data.retorno.codigo) === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.ConsultarCampanhaIndiqueEGanhe = function (_a) {
        var CNPJ_CPF_INDICANTE = _a.CNPJ_CPF_INDICANTE, DATA_FIM = _a.DATA_FIM, DATA_INICIO = _a.DATA_INICIO;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CONSULTA_CAMPANHA_INDIQUEGANHE' },
                            data: {
                                CNPJ_CPF_INDICANTE: CNPJ_CPF_INDICANTE,
                                DATA_FIM: DATA_FIM,
                                DATA_INICIO: DATA_INICIO,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(String(data.retorno.codigo) === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Cliente.prototype.ConsultarSaldoIndiqueEGanhe = function (_a) {
        var CNPJ_CPF_INDICANTE = _a.CNPJ_CPF_INDICANTE;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CONSULTA_SALDO_INDIQUEGANHE' },
                            data: {
                                CNPJ_CPF_INDICANTE: CNPJ_CPF_INDICANTE,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(String(data.retorno.codigo) === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return Cliente;
}(Resource));

var Atendimento = /** @class */ (function (_super) {
    __extends(Atendimento, _super);
    function Atendimento(config) {
        return _super.call(this, config) || this;
    }
    Atendimento.prototype.consulta = function (_a) {
        var PROTOCOLO = _a.PROTOCOLO, CNPJ_CPF_CLIE = _a.CNPJ_CPF_CLIE;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CHAMADO_CONSULTAR' },
                            data: { PROTOCOLO: PROTOCOLO, CNPJ_CPF_CLIE: CNPJ_CPF_CLIE },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Atendimento.prototype.cadastrar = function (_a) {
        var COD_CNTR = _a.COD_CNTR, COD_CNTR_ITEM = _a.COD_CNTR_ITEM, COD_CHAMADO_FLUXO = _a.COD_CHAMADO_FLUXO, TELEFONE1 = _a.TELEFONE1, TELEFONE2 = _a.TELEFONE2, DES_SOLICITANTE_EMAIL = _a.DES_SOLICITANTE_EMAIL, DES_SOLICITACAO = _a.DES_SOLICITACAO;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CHAMADO_CADASTRAR' },
                            data: {
                                COD_CNTR: COD_CNTR,
                                COD_CNTR_ITEM: COD_CNTR_ITEM,
                                COD_CHAMADO_FLUXO: COD_CHAMADO_FLUXO,
                                TELEFONE1: TELEFONE1,
                                TELEFONE2: TELEFONE2,
                                DES_SOLICITANTE_EMAIL: DES_SOLICITANTE_EMAIL,
                                DES_SOLICITACAO: DES_SOLICITACAO,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Atendimento.prototype.delegar = function (_a) {
        var SEQ_CHAMADO = _a.SEQ_CHAMADO, COD_FLUXO_PARA = _a.COD_FLUXO_PARA, DES_DETALHE = _a.DES_DETALHE;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CHAMADO_DELEGAR' },
                            data: {
                                SEQ_CHAMADO: SEQ_CHAMADO,
                                COD_FLUXO_PARA: COD_FLUXO_PARA,
                                DES_DETALHE: DES_DETALHE,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Atendimento.prototype.InteragirAppMeuAmericanet = function (_a) {
        var DES_DETALHE = _a.DES_DETALHE, SEQ_CHAMADO = _a.SEQ_CHAMADO;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CHAMADO_INTERAGIR' },
                            data: {
                                DES_DETALHE: DES_DETALHE,
                                SEQ_CHAMADO: SEQ_CHAMADO,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Atendimento.prototype.CadastrarAnexo = function (_a) {
        var SEQ_CHAMADO = _a.SEQ_CHAMADO, ANEXO_BUFFER = _a.ANEXO_BUFFER, ANEXO_NOME = _a.ANEXO_NOME, SEQ_CHAMADO_ANEXO_TIPO = _a.SEQ_CHAMADO_ANEXO_TIPO;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CHAMADO_ANEXO' },
                            data: {
                                SEQ_CHAMADO: SEQ_CHAMADO,
                                ANEXO_BUFFER: ANEXO_BUFFER,
                                ANEXO_NOME: ANEXO_NOME,
                                SEQ_CHAMADO_ANEXO_TIPO: SEQ_CHAMADO_ANEXO_TIPO,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return Atendimento;
}(Resource));

var IncidenteRede = /** @class */ (function (_super) {
    __extends(IncidenteRede, _super);
    function IncidenteRede(config) {
        return _super.call(this, config) || this;
    }
    IncidenteRede.prototype.consulta = function (_a) {
        var POP_IP = _a.POP_IP, ENDER_CDE_NOM = _a.ENDER_CDE_NOM, ENDER_BAIR_NOM = _a.ENDER_BAIR_NOM, ENDER_UF = _a.ENDER_UF;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CHAMADO_CONSULTAR_INCIDENTE_DE_REDE' },
                            data: {
                                POP_IP: POP_IP,
                                ENDER_CDE_NOM: ENDER_CDE_NOM,
                                ENDER_BAIR_NOM: ENDER_BAIR_NOM,
                                ENDER_UF: ENDER_UF,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return IncidenteRede;
}(Resource));

var Titulo = /** @class */ (function (_super) {
    __extends(Titulo, _super);
    function Titulo(config) {
        return _super.call(this, config) || this;
    }
    Titulo.prototype.cadastrar = function (_a) {
        var COD_CNTR = _a.COD_CNTR, TIPO_DE_COBRANCA = _a.TIPO_DE_COBRANCA, FORMA_DE_PAGAMENTO = _a.FORMA_DE_PAGAMENTO, DAT_VENC = _a.DAT_VENC, VLR_TOTAL = _a.VLR_TOTAL;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CONTRATO_CADASTRAR_TITULO' },
                            data: {
                                COD_CNTR: COD_CNTR,
                                TIPO_DE_COBRANCA: TIPO_DE_COBRANCA,
                                FORMA_DE_PAGAMENTO: FORMA_DE_PAGAMENTO,
                                DAT_VENC: DAT_VENC,
                                VLR_TOTAL: VLR_TOTAL,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Titulo.prototype.consulta = function (_a) {
        var COD_CNTR = _a.COD_CNTR, COD_CNTR_TITL = _a.COD_CNTR_TITL, COD_CLIE = _a.COD_CLIE, COD_STAT_TITL = _a.COD_STAT_TITL, DAT_VENC_INICIAL = _a.DAT_VENC_INICIAL, DAT_VENC_FINAL = _a.DAT_VENC_FINAL, DAT_RECEB_INICIAL = _a.DAT_RECEB_INICIAL, DAT_RECEB_FINAL = _a.DAT_RECEB_FINAL;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CONTRATO_CONSULTAR_TITULO' },
                            data: {
                                COD_CNTR: COD_CNTR,
                                COD_CNTR_TITL: COD_CNTR_TITL,
                                COD_CLIE: COD_CLIE,
                                COD_STAT_TITL: COD_STAT_TITL,
                                DAT_VENC_INICIAL: DAT_VENC_INICIAL,
                                DAT_VENC_FINAL: DAT_VENC_FINAL,
                                DAT_RECEB_INICIAL: DAT_RECEB_INICIAL,
                                DAT_RECEB_FINAL: DAT_RECEB_FINAL,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Titulo.prototype.quitar = function (_a) {
        var COD_CNTR = _a.COD_CNTR, COD_CNTR_TITL = _a.COD_CNTR_TITL, DAT_RECEB = _a.DAT_RECEB, VLR_RECEB = _a.VLR_RECEB;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CONTRATO_QUITAR_TITULO' },
                            data: {
                                COD_CNTR: COD_CNTR,
                                COD_CNTR_TITL: COD_CNTR_TITL,
                                DAT_RECEB: DAT_RECEB,
                                VLR_RECEB: VLR_RECEB,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Titulo.prototype.download = function (_a) {
        var COD_CNTR_TITL = _a.COD_CNTR_TITL, COD_ARQ_DOC = _a.COD_ARQ_DOC;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CONTRATO_DOWNLOAD_TITULO' },
                            data: {
                                COD_CNTR_TITL: COD_CNTR_TITL,
                                COD_ARQ_DOC: COD_ARQ_DOC,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return Titulo;
}(Resource));

var Vencimentos = /** @class */ (function (_super) {
    __extends(Vencimentos, _super);
    function Vencimentos(config) {
        return _super.call(this, config) || this;
    }
    Vencimentos.prototype.consulta = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, data, request;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'get',
                            params: { sNomeProc: 'FITTELECOM_PARAMETRO_DIAS_VENCIMENTO_CONSULTAR' },
                        })];
                    case 1:
                        _a = _b.sent(), data = _a.data, request = _a.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return Vencimentos;
}(Resource));

var Produto = /** @class */ (function (_super) {
    __extends(Produto, _super);
    function Produto(config) {
        return _super.call(this, config) || this;
    }
    Produto.prototype.consulta = function (_a) {
        var TIPO_PRODUTO = _a.TIPO_PRODUTO;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_PRODUTO_CONSULTAR' },
                            data: {
                                TIPO_PRODUTO: TIPO_PRODUTO,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return Produto;
}(Resource));

var Validar = /** @class */ (function (_super) {
    __extends(Validar, _super);
    function Validar(config) {
        return _super.call(this, config) || this;
    }
    Validar.prototype.viabilidadeKml = function (_a) {
        var pCEP = _a.pCEP, pNUMERO = _a.pNUMERO, pENDERECO = _a.pENDERECO, pBAIRRO = _a.pBAIRRO, pCIDADE = _a.pCIDADE, pUF = _a.pUF;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'get',
                            params: {
                                sNomeProc: 'FITTELECOM_VALIDAR_VIABILIDADE_KML',
                                pCEP: pCEP,
                                pNUMERO: pNUMERO,
                                pENDERECO: pENDERECO,
                                pBAIRRO: pBAIRRO,
                                pCIDADE: pCIDADE,
                                pUF: pUF,
                            },
                        })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Validar.prototype.email = function (_a) {
        var pEMAIL = _a.pEMAIL, pAUDIT_IP_INCL = _a.pAUDIT_IP_INCL;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'get',
                            params: {
                                sNomeProc: 'FITTELECOM_VALIDAR_EMAIL',
                                pEMAIL: pEMAIL,
                                pAUDIT_IP_INCL: pAUDIT_IP_INCL,
                            },
                        })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Validar.prototype.telefone = function (_a) {
        var pTELEFONE = _a.pTELEFONE, pAUDIT_IP_INCL = _a.pAUDIT_IP_INCL;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'get',
                            params: {
                                sNomeProc: 'FITTELECOM_VALIDAR_TELEFONE',
                                pTELEFONE: pTELEFONE,
                                pAUDIT_IP_INCL: pAUDIT_IP_INCL,
                            },
                        })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return Validar;
}(Resource));

var Contrato = /** @class */ (function (_super) {
    __extends(Contrato, _super);
    function Contrato(config) {
        return _super.call(this, config) || this;
    }
    Contrato.prototype.cadastrarAnexo = function (_a) {
        var COD_CNTR = _a.COD_CNTR, SEQ_CONTRATO_ANEXO_TIPO = _a.SEQ_CONTRATO_ANEXO_TIPO, ANEXO_BUFFER = _a.ANEXO_BUFFER, ANEXO_NOME = _a.ANEXO_NOME;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CONTRATO_CADASTRAR_ANEXO' },
                            data: {
                                COD_CNTR: COD_CNTR,
                                SEQ_CONTRATO_ANEXO_TIPO: SEQ_CONTRATO_ANEXO_TIPO,
                                ANEXO_BUFFER: ANEXO_BUFFER,
                                ANEXO_NOME: ANEXO_NOME,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Contrato.prototype.desbloquear = function (_a) {
        var COD_CNTR = _a.COD_CNTR;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_CONTRATO_DESBLOQUEAR' },
                            data: {
                                COD_CNTR: COD_CNTR,
                                MOTIVO_DESBLOQUEIO: 'DESBLOQUEIO TEMPORARIO',
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Contrato.prototype.consultarContratoLinhaMovel = function (_a) {
        var COD_CNTR = _a.COD_CNTR, DATA_CONSUMO = _a.DATA_CONSUMO, SEQ_LINHA = _a.SEQ_LINHA;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: {
                                sNomeProc: 'FITTELECOM_CONTRATO_CONSULTAR_CONSUMO_LINHA_MOVEL',
                            },
                            data: {
                                COD_CNTR: COD_CNTR,
                                DATA_CONSUMO: DATA_CONSUMO,
                                SEQ_LINHA: SEQ_LINHA,
                            },
                        })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Contrato.prototype.trocarFormaPagamento = function (_a) {
        var COD_CNTR = _a.COD_CNTR, FORM_PAGTO = _a.FORM_PAGTO, BANDEIRACARTAO = _a.BANDEIRACARTAO, CVVCARTAO = _a.CVVCARTAO, DATAVALIDADECARTAO = _a.DATAVALIDADECARTAO, NOMECARTAO = _a.NOMECARTAO, NUMEROCARTAO = _a.NUMEROCARTAO, IND_BOLETO_FISICO = _a.IND_BOLETO_FISICO;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: {
                                sNomeProc: 'FITTELECOM_CONTRATO_ALTERAR_FORMA_PAGAMENTO',
                            },
                            data: {
                                COD_CNTR: COD_CNTR,
                                FORM_PAGTO: FORM_PAGTO,
                                BANDEIRACARTAO: BANDEIRACARTAO,
                                CVVCARTAO: CVVCARTAO,
                                DATAVALIDADECARTAO: DATAVALIDADECARTAO,
                                NOMECARTAO: NOMECARTAO,
                                NUMEROCARTAO: NUMEROCARTAO,
                                IND_BOLETO_FISICO: IND_BOLETO_FISICO,
                            },
                        })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Contrato.prototype.alterarDiaDeVencimento = function (_a) {
        var CNPJ_CPF_CLIE = _a.CNPJ_CPF_CLIE, COD_CNTR = _a.COD_CNTR, DIA_VENC = _a.DIA_VENC;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: {
                                sNomeProc: 'FITTELECOM_CONTRATO_ALTERAR_DATA_VENCIMENTO',
                            },
                            data: {
                                CNPJ_CPF_CLIE: CNPJ_CPF_CLIE,
                                COD_CNTR: COD_CNTR,
                                DIA_VENC: DIA_VENC,
                            },
                        })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Contrato.prototype.alterarWifi = function (_a) {
        var COD_CLIE = _a.COD_CLIE, COD_CNTR = _a.COD_CNTR, COD_CNTR_ITEM = _a.COD_CNTR_ITEM, COD_PROTOCOLO = _a.COD_PROTOCOLO, NOM_WIFI_NOVO = _a.NOM_WIFI_NOVO, SEN_WIFI_NOVO = _a.SEN_WIFI_NOVO;
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: {
                                sNomeProc: 'FITTELECOM_CONTRATO_ALTERAR_WIFI',
                            },
                            data: {
                                COD_CLIE: COD_CLIE,
                                COD_CNTR: COD_CNTR,
                                COD_CNTR_ITEM: COD_CNTR_ITEM,
                                COD_PROTOCOLO: COD_PROTOCOLO,
                                NOM_WIFI_NOVO: NOM_WIFI_NOVO,
                                SEN_WIFI_NOVO: SEN_WIFI_NOVO,
                            },
                        })];
                    case 1:
                        data = (_b.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Contrato.prototype.consultarDiasDeVencimento = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'get',
                            params: {
                                sNomeProc: 'FITTELECOM_PARAMETRO_DIAS_VENCIMENTO_CONSULTAR',
                            },
                        })];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Contrato.prototype.tituloPixGerarBoleto = function (_a) {
        var COD_CLIE = _a.COD_CLIE, COD_CNTR_TITL = _a.COD_CNTR_TITL;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_PIX_GERAR_BOLETO' },
                            data: {
                                COD_CLIE: COD_CLIE,
                                COD_CNTR_TITL: COD_CNTR_TITL,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(String(data.retorno.codigo) === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Contrato.prototype.alterarFormaDePagamentoGrupo = function (_a) {
        var COD_CNTR = _a.COD_CNTR, FORM_PAGTO = _a.FORM_PAGTO, COD_CLIE_CARTAO = _a.COD_CLIE_CARTAO, COD_CLIE_DEBITO_EM_CONTA = _a.COD_CLIE_DEBITO_EM_CONTA, IND_BOLETO_FISICO = _a.IND_BOLETO_FISICO;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: {
                                sNomeProc: 'FITTELECOM_CONTRATO_ALTERAR_FORMA_PAGAMENTO_GRUPO',
                            },
                            data: {
                                COD_CNTR: COD_CNTR,
                                FORM_PAGTO: FORM_PAGTO,
                                COD_CLIE_CARTAO: COD_CLIE_CARTAO,
                                COD_CLIE_DEBITO_EM_CONTA: COD_CLIE_DEBITO_EM_CONTA,
                                IND_BOLETO_FISICO: IND_BOLETO_FISICO,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(String(data.retorno.codigo) === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return Contrato;
}(Resource));

var HabilitacaoProvisoria = /** @class */ (function (_super) {
    __extends(HabilitacaoProvisoria, _super);
    function HabilitacaoProvisoria(config) {
        return _super.call(this, config) || this;
    }
    HabilitacaoProvisoria.prototype.consulta = function (_a) {
        var CLIENTE_CNPJ_CPF = _a.CLIENTE_CNPJ_CPF;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_PROMESSA_PAGAMENTO_CONSULTAR' },
                            data: {
                                CLIENTE_CNPJ_CPF: CLIENTE_CNPJ_CPF,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    HabilitacaoProvisoria.prototype.desbloquear = function (_a) {
        var CLIENTE_CNPJ_CPF = _a.CLIENTE_CNPJ_CPF, COD_CNTR = _a.COD_CNTR;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: { sNomeProc: 'FITTELECOM_PROMESSA_PAGAMENTO_DESBLOQUEAR' },
                            data: {
                                CLIENTE_CNPJ_CPF: CLIENTE_CNPJ_CPF,
                                COD_CNTR: COD_CNTR,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(data.retorno.codigo === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return HabilitacaoProvisoria;
}(Resource));

var Debito = /** @class */ (function (_super) {
    __extends(Debito, _super);
    function Debito(config) {
        return _super.call(this, config) || this;
    }
    Debito.prototype.cadastrarConta = function (_a) {
        var AGENCIA_DIGITO = _a.AGENCIA_DIGITO, AGENCIA_NRO = _a.AGENCIA_NRO, COD_CLIE = _a.COD_CLIE, CONTA_DIGITO = _a.CONTA_DIGITO, CONTA_NRO = _a.CONTA_NRO, NOME_BANCO = _a.NOME_BANCO;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: {
                                sNomeProc: 'FITTELECOM_CONTRATO_CADASTRAR_DEBITO_EM_CONTA',
                            },
                            data: {
                                AGENCIA_DIGITO: AGENCIA_DIGITO,
                                AGENCIA_NRO: AGENCIA_NRO,
                                COD_CLIE: COD_CLIE,
                                CONTA_DIGITO: CONTA_DIGITO,
                                CONTA_NRO: CONTA_NRO,
                                NOME_BANCO: NOME_BANCO,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(String(data.retorno.codigo) === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Debito.prototype.consultarConta = function (_a) {
        var COD_CLIE = _a.COD_CLIE;
        return __awaiter(this, void 0, void 0, function () {
            var _b, data, request;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.callApi({
                            method: 'post',
                            params: {
                                sNomeProc: 'FITTELECOM_CLIENTE_CONSULTAR_DEBITO_EM_CONTA',
                            },
                            data: {
                                COD_CLIE: COD_CLIE,
                            },
                        })];
                    case 1:
                        _b = _c.sent(), data = _b.data, request = _b.request;
                        if (!(String(data.retorno.codigo) === '0')) {
                            throw new SimetraError(data.retorno.mensagem, data, request);
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return Debito;
}(Resource));

/**
 * Exemplo uso da SDK
 *
 * ```typescript
 * const SimetraSdk = require('@midia-simples/simetra-sdk');
 *
 * (async () => {
 *    try {
 *      const simetraLib = new SimetraSdk({
 *        usuario: 'SIMETRA_USUARIO',
 *        senha: 'SIMETRA_SENHA',
 *        baseURI: 'SIMETRA_BASE_URL',
 *      });
 *      const response = await SimetraSdk.Cliente.consulta({
 *       CNPJ_CPF_CLIE: '',
 *      });
 *      response.FAT_CLIENTE.COD_CLIE;
 *      response.FAT_CLIENTE.DAT_NASC;
 *      response.FAT_CLIENTE.DAT_NASC;
 *    } catch (e) {
 *      console.log('err', e);
 *   }
 * })();
 * ```
 */
var SimetraSdk = /** @class */ (function () {
    function SimetraSdk(config) {
        this.config = config;
    }
    Object.defineProperty(SimetraSdk.prototype, "Atendimento", {
        get: function () {
            return new Atendimento(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimetraSdk.prototype, "Cliente", {
        get: function () {
            return new Cliente(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimetraSdk.prototype, "IncidenteRede", {
        get: function () {
            return new IncidenteRede(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimetraSdk.prototype, "Titulo", {
        get: function () {
            return new Titulo(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimetraSdk.prototype, "Vencimentos", {
        get: function () {
            return new Vencimentos(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimetraSdk.prototype, "Produto", {
        get: function () {
            return new Produto(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimetraSdk.prototype, "Validar", {
        get: function () {
            return new Validar(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimetraSdk.prototype, "Contrato", {
        get: function () {
            return new Contrato(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimetraSdk.prototype, "HabilitacaoProvisoria", {
        get: function () {
            return new HabilitacaoProvisoria(this.config);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SimetraSdk.prototype, "Debito", {
        get: function () {
            return new Debito(this.config);
        },
        enumerable: false,
        configurable: true
    });
    return SimetraSdk;
}());

export default SimetraSdk;
//# sourceMappingURL=simetra-sdk.esm.js.map
