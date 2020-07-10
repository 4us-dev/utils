# 4us utils

### StringUtils

```js
const stringUtils = new StringUtils();
stringUtils;
```

#### isBlank and isNotBlank

```js
stringUtils.isBlank(null); // true
stringUtils.isBlank(undefined); // true
stringUtils.isBlank(''); // true
stringUtils.isBlank('  '); // true
stringUtils.isBlank('a'); // false
```

`stringUtils.isNotBlank(value)` is equal to `!stringUtils.isBlank(value)`

#### isEmpty and isNotEmpty

```js
stringUtils.isEmpty(null); // true
stringUtils.isEmpty(undefined); // true
stringUtils.isEmpty(''); // true
stringUtils.isEmpty('  '); // false
stringUtils.isEmpty('a'); // false
```

`stringUtils.isNotEmpty(value)` is equal to `!stringUtils.isEmpty(value)`
