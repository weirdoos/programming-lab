

# Array Boundaries Experiment

## Goal

Understand array indices, array length, `undefined`, `NaN`, and input validation in JavaScript.

## Array boundaries

For an array with length `n`, valid indices range from `0` to `n - 1`.

```javascript
const values = [5, 10, 15];

values.length; // 3
values[2];     // 15
values[3];     // undefined
```

A loop that processes every array element should normally use:

```javascript
i < values.length
```

Using `i <= values.length` accesses one position beyond the array.

## Undefined and NaN

`undefined` means that a value is missing or has not been defined.

`NaN` means that a numeric operation did not produce a valid number.

```javascript
10 + undefined; // NaN
0 / 0;          // NaN
```

The safest way to check for `NaN` is:

```javascript
Number.isNaN(value);
```

## Empty arrays

An empty array has no arithmetic mean.

The `average` function returns `null` for an empty array so that this case is different from a valid average equal to `0`.

## Input validation

The function accepts only numeric values.

Strings, `undefined`, and `NaN` cause the function to return `null`.

## Final implementation

```javascript
function average(values) {
  let total = 0;

  if (values.length === 0) {
    return null;
  }

  for (let i = 0; i < values.length; i++) {
    if (
      typeof values[i] !== "number" ||
      Number.isNaN(values[i])
    ) {
      return null;
    }

    total += values[i];
  }

  return total / values.length;
}
```

## Conclusion

Before processing an array, I should understand its valid index range and validate values before performing operations with them.
