console.log(1+1);
console.log(1+1+1);
console.log(10-5);
console.log(10*5);
console.log(10/5);
console.log(2+2*2);
console.log((2+2)*2);
//+
//-
//*
// /
// % modules operators
console.log('---------------');
console.log(10%1);
console.log(10%2); //0 vesels skaitlis = 5
console.log(10%3);//1 iedod atlikumu no dalītā, ja operācija nav iespējama
console.log(10%4); //2
console.log(10%5); //0

console.log('---------------');
console.log(1%2);
console.log(2%2);
console.log(3%2);
console.log(4%2);
// x => y 
// x % y => result =0 -> divisible, result > 0  not divisible

console.log('---------------');
console.log(10/0);
console.log(10/-0);
console.log(-10/0);
console.log((-10/0) +2);

console.log('---------------');
console.log(1+ '1');
const number1 = '1'; // + treated as cotinator
console.log(1+ number1);
console.log(1+ '');

console.log(5- '1');
console.log(5- '1.5'); // treated as number

console.log(5- '1.5');
console.log(5- 'a'); //NaN= NOT A NUMBER
console.log( typeof {});
console.log( typeof []);
console.log( typeof  (5- 'a'));

console.log( true + true);
console.log( true + false);
console.log ( [] +{});
console.log ( {} +{});
console.log ( ['a'] +['b']);
console.log ( {} +[]);

console.log(Math.sqrt(9));
console.log(Math.PI);

console.log(Math.round(5)); //noapaļo
console.log(Math.round(5.6));//noapaļo
console.log(Math.round(5.4));//noapaļo

console.log(Math.ceil(5));//noapaļo uz augšu
console.log(Math.ceil(5.6));//noapaļo uz augšu
console.log(Math.ceil(5.4));//noapaļo uz augšu

console.log(Math.floor(5));//noapaļo uz leju
console.log(Math.floor(5.6));//noapaļo uz leju
console.log(Math.floor(5.4));//noapaļo uz leju

const num1 = 5;
const num2 = 10;
console.log('---------------');
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

console.log(1 <= 2);
console.log(num1 <=5);

console.log(1 <= true);
console.log(1 <= 'asd');
console.log(100 >= 'asd');
//> < >= <= compare numbers
console.log('---------------');
console.log(num1 == 5); // yoda conditions ==
console.log(5 == num1);
console.log(num1 == 6);
console.log(num1 == '5');
console.log(num1 == true);
console.log(num1 === '5'); // safer to use 3=
console.log(num1 === 5);


console.log('---------------');
console.log(num1 !=4); // ! -bang or not sign

// color: red!important;
console.log(num1 !=5);
console.log(num1 !='5');
console.log(num1 !==5);
console.log(num1 !=='5')//not stictly equal != !==

console.log('---------------');
console.log(num1 === 5 && num2 === 8); // if one of them are false, everything false
console.log(num1 === 5 && num2 === 10);


console.log('---------------');
console.log(num1 === 5 || num2 === 8); 
console.log(num1 === 5 || num2 === 10);// || or
console.log('---------------');
// if num1===4 and num2== 8 or num2 ===10
console.log(num1 ===4 && num2 ===8 || num2=== 10); // checks only || or
console.log(num1 ===4 && (num2 ===8 || num2=== 10)); // checks both and if 1 false, than all false

const foo = num1 || 10;
console.log()

//if (condition) {

//} else {

//}
if (num1 > 4) {
    console.log('the number is greater that 4');
} else {
    console.log('the number is  not greater that 4');
}

if (num2 === 10) {
    console.log ('foo');
}

let cond = 1;
if (cond) {
    console.log ('cond =1');
}

cond = 0;
if (cond) {
    console.log ('cond =0');
} // 0 treated as false, so not visible on consol
else {
    console.log('cond is not');
}

cond = 'a'
if (cond) {
    console.log ('cond ="a"');
}
cond = ' '
if (cond) {
    console.log ('cond =" "');
}


cond = ['a']
if (cond) {
    console.log ('cond =[a]');
}
cond = []
if (cond) {
    console.log ('cond =[]');
}

cond = {foo: 'bar'}
if (cond) {
    console.log ('cond = {foo: bar}');
}
cond = {}
if (cond) {
    console.log ('cond ={}');
}

const age = 32;
if (age) {
    console.log ('age is trury');
}

if (!age) {
    console.log('Age is not set');
}

if (!!age) {
    console.log('Age is not set');
}
console.log('---------------');
const moneyAmount = 100;
//if more that 10k, print out : wouw you are rich
// if 0-10k, print out : you got something
// else print: got nothing

if (moneyAmount > 10000) {
    console.log ('wouw you are rich');
} else if (moneyAmount > 0 && moneyAmount < 10000) { // else if statement
    console.log ('you got something');
} else {
    console.log('got nothing');
}


if (moneyAmount > 10000) {
    console.log ('wouw you are rich');
}
if (moneyAmount > 0 && moneyAmount < 10000) {
    console.log ('you got something');
}
if (moneyAmount === 0) {
    console.log ('got nothing');
}

var num3 = 5;
if (num3 +5 > 9) {
    console.log('the sum is > 9');
}