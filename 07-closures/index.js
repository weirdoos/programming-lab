//ex1
function createStepCounter(value){
    let count = 0;
    function countPlus(){
        count += value;
        return count
    }

    return countPlus;
}

const counter = createStepCounter(5);
console.log(counter())
console.log(counter())
console.log(counter())

//ex2

function createBankAccount(initialBalance){
    let balance = initialBalance;
    function getBalance(){
        return balance
    }

    function deposit(amount){
        balance += amount;
    }
    
    return {
        getBalance: getBalance,
        deposit: deposit
    }
}

const acc = createBankAccount(100)
acc.deposit(100)
console.log(acc.getBalance())
acc.deposit(50)
console.log(acc.getBalance())


//ex3

function createGreeting(HiWord){
    let greeting = HiWord
    function GreetingName(name){
        console.log(`${greeting}, ${name}!`)
    }
    return GreetingName
}

const sayHello = createGreeting('hello')
sayHello('alex')

//ex4

function createLimitedCounter(max){
    let value = 0;

    function increment(){
        if (value === max){
            console.log(`${value} уже равно ${max}`)
        } else {
            value += 1;
            console.log(value)
        }
    }

    function getValue(){
        return value;
    }

    return {
        increment: increment,
        getValue: getValue
    }
}

const counterCounter = createLimitedCounter(5)
counterCounter.increment()
counterCounter.increment()
counterCounter.increment()
counterCounter.increment()
counterCounter.increment()
counterCounter.increment()
counterCounter.increment()
counterCounter.increment()
console.log(counterCounter.getValue())