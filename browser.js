// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,o=n,e=function(t){return o.call(t)},r=Object.prototype.hasOwnProperty,i=function(t,n){return null!=t&&r.call(t,n)},f="function"==typeof Symbol?Symbol.toStringTag:"",l=i,u=f,y=n,c=e,a=function(t){var n,o,e;if(null==t)return y.call(t);o=t[u],n=l(t,u);try{t[u]=void 0}catch(n){return y.call(t)}return e=y.call(t),n?t[u]=o:delete t[u],e},p=t&&"symbol"==typeof Symbol.toStringTag?a:c,b="function"==typeof Uint16Array,s=function(t){return b&&t instanceof Uint16Array||"[object Uint16Array]"===p(t)},d="function"==typeof Uint16Array?Uint16Array:null;return function(){var t,n;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,65536,65537]),t=s(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).hasUint16ArraySupport=n();
//# sourceMappingURL=browser.js.map
