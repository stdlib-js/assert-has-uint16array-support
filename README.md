<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Uint16Array Support

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Detect native [`Uint16Array`][mdn-uint16array] support.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-has-uint16array-support
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var hasUint16ArraySupport = require( '@stdlib/assert-has-uint16array-support' );
```

#### hasUint16ArraySupport()

Detects if a runtime environment supports [`Uint16Array`][mdn-uint16array].

```javascript
var bool = hasUint16ArraySupport();
// returns <boolean>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasUint16ArraySupport = require( '@stdlib/assert-has-uint16array-support' );

var bool = hasUint16ArraySupport();
if ( bool ) {
    console.log( 'Environment has Uint16Array support.' );
} else {
    console.log( 'Environment lacks Uint16Array support.' );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/assert-has-uint16array-support
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: has-uint16array-support [options]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ has-uint16array-support
<boolean>
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-has-uint16array-support.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-has-uint16array-support

[test-image]: https://github.com/stdlib-js/assert-has-uint16array-support/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-has-uint16array-support/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-has-uint16array-support/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-has-uint16array-support?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-has-uint16array-support.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-has-uint16array-support/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-has-uint16array-support/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-has-uint16array-support/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-has-uint16array-support/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-has-uint16array-support/main/LICENSE

[mdn-uint16array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array

</section>

<!-- /.links -->
