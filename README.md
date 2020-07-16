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

## Usage

- [StringUtils](#stringutils)
  - [isBlank and isNotBlank](#isblank-and-isnotblank)
  - [isEmpty and isNotEmpty](#isempty-and-isnotempty)
- [RandomUtils](#randomutils)
  - [nextInt](#nextint)
  - [nextString](#nextstring)
  - [nextStringCustom](#nextstringcustom)
- [MaskUtils](#maskutils)
  - [hideEmail](#hideemail)

### Introduction

`@4us-dev/utils` is a lib with utility methods to help developers during software development. It is developed with best practices in mind and to facilitate unit testing of your code. So, it does not have any static method, thus facilitating the practice of mocks during tests when necessary.

### StringUtils

#### isBlank and isNotBlank

isBlank return true if value is null, undefined, empty or string with only white spaces.

Examples:

```js
new StringUtils().isBlank(null); // true
new StringUtils().isBlank(undefined); // true
new StringUtils().isBlank(''); // true
new StringUtils().isBlank('  '); // true
new StringUtils().isBlank('a'); // false
```

`new StringUtils().isNotBlank(value)` is equal to `!new StringUtils().isBlank(value)`

#### isEmpty and isNotEmpty

isEmpty return true if value is null, undefined, or empty.

Examples:

```js
new StringUtils().isEmpty(null); // true
new StringUtils().isEmpty(undefined); // true
new StringUtils().isEmpty(''); // true
new StringUtils().isEmpty('  '); // false
new StringUtils().isEmpty('a'); // false
```

`new StringUtils().isNotEmpty(value)` is equal to `!new StringUtils().isEmpty(value)`

### RandomUtils

#### nextInt

Generates a random integer between the `min` and `max` inclusive.

Examples:

```js
// the return a integer between 0 and 100 inclusive
const value = new RandomUtils().getRandomInteger();

// the return can be one of this values 0, 1, 2 or 3
const value = new RandomUtils().getRandomInteger({ min: 0, max: 3 });
```

#### nextString

Generates a random string.

Examples:

```js
// returns a random string with length 16
const value = new RandomUtils().nextString();

// returns a random string with length 8
const value = new RandomUtils().nextString({ length: 8 });

// returns a random string with length 8 only with letters upper, letters lower and numbers
const value = new RandomUtils().nextString({
  length: 8, // default 16
  upper: true, // default true ex: ABCDEF...
  lower: true, // default true ex: abcdef...
  numbers: true, // default true ex: 012345...
  specialSimple: false, // default true ex: !#$%&*_+=-^~?;:.,|
  specialAmbiguous: false, // default true ex: "()\'`´{[]}/><
});
```

#### nextStringCustom

Generates a random string with `length` informed and using `caracteresAllowed` variable as reference.

Examples:

```js
// returns a random string with length 10 using only `A`, `1` or `c` to generate the result
const value = new RandomUtils().nextStringCustom(10, 'A1c');
```

### MaskUtils

#### hideEmail

Obfuscate part of the email.
You could obfuscate the start and/or the end of email.

Examples:

Default configuration

```js
new MaskUtils().hideEmail(`fulano@gmail.com`); // `f...@gmail.com`
```

How ofuscate the ends of the email too

```js
new MaskUtils().hideEmail(`fulano@gmail.com`, {
  hideStart: true, // default true
  hideEnd: true, // default false
}); // `f...@gma...`
```

If the `email` informed does not contains `@` or is `null` or `undefined`
the return of the method will be `undefined`

```js
new MaskUtils().hideEmail(`fulano.com`); // undefined
new MaskUtils().hideEmail(``); // undefined
new MaskUtils().hideEmail(``); // undefined
new MaskUtils().hideEmail(null); // undefined
```
