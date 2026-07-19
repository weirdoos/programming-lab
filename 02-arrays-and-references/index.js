const first = [10, 20, 30];
const second = first;

second.push(40);

console.log("first:", first);
console.log("second:", second);
console.log("same:", first === second);//true


const original = [10, 20, 30];
const copy = [...original];

copy.push(40);
console.log("original:", original);
console.log("copy:", copy);
console.log("same:", original === copy); //false

console.log("\nExperiment 3");

const scores = [70, 80, 90];

function addScore(values, score) {
  values.push(score);
}

addScore(scores, 100);

console.log("scores:", scores);

const scores2 = [70, 80, 90];

function addScore2(values, score) {
    return values.slice(0, 2).concat(score);
    
}

console.log("scores2:", addScore2(scores2, 100));


console.log("\nNested arrays");

const originalNested = [
  [10, 20],
  [30, 40]
];

const copiedNested = [...originalNested];

copiedNested[0].push(99);

console.log(originalNested);
console.log(copiedNested);
console.log(originalNested === copiedNested);
console.log(originalNested[0] === copiedNested[0]);

scores2.forEach(function (score) {
    console.log(score);
})

//===
const ten = 10;
scores2.forEach((score) => console.log(score + ten));

const prices = [120, 80, 250, 50];

let total = 0;

prices.forEach((price) => (total += price));

console.log(total); 

numbers = [5, 10, 15];

numbers.map((number) => console.log(number*2))



const pricess = [120, 80, 250, 50];

const doubledPrices = pricess.map((pricee) => pricee * 2);
console.log(doubledPrices); // [240, 160, 500, 100]


const productPrices = [120, 80, 250, 50];

const expensivePrices = productPrices.filter((price) => price >= 100);

console.log(expensivePrices); // [120, 250]

const findPrices = productPrices.find((price) => price >=100);
console.log(findPrices); // 120

const temperatures = [12, 5, 2, -3, -8, 4];

const firstNegative = temperatures.find((temp) => temp < 0);

console.log(firstNegative); // -3


const grades = [85, 72, 90, 58, 76];

const hasFailedGrade = grades.some((grade) => grade < 60);

console.log(hasFailedGrade); // true


const temperaturess = [12, 5, 2, -3, 8];

const allAboveZero = temperaturess.every((temp) => temp > 0);

console.log(allAboveZero); // false


const scoresss = [45, 80, 55, 90, 70];
    const filteredScores = scoresss.filter((score) => score >= 60);
    const updatedScores = filteredScores.map((score) => score + 5);

    console.log(updatedScores); // [85, 95, 75]


   
    console.log(scoresss.reduce((accumulator, number) => accumulator + number, 0)); // 340


    const big = [120, 80, 250, 50];
    console.log(big.reduce((accumulator, price) => accumulator + price, 0)); // 500