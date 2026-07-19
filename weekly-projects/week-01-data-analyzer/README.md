````markdown
# Data Analyzer

A small JavaScript project that analyzes an array containing valid and invalid values.

## Features

- Calculates the sum of valid numbers
- Calculates the average value
- Finds the minimum value
- Finds the maximum value
- Counts valid numbers
- Counts invalid values
- Returns an array of valid numbers
- Handles empty arrays
- Handles arrays without valid numbers

## Valid Values

A value is considered valid when it is a finite JavaScript number:

```javascript
Number.isFinite(value)
```

Examples of valid values:

```javascript
10
-5
0
3.14
```

Examples of invalid values:

```javascript
"20"
null
undefined
NaN
Infinity
-Infinity
```

## Example Input

```javascript
const rawData = [
  10,
  "20",
  30,
  NaN,
  null,
  40,
  Infinity,
  -5
];
```

## Usage

```javascript
const analysisResult = analyzeData(rawData);

console.log(analysisResult);
```

## Example Result

```javascript
{
  sum: 75,
  validCount: 4,
  invalidCount: 4,
  min: -5,
  max: 40,
  validNumbers: [10, 30, 40, -5],
  average: 18.75
}
```

## Returned Properties

| Property | Description |
|---|---|
| `sum` | Sum of all valid numbers |
| `validCount` | Number of valid values |
| `invalidCount` | Number of invalid values |
| `min` | Smallest valid number |
| `max` | Largest valid number |
| `validNumbers` | Array containing all valid numbers |
| `average` | Average of all valid numbers |

When the input contains no valid numbers, `min`, `max`, and `average` are returned as `null`.

## Edge Cases

The function supports:

```javascript
analyzeData([]);
analyzeData([5, 10, 15]);
analyzeData(["10", null, NaN, Infinity]);
analyzeData([10, "20", 30, NaN, null, 40, Infinity, -5]);
```

## JavaScript Concepts Used

- Functions
- Arrays
- Objects
- `Array.prototype.reduce`
- `Number.isFinite`
- Ternary operator
- Spread syntax
- Object accumulator
- Array mutation with `push`
- Input validation
- Edge-case handling
````
