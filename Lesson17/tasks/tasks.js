// Task 1 - print out in console if number is odd or even
const num1 = 35;
if (num1 % 2 === 0) {
    console.log(`This number (${num1}) is even`);
} else {
    console.log(`This number (${num1}) is odd`);
}

// Task 2 - print out the age group I'm in
const myAge = 31;
if (myAge >= 0 && myAge <= 18) {
    console.log(`My age group is 0-18 years (${myAge})`);
} else if (myAge >= 19 && myAge <= 30) {
    console.log(`My age group is 19-30 years (${myAge})`);
} else if (myAge >= 31 && myAge <= 40) {
    console.log(`My age group is 31-40 years (${myAge})`);
} else if (myAge >= 41 && myAge <= 50) {
    console.log(`My age group is 41-50 years (${myAge})`);
} else {
    console.log(`My age is 51+ years (${myAge})`);
}
// Task 3 - FizBazz
console.log('Task 3: Fizz Bazz for numbers from 15 to 1')
const fizzBazz = 15;
for (i = fizzBazz; i > 0; i--) {
    if (i % 2 === 0 && i % 3 === 0) {
        console.log('Fizz Bazz');
    } else if (i % 3 == 0) {
        console.log('Bazz');
    } else if (i % 2 == 0) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
}