'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.omit = omit;
exports.arraysEqual = arraysEqual;
var isElementAnSFC = exports.isElementAnSFC = function isElementAnSFC(element) {
  var isNativeDOMElement = typeof element.type === 'string';

  if (isNativeDOMElement) {
    return false;
  }

  return !element.type.prototype.isReactComponent;
};
function omit(obj) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (attrs.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

function arraysEqual(a, b) {
  var sameObject = a === b;
  if (sameObject) {
    return true;
  }

  var notBothArrays = !Array.isArray(a) || !Array.isArray(b);
  var differentLengths = a.length !== b.length;

  if (notBothArrays || differentLengths) {
    return false;
  }

  return a.every(function (element, index) {
    return element === b[index];
  });
}

function memoizeString(fn) {
  var cache = {};

  return function (str) {
    if (!cache[str]) {
      cache[str] = fn(str);
    }
    return cache[str];
  };
}

var hyphenate = exports.hyphenate = memoizeString(function (str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
});