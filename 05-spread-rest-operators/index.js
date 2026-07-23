//задача 1
car = { brand: 'Toyota', model: 'Camry', year: 2020 }
const {brand, model, year} = car;
console.log(brand)


//задача 2
person = { firstName: 'Иван', lastName: 'Петров', age: 30 }
const {firstName: name,lastName: surname} = person;
console.log(name)


//задача 3
fruits = ['яблоко', 'банан', 'апельсин']
const [first, , third] = fruits
console.log(first, third)


//задача 4
settings = { theme: 'dark' }
const {theme = 'dark', language = 'ru'} = settings
console.log(language)


//задача 5
company = { name: 'Google', address: { city: 'Mountain View', country: 'USA' } }
const {name: companyName, address} = company
console.log(companyName, address)


//задача 6


function display({name}){
    console.log(`привет ${name}`)
}

display({name:'nikita'})


//задача 7

const a = [1, 2]
const b = [3, 4]
const c = [...a,...b,5,6]
console.log(c)


//задача 8

nameUser = { name: 'Анна', age: 25 }
addressUser = { city: 'Киев', country: 'Украина' }
const profile = {...nameUser, ...addressUser}
console.log(profile)

//задача 9
const black = {name:'bla', city:'blabla', age:30}
function getFirstAndRest(arr){
    const {name, ...rest} = arr
}
console.log(getFirstAndRest(black))

//задача 10

const result = multiplyAll(2, 1, 2, 3, 4);

function multiplyAll(...numbers) {
    const NumMap = numbers.map(num => num - (num * 0.2));
    return NumMap.reduce((accumulator , num) => { 
        return accumulator + num;

    }, 0)
}

console.log(result)
