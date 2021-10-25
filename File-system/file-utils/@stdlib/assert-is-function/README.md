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

# isFunction

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if a value is a function.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-function
```

</section>

<section class="usage">

## Usage

```javascript
var isFunction = require( '@stdlib/assert-is-function' );
```

#### isFunction( value )

Tests if a `value` is a `function`.

```javascript
function beep() {
    console.log( 'beep' );
}

var bool = isFunction( beep );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function, no-restricted-syntax -->

<!-- eslint no-undef: "error" -->

```javascript
var isFunction = require( '@stdlib/assert-is-function' );

var bool = isFunction( function foo() {} );
// returns true

bool = isFunction( 'beep' );
// returns false

bool = isFunction( 5 );
// returns false

bool = isFunction( true );
// returns false

bool = isFunction( null );
// returns false

bool = isFunction( [] );
// returns false

bool = isFunction( {} );
// returns false
```

</section>

<!-- /.examples -->


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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-function.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-function

[test-image]: https://github.com/stdlib-js/assert-is-function/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-function/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-function/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-function?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-function.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-function/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-function/main/LICENSE

</section>

<!-- /.links -->