let date = new Date ();
for (let i = 0; i < 1000000000; i++) {

}
//console.log(date.getMinutes());
//console.log(date.getTime()); //epoch timestamp seconds that have past since 1970-01-01 midnight
//tthey are time-zone-less unixtimestamp.com // 
//console.log(date);

let date2 = new Date ();
console.log(date);
console.log(date2);

console.log(parseInt('123123asssssssss')); //as an intiger
console.log(parseFloat('3.14'));

console.error('foo');
console.warn('foo');
console.info('foo');

const cars = ['zaz', 'maz', 'gaz', 'kia'];
console.log (cars.length); //the lenght of this array - 4/ reading a property
console.log (cars.reverse()); //parāda otrādi - function ()
console.log (cars.join(',')); // string with comma

const carsString = 'zaz,maz,gaz,kia';
console.log(carsString)
console.log(carsString.split(',')) //atdala ar komatu

const word = 'Hello world';
console.log(word.split('').reverse().join('').toUpperCase());
console.log(word.split(' ')) // 

function addTwoNumbers() { //defininng a function, num1 2 - fion parameters
    console.log('yayayayayayaya') //does nothing so far to yayay
}
addTwoNumbers() //calls the function ^

function addThreeNumbers(num1, num2, num3) {
    const result = num1 + num2 + num3;
    console.log('lets put in some text');
    return result; //nothing will work after return statement!
}
console.log(addThreeNumbers(1,2,3))
console.log(addThreeNumbers(1,6,6))
console.log(addThreeNumbers(1,7,3))
console.log(addThreeNumbers(1,4,3))

const someResult = addThreeNumbers (1,2,3);
console.log(someResult);

const someResult1 = addThreeNumbers (1,6,6);
console.log(someResult1);

const someResult2 = addThreeNumbers (1,7,3);
console.log(someResult2);

const someResult3 = addThreeNumbers (1,4,3);
console.log(someResult3);