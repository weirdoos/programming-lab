//ex1

users = [{ name: 'Алекс', age: 25 }, { name: 'Мария', age: 30 }]
users.forEach(user => console.log(`hello ${user.name}!`))
    

//ex2

const arr = [1, 2, 3, 4, 5]
const squared = arr.map(num => num * num)
console.log(squared)


//ex3

const arr2 = [10, 15, 20, 25, 30]
const qq = arr2.filter(num => num % 5 === 0)
console.log(qq)

//ex4

const arr3 = [1, 2, 3, 4, 5]
const sum = arr3.reduce((acc, num) => {
    return acc + num
}, 0)
console.log(sum)

//ex5

const users2 = [{ id: 1, name: 'Алекс' }, { id: 2, name: 'Мария' }]
const findUser = users2.find(user => user.id === 2)
console.log(findUser)

//ex6

const arr4 = [10, 20, 30, 40]
const findIndexOf = arr4.findIndex(num => num === 30)
console.log(findIndexOf)

//ex7

const arr5 = [1, 3, 5, 7]
const someCheck = arr5.some(num => num % 2 ===0)
console.log(someCheck)
//ex8

const arr6 = [2, 4, 6, 8]
const everyCheck = arr6.every(num => num % 2 === 0)
console.log(everyCheck)

//ex9

const arr7 = [5, 1, 4, 2, 3]
const sortCheck = arr7.sort((a,b) => a - b)
console.log(sortCheck)

//ex10

const arr8 = ['яблоко', 'банан', 'апельсин']
const includesCheck = arr8.includes('банан')
console.log(includesCheck)