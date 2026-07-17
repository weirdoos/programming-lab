const values = [5, 10, 15];

console.log(values.length);
console.log(values[0]);
console.log(values[2]);
console.log(values[3]); //mistake

const numbers = [5, 10, 15];
let total = 0;

for (let i = 0; i <= numbers.length; i++) {
  total += numbers[i];
}

console.log(total);//NaN because the loop goes out of bounds when i equals numbers.length, which is 3. The last index of the array is 2, so numbers[3] is undefined, and adding undefined to total results in NaN.

console.log("10 + undefined:", 10 + undefined);
console.log("10 * undefined:", 10 * undefined);
console.log("undefined / 2:", undefined / 2);
console.log("Number(undefined):", Number(undefined));
console.log(
  "Number.isNaN(10 + undefined):",
  Number.isNaN(10 + undefined)
);

function average(values) {
  let total = 0;
  
  if (values.length === 0) {
    return null; // An empty collection has no arithmetic mean
  }

  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== "number" || Number.isNaN(values[i])) {
        return null; // Return null if any value is not a number or is NaN
    }
   
    total += values[i];
    
  }

  return total / values.length;
}

console.log(average([10, 20, 30]));        // 20
console.log(average([5]));                 // 5
console.log(average([-10, 10]));           // 0
console.log(average([]));                  // null
console.log(average([10, undefined, 30])); // null
console.log(average([10, "20", 30]));      // null
console.log(average([10, NaN, 30]));       // null