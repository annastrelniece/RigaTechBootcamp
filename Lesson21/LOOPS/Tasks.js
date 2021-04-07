 console.log ('Task 1')
let naturalNumbers = '';

for (let i = 1; i <= 10; i++) {
    naturalNumbers += `${i} `;
}

console.log(naturalNumbers);

console.log ('Task 2')

let naturallNumbers = '';
let sum = 0;
for (let i = 1; i <= 10; i++) {
    naturallNumbers += `${i} `;
    sum += i;
}

console.log('Natural numbers: ', naturallNumbers);
console.log('Sum: ', sum);

console.log ('Task 3')

const nTermNumber = 7;

let naturalllNumbers = '';
let summ = 0;
for (let i = 1; i <= nTermNumber; i++) {
    naturalllNumbers += `${i} `;
    summ += i;
}

console.log('Natural numbers: ', naturalllNumbers);
console.log('Sum: ', summ);

console.log ('Task 4')

for (let i = 1; i <= 500; i++) {
    let divisorSum = 0;
    for (let j = 1; j < i; j++) {
        if (i % j === 0) {
            divisorSum += j;
        }
    }

    if (divisorSum === i) {
        console.log(i);
    }
}

console.log ('Task 5: prime number or not')

const numberToCheck = 7;

let hadDivisor = false;

for (let i = 2; i < numberToCheck; i++) {
    if (numberToCheck % i === 0) {
        hadDivisor = true;
        break;
    }
}

if (hadDivisor) {
    console.log(`${numberToCheck} is not a prime`);
} else {
    console.log(`${numberToCheck} is a prime`);
}

console.log ('Task 6')

const startNumber = 2;
const endNumber = 100;
let primeNumbers = '';
let primeNumberCount = 0;

for (let numberToCheck = startNumber; numberToCheck <= endNumber; numberToCheck++) {
    let hadDivisor = false;

    for (let i = 2; i < numberToCheck; i++) {
        if (numberToCheck % i === 0) {
            hadDivisor = true;
            break;
        }
    }

    if (!hadDivisor) {
        primeNumbers += `${numberToCheck} `;
        primeNumberCount++;
    }
}

console.log(`Prime nubmers: ${primeNumbers}`);
console.log(`Total prime numbers found: ${primeNumberCount}`);

console.log ('Task 7 factorial of a number: ')

const number = 5;
let factorialSum = 1;
for (let i = 1; i <= number; i++) {
    factorialSum *= i;
}

console.log(`Input number: ${number}`);
console.log(`Factorial: ${factorialSum}`);

console.log ('Task 8')

const enddNumber = 50;
let lastPrime = 0;

for (let numberToCheck = 0; numberToCheck <= enddNumber; numberToCheck++) {
    let hadDivisor = false;

    for (let i = 2; i < numberToCheck; i++) {
        if (numberToCheck % i === 0) {
            hadDivisor = true;
            break;
        }
    }

    if (!hadDivisor) { //hadDivisor == 0
        lastPrime = numberToCheck;
    }
}

console.log(`Last prime number before ${endNumber} was ${lastPrime}`);

console.log ('Task 9')

const number1 = 25;
const number2 = 15;

let lastCommonDivisor = 0;
for (let divisor = 1; divisor <= number1; divisor++) {
    if (number1 % divisor !== 0) { //if it is not a diviser
        continue;
    }

    if (number2 % divisor === 0) {
        lastCommonDivisor = divisor; // if it is a diviser
    }
}

console.log(`Last common divisor is: ${lastCommonDivisor}`);

console.log ('Task 10')
const numbeer = '1234';
let summm = 0;
for (let digit of numbeer) {
    const nummericDigit = digit * 1;
    sum += nummericDigit;
}

console.log(`Input a number: ${numbeer}`);
console.log(`The sum of digits of ${numbeer} is: ${summm}`);