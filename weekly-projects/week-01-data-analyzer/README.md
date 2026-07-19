Вставь этот текст целиком в `README.md`:

````markdown
# Data Analyzer

A small browser application that analyzes a list of values entered by the user.

The project started as a console-based JavaScript exercise and was later converted into an interactive browser application using the DOM and browser events.

## Features

The application:

- reads comma-separated values from a text field;
- converts valid numeric strings into numbers;
- detects invalid values;
- calculates the sum;
- calculates the average;
- finds the minimum and maximum values;
- counts valid and invalid values;
- displays valid numbers;
- shows the analysis result directly on the page;
- handles empty input.

## Example

Input:

```text
10, 20, hello, 30, -5
```

Output:

```text
Sum: 55
Valid values: 4
Invalid values: 1
Minimum: -5
Maximum: 30
Average: 13.75
Valid numbers: 10, 20, 30, -5
```

## Technologies

- HTML
- CSS
- JavaScript
- DOM API
- Browser events

## Project Structure

```text
week-01-data-analyzer/
├── index.html
├── style.css
├── index.js
└── README.md
```

## JavaScript Concepts Practiced

- functions;
- arrays;
- objects;
- `reduce()`;
- `map()`;
- `Number.isFinite()`;
- `Math.min()` and `Math.max()`;
- string methods;
- template literals;
- DOM element selection;
- event listeners;
- reading user input with `.value`;
- changing page content with `.textContent`;
- validation and early returns.

## How It Works

1. The user enters values separated by commas.
2. JavaScript reads the text from the input element.
3. The text is split into an array.
4. Each value is trimmed and converted into a number.
5. Invalid values become `NaN`.
6. The `analyzeData()` function processes the array.
7. The result is displayed on the page.

## How to Run

Open `index.html` in a web browser.

No installation or external dependencies are required.

## Current Status

The browser version is functional and includes a custom responsive interface.
````
