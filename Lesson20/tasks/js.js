//let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
//console.log(numbers);
console.log('Task 1: find first 10 natural numbers');

for(let i = 1; i < 11; i++) {
    console.log(i);
}
console.log('Task 2: find the sum of first 10 natural numbers');

const number = 10;
let sum = 0;
for(let i = 0; i <= number; i++) {
    sum += i;
}
console.log (`The sum of first 10 natural numbers: `, sum);

console.log('Task 3: find n numbers of 7 and their sum');

for(let i = 1; i < 8; i++) {
    console.log(i);
}
const num = 7;
let numSum = 0;
for(let i = 0; i <= num; i++) {
    numSum += i;
}
console.log(`The sum of the natural numbers up to ${num} is`, numSum);

console.log('Task 4: find perfect numbers between 1 and 500');

//funtion isPerfectNumber(inputNumber) {
    //var sum = 0;
   // for(var i = 1, i < inputNumber; i++) {
       // if(inputNumber % i == 0) {
       //     sum += i;
       // }
   // }
  //  if(sum == inputNumber) {
  //      return true;
   // }
   //     return false;
//}

