// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,r="function"==typeof e?e.toStringTag:"",i=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,i,f,l,y;if(null==t)return n.call(t);i=t[r],y=r,e=null!=(l=t)&&o.call(l,y);try{t[r]=void 0}catch(o){return n.call(t)}return f=n.call(t),e?t[r]=i:delete t[r],f}:function(t){return n.call(t)},f="function"==typeof Uint16Array,l="function"==typeof Uint16Array?Uint16Array:null;return function(){var t,n,o;if("function"!=typeof l)return!1;try{n=new l(n=[1,3.14,-3.14,65536,65537]),o=n,t=(f&&o instanceof Uint16Array||"[object Uint16Array]"===i(o))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).hasUint16ArraySupport=n();
//# sourceMappingURL=index.js.map
