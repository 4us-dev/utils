# 4us utils

<div align="center">
  <a href="https://4us.dev/">
    <img src="https://raw.githubusercontent.com/4us-dev/utils/master/resources/logo-4us-dev.png" alt="4us dev logo" width="200">
  </a>
  <br/>  
</div>

[![npm-package](https://badge.fury.io/js/%404us-dev%2Futils.svg)](https://www.npmjs.com/package/@4us-dev/utils)
[![issues](https://img.shields.io/github/issues/4us-dev/utils)](/issues)
[![dependencies](https://img.shields.io/david/4us-dev/utils)](https://david-dm.org/4us-dev/utils)
[![dev-dependencies](https://img.shields.io/david/dev/4us-dev/utils)](https://david-dm.org/4us-dev/utils?type=dev)
![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/4us-dev/utils)
[![downloads](https://img.shields.io/npm/dw/@4us-dev/utils)](https://www.npmjs.com/package/@4us-dev/utils)
![size](https://img.shields.io/bundlephobia/min/@4us-dev/utils)
[![license](https://img.shields.io/npm/l/@angular/cli.svg)](/LICENSE)

Install with [npm](https://www.npmjs.com/)

```sh
npm i @4us-dev/utils
```

## Usage

<!-- toc -->

- [StringUtils](#stringUtils)
  - [isBlank and isNotBlank](#isBlank-and-isNotBlank)
  - [isEmpty and isNotEmpty](#isEmpty-and-isNotEmpty)

### StringUtils

```js
const stringUtils = new StringUtils();
stringUtils;
```

#### isBlank and isNotBlank

isBlank return true if value is null, undefined, empty or string with only white spaces.

Examples:

```js
stringUtils.isBlank(null); // true
stringUtils.isBlank(undefined); // true
stringUtils.isBlank(''); // true
stringUtils.isBlank('  '); // true
stringUtils.isBlank('a'); // false
```

`stringUtils.isNotBlank(value)` is equal to `!stringUtils.isBlank(value)`

#### isEmpty and isNotEmpty

isEmpty return true if value is null, undefined, or empty.

Examples:

```js
stringUtils.isEmpty(null); // true
stringUtils.isEmpty(undefined); // true
stringUtils.isEmpty(''); // true
stringUtils.isEmpty('  '); // false
stringUtils.isEmpty('a'); // false
```

`stringUtils.isNotEmpty(value)` is equal to `!stringUtils.isEmpty(value)`
