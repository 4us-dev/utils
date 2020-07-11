# 4us-dev utils

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_utils&metric=alert_status)](https://sonarcloud.io/dashboard?id=4us-dev_utils)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_utils&metric=coverage)](https://sonarcloud.io/dashboard?id=4us-dev_utils)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_utils&metric=code_smells)](https://sonarcloud.io/dashboard?id=4us-dev_utils)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_utils&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=4us-dev_utils)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_utils&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=4us-dev_utils)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_utils&metric=security_rating)](https://sonarcloud.io/dashboard?id=4us-dev_utils)

![Build and Tests](https://github.com/4us-dev/utils/workflows/Build%20and%20Tests/badge.svg)
[![npm-package](https://badge.fury.io/js/%404us-dev%2Futils.svg)](https://www.npmjs.com/package/@4us-dev/utils)
[![issues](https://img.shields.io/github/issues/4us-dev/utils)](/issues)
[![dependencies](https://img.shields.io/david/4us-dev/utils)](https://david-dm.org/4us-dev/utils)
[![dev-dependencies](https://img.shields.io/david/dev/4us-dev/utils)](https://david-dm.org/4us-dev/utils?type=dev)
[![downloads](https://img.shields.io/npm/dw/@4us-dev/utils)](https://www.npmjs.com/package/@4us-dev/utils)
![size](https://img.shields.io/bundlephobia/min/@4us-dev/utils)
[![license](https://img.shields.io/npm/l/@angular/cli.svg)](/LICENSE)

Install with [npm](https://www.npmjs.com/)

```sh
npm i @4us-dev/utils
```

## Docs

- [StringUtils](#stringutils)
  - [isBlank and isNotBlank](#isblank-and-isnotblank)
  - [isEmpty and isNotEmpty](#isempty-and-isnotempty)
- [RandomUtils](#randomutils)
  - [nextInt](#nextint)

### StringUtils

```js
const stringUtils = new StringUtils();
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

### RandomUtils

```js
const randomUtils = new RandomUtils();
```

#### nextInt

Generates a random integer between the `min` and `max` inclusive.

Examples:

```js
// the return a integer between 0 and 100 inclusive
const value = randomUtils.getRandomInteger();

// the return can be one of this values 0, 1, 2 or 3
const value = randomUtils.getRandomInteger({ min: 0, max: 3 });
```
