
const number1 = 3;

switch (number1) {
    case 1:
        console.log('Value is 1');
        break;
    case 2:
        console.log('Value is 2');
        break;
    
    case 4:
        console.log('Value is 3 or 4');
        break;

    default:
        console.log('Values is not between 1 and 3')
        break;
}

const url = '/users';

switch (url) {
    case '/users':
        console.log('Load the users page');
    break;

    case '/about us':
        console.log('Load the about-us');
    break;

    case '/contacts':
    console.log('Load the contacts');
    break;

    case '/':
    case '/home':
    console.log('Load the home');
    break;
    default:
        console.log('Load the 404');
    break;
}

let number2 = 0;
while (number2 <10) {
    console.log('yay, looping', number2); //infinite loop
    if (number2 % 2 ===0) {
        console.log(number2, 'is even');
    } else {
        console.log (number2, 'is odd')
    }
    number2++; // loop til 10
}


let number3 =0;
do {
    console.log ('Yay, looping');
    number3++;
} while (number3 >10);


for (let i = -5; i < 10; i++) { // value, condition, increment value (i+=10)
    console.log('the number is', i); //counting from one number to another
}

for (let i = 100; i > 0; i--) {
    console.log(i);
}



for (var i = 100; i > 0; i--) {
    console.log(i);
}
console.log(i);

const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw'];
for (var i= 0; i < cars.length; i++) {
    //console.log(cars [i]);
    //debugger;
    cars [i] += ' is a nice car!';//calculate + and get a result =
}
console.log(cars);

//create a loop that counts from 0->100, and for every iteration fizz-bazz with the number
// create a loop that counts from 1000-50. it counts every 7th number and with this number- number oven or odd
//1000 is even
//993 is odd
//986 is even
//979 is odd

console.log('------------');


let number5 = 0;
while (number5 <= 100) {
    if (number5 % 2 == 0 & number5 % 3 == 0) {
        console.log('Fizz Bazz');
    } else if (number5 % 2 == 0) {
        console.log('Fizz');
    } else if (number5 % 3 == 0) {
        console.log('Bazz');
    } else {
        console.log(number5);
    }
    number5++;
}


console.log('-----------');

let number6 = 1000;
while (number6 >= 50) {
    if (number6 % 2 === 0) {
        console.log(number6, ' is even')
    } else {
        console.log(number6, ' is odd');
    }
    number6 -= 7;
}

console.log('-----------');

for (let i = 0; i<= 100; i++) { //other way
    if(i % 2 == 0 && i % 3 ==0) {
        console.log ('Fizz Buzz'); 
    } else if (i % 2 == 0) {
        console.log ('Fizz');
    } else if (i % 3 == 0) {
        console.log ('Buzz'); 
    } else {
        console.log (i);
    }
}

console.log('-----------');

for (let i = 0; i <= 100; i++) { // other way
    let output = '';
    if (i % 2 == 0) {
        output += 'Fizz ';
    }
    if (i % 3 == 0) {
        output += 'Bazz ';
    }
    if (!output) {
        output = i;
    }

    console.log(output);
}

console.log('-----------');

for (let i = 1000; i>= 50; i-=7) { // other way
    if (i % 2 === 0) {
        console.log (i, ' is even');
    } else {
        console.log (i, 'is odd');
    }
}


//for...in
// for...of
//
//const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'bmw'];
//for (var i= 0; i < cars.length; i++) {
    //console.log(cars [i]);
    //debugger;
 //   cars [i] += ' is a nice car!';//calculate + and get a result =
////}
//console.log(cars);

const carss = ['vaz', 'zaz', 'gaz', 'maz', 'uaz', 'kia'];

for (let carIndex in carss) {
    console.log (carss[carIndex]);
}
for (let car of carss) { //sugar syntax for below
    car = 'baz';
    console.log(car);
}
for (let i= 0; i < cars.length; i++) {
    let car = carss [i];
    console.log(car);
}
console.log(carss);
console.log('-----------');
for (let i = 0; i <100; i ++) {
    if (i > 10) { //one way
    console.log (i);
    }
}
console.log('-----------');
for (let i = 0; i <100; i ++) {
    if (i < 10) { 
        continue;
    }
    if (i > 30) { 
        break; //stops loop at some point, ex, 30
    }
    console.log (i);
}