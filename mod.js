// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,e="function"==typeof o?o.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,a,l,y,c;if(null==t)return r.call(t);a=t[e],c=e,o=null!=(y=t)&&n.call(y,c);try{t[e]=void 0}catch(n){return r.call(t)}return l=r.call(t),o?t[e]=a:delete t[e],l}:function(t){return r.call(t)},l="function"==typeof Uint16Array;var y="function"==typeof Uint16Array?Uint16Array:null;function c(){var t,r,n;if("function"!=typeof y)return!1;try{r=new y(r=[1,3.14,-3.14,65536,65537]),n=r,t=(l&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}export{c as default};
//# sourceMappingURL=mod.js.map
