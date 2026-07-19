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

const dataInput = document.querySelector("#data-input");
const analyzeButton = document.querySelector("#analyze-button");
const resultOutput = document.querySelector("#result-output");

analyzeButton.addEventListener("click", () => {
  const inputText = dataInput.value.trim();
  const inputValues = inputText.split(",");

  if (inputText === "") {
      resultOutput.textContent = "Enter at least one value";
      return;
  }

  const parsedValues = inputValues.map(value => {
      const cleanedValues = value.trim();

      if (cleanedValues === "") {
          return NaN;
      }
      return Number(cleanedValues);
  });
    const analysis = analyzeData(parsedValues)
    console.log(analysis);

    resultOutput.textContent = `
  Sum: ${analysis.sum}
  Valid values: ${analysis.validCount}
  Invalid values: ${analysis.invalidCount}
  Minimum: ${analysis.min}
  Maximum: ${analysis.max}
  Average: ${analysis.average}
  Valid numbers: ${analysis.validNumbers.join(", ")}
    `
});


function analyzeData(values) {
    const result = values.reduce((accumulator, currentValue) => {
    if (Number.isFinite(currentValue)) {
        accumulator.sum += currentValue;
        accumulator.validCount++;

        accumulator.min = accumulator.min === null ? currentValue : Math.min(accumulator.min, currentValue);
        accumulator.max = accumulator.max === null ? currentValue : Math.max(accumulator.max, currentValue);
        accumulator.validNumbers.push(currentValue);
    } else {
        accumulator.invalidCount++;

    }
        return accumulator;
    }, {
        sum: 0,
        validCount: 0,
        invalidCount: 0,
        min: null,
        max: null,
        validNumbers: []
    });

    const average = result.validCount > 0 ? result.sum / result.validCount : null;

    const finalResult = { ...result, average };

    return finalResult;
}

const analysisResult = analyzeData(rawData);
/*console.log("Analysis Result:", analysisResult);
console.log(analyzeData([5, 10, 15]));
console.log(analyzeData(["10", null, NaN]));


console.log("Mixed:", analyzeData(rawData));

console.log(
  "Valid only:",
  analyzeData([5, 10, 15])
);

console.log(
  "Invalid only:",
  analyzeData(["10", null, NaN, Infinity])
);

console.log(
  "Empty:",
  analyzeData([])
);*/
