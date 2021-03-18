console.log('Task 1: find first 10 natural numbers');

for(let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log('Task 2: find the sum of first 10 natural numbers');

let sum = 0;
for(let i = 0; i <= 10; i++) {
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

const nummm = 8;
const checkPerfectNumber = (nummm = 1) => {
   if (nummm === 1) { 
      return false;
   };
   let sum = 1;
   for (let i = 2; i <= Math.floor(Math.sqrt(nummm)); i++) {
      if (nummm % i === 0) {
         sum = sum + i + nummm / i; if(sum > nummm) {
            return false;
         }
      };
   };
   return sum === nummm;
};

console.log(checkPerfectNumber(nummm));

console.log('Task 5: prime number or not: 13');

let isPrime =true;
let number = 13;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

 console.log('Task 6: prime numbers within a range 1 and 100');
 function nextPrime(value) {
    if (value > 2) {
        var i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}
var value, result = [];
for (var i = 0; i < 25; i++) {
    value = nextPrime(value);
    result.push(value);
}
console.log("Primes:", result);

console.log('Task-7 / Factorial of a number')
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 5;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);


console.log('Task-9 / Greatest Common Divisor for 25 and 15')
  const num1 = 25;
  const num2 = 15;
  const findGCD = (num1, num2) => {
     let a = Math.abs(num1);
     let b = Math.abs(num2);
     while (a && b && a !== b) {
        if(a > b){
           [a, b] = [a - b, b];
        }else{
           [a, b] = [a, b - a];
        };
     };
     return a || b;
  };
  console.log(findGCD(num1, num2));

console.log('Task-10 / The sum of digits of a given number 1234')

const m = 1234;
const k = 4;
const digitSumUpto = (m, k) => {
   if(k > String(m).length){
      return 0;
   };
   let sum = 0;
   for(let i = 0; i < k; i++){
      const el = +String(m)[i];
      sum += el;
   };
   return sum;
};
console.log(digitSumUpto(m, k));
