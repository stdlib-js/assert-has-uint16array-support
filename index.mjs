// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-uint16array@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-uint16-max@esm/index.mjs";var r="function"==typeof Uint16Array?Uint16Array:null;function s(){var s,i;if("function"!=typeof r)return!1;try{i=new r(i=[1,3.14,-3.14,n+1,n+2]),s=t(i)&&1===i[0]&&3===i[1]&&i[2]===n-2&&0===i[3]&&1===i[4]}catch(t){s=!1}return s}export{s as default};
//# sourceMappingURL=index.mjs.map
