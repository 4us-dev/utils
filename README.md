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
  - [hideEmail](#hideemail)
  - [removeNonNumeric](#removenonnumeric)
  - [isInteger](#isinteger)
  - [isDouble](#isdouble)
- [RandomUtils](#randomutils)
  - [nextInt](#nextint)
  - [nextString](#nextstring)
  - [nextStringCustom](#nextstringcustom)
- [FormatUtils](#formatutils)
  - [formatCPF](#formatCPF)
  - [formatCNPJ](#formatCNPJ)
  - [formatPhone](#formatphone)
  - [formatCEP](#formatCEP)
  - [onlyIntegers](#onlyintegers)
- [BrazilianUtils](#validatorutils)
  - [isCPF](#isCPF)
  - [isCNPJ](#isCNPJ)
  - [generateCPF](#generateCPF)
  - [generateCNPJ](#generateCNPJ)

## Introduction

`@4us-dev/utils` is a lib with utility methods to help developers during software development. It is developed with best practices in mind and to facilitate unit testing of your code. So, it does not have any static method, thus facilitating the practice of mocks during tests when necessary.

## StringUtils

### `isBlank` and `isNotBlank`

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

### `isEmpty` and `isNotEmpty`

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

### `hideEmail`

Hides part of the email.
You could hide the start and/or the end of email.

Examples:

Default configuration

```js
new StringUtils().hideEmail(`fulano@gmail.com`); // `f...@gmail.com`
```

How ofuscate the ends of the email too

```js
new StringUtils().hideEmail(`fulano@gmail.com`, {
  hideStart: true, // default true
  hideEnd: true, // default false
}); // `f...@gma...`
```

If the `email` informed does not contains `@` or is `null` or `undefined`
the return of the method will be `undefined`

```js
new StringUtils().hideEmail(`fulano.com`); // undefined
new StringUtils().hideEmail(``); // undefined
new StringUtils().hideEmail(``); // undefined
new StringUtils().hideEmail(null); // undefined
```

### `removeNonNumeric`

Removes all non-numeric caracteres from string.

Examples:

```js
new StringUtils().removeNonNumeric('a1b2c3'); // '123'
```

### `isInteger`

Returns true if the value contains only numeric values

Examples:

```js
new StringUtils().isInteger('123'); // true
new StringUtils().isInteger('12.3'); // false
new StringUtils().isInteger('12,3'); // false
new StringUtils().isInteger('a1b2c3'); // false
new StringUtils().isInteger(' 123 '); // false
```

### `isDouble`

Returns true if the value into string is a double

Examples:

```js
new StringUtils().isDouble('123'); // true
new StringUtils().isDouble('12.3'); // true
new StringUtils().isDouble('12,3'); // false
new StringUtils().isDouble('a1b2c3'); // false
new StringUtils().isDouble(' 123 '); // false
```

## RandomUtils

### `nextInt`

Generates a random integer between the `min` and `max` inclusive.

Examples:

```js
// the return a integer between 0 and 100 inclusive
const value = new RandomUtils().getRandomInteger();

// the return can be one of this values 0, 1, 2 or 3
const value = new RandomUtils().getRandomInteger({ min: 0, max: 3 });
```

### `nextString`

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

### `nextStringCustom`

Generates a random string with `length` informed and using `caracteresAllowed` variable as reference.

Examples:

```js
// returns a random string with length 10 using only `A`, `1` or `c` to generate the result
const value = new RandomUtils().nextStringCustom(10, 'A1c');
```

## FormatUtils

### `formatCPF`

Removes all non-numeric values and apply the CPF mask.

Examples:

```js
const value = new FormatUtils().formatCPF('66273306010'); // "662.733.060-10"
```

This should format the CPF partially like this

```js
const value = new FormatUtils().formatCPF('6627330'); // "662.733.0"
```

If the value contains non-numeric characters they will be removed in formatting

```js
const value = new FormatUtils().formatCPF('66A27B33C060D10'); // "662.733.060-10"
```

### `formatCNPJ`

Removes all non-numeric values and apply the CNPJ mask.

Examples:

```js
const value = new FormatUtils().formatCNPJ('94338204000180'); // "94.338.204/0001-80"
```

This should format the CNPJ partially like this

```js
const value = new FormatUtils().formatCNPJ('9433820'); // "94.338.20"
```

If the value contains non-numeric characters they will be removed in formatting

```js
const value = new FormatUtils().formatCNPJ('943A382B04000C180'); // "94.338.204/0001-80"
```

### `formatPhone`

Removes all non-numeric values and apply the phone mask (99)9999-9999 or (99)99999-9999.

Examples:

```js
const value = new FormatUtils().formatPhone('85999432345'); // "(85)99943-2345"
const value = new FormatUtils().formatPhone('8599943234'); // "(85)9994-3234"
```

This should format the phone partially like this

```js
const value = new FormatUtils().formatPhone('8599943'); // "(85)9994-3"
```

If the value contains non-numeric characters they will be removed in formatting

```js
const value = new FormatUtils().formatPhone('A8B5C9D9f9g4h3i23s4w5q'); // "(85)99943-2345"
```

### `formatCEP`

Removes all non-numeric values and apply the CEP mask 99999-999

Examples:

```js
const value = new FormatUtils().formatPhone('60601023'); // "60601-023"
```

This should format the cep partially like this

```js
const value = new FormatUtils().formatPhone('606010'); // "60601-0"
```

If the value contains non-numeric characters they will be removed in formatting

```js
const value = new FormatUtils().formatPhone('A60b601c02D3E'); // "60601-023"
```

### `formatOnlyIntegers`

Removes all non-numeric caracteres from string.

Examples:

```js
const value = new FormatUtils().formatOnlyIntegers('a1b2c3'); // '123'060-10"
```

## BrazilianUtils

### `isCPF`

Return true when CPF is valid

Examples:

```js
const brazilianUtils = new BrazilianUtils();
```

```js
if (brazilianUtils.isCPF('66273306010')) {
  console.log('CPF is valid');
} else {
  console.log('CPF is not valid');
}
```

or

```js
if (brazilianUtils.isCPF('662.733.060-10')) {
  console.log('CPF is valid');
} else {
  console.log('CPF is not valid');
}
```

### `isCNPJ`

Return true when CNPJ is valid

Examples:

```js
const brazilianUtils = new BrazilianUtils();
```

```js
if (brazilianUtils.isCNPJ('94338204000180')) {
  console.log('CNPJ is valid');
} else {
  console.log('CNPJ is not valid');
}
```

or

```js
if (brazilianUtils.isCNPJ('94.338.204/0001-80')) {
  console.log('CNPJ is valid');
} else {
  console.log('CNPJ is not valid');
}
```

### `generateCPF`

Return a valid CPF

Examples:

```js
const brazilianUtils = new BrazilianUtils();
```

```js
const cpf = brazilianUtils.generateCPF();
```

### `generateCNPJ`

Return a valid CNPJ

Examples:

```js
const brazilianUtils = new BrazilianUtils();
```

```js
const cpf = brazilianUtils.generateCNPJ();
```
