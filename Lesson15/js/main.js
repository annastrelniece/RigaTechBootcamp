console.log(123);
console.log(123123123123123123123123);
console.log(-321); //integer/int-vesels skaitlis
00001111
console.log(3.14); //floating point number/float
console.log(3.11111222223333344444);
console.log(0.34);

console.log('hello world'); //string
console.log("hello world"); //string; syntakse error
console.log(`hello world`); //string ES6 / ES2015
console.log('Foo\'s car'); 
console.log('\\'); 
console.log("<span class=\"foo\"></span>"); 
console.log('<span class="foo"></span>'); 

console.log(true); //bool /conditions
console.log(false); //bool

console.log(null);//null no data
console.log(undefined); //undefined not yet defined


var someVar;
console.log(someVar);
var someNumber = 123;
console.log(someNumber); //123
someNumber = 321;
console.log(someNumber); //321

someNumber = 'some text';
console.log(someNumber); //some text
someNumber = '123';
console.log(someNumber); //123 (string)

let someOtherNumber = 123;
console.log(someOtherNumber); //for fixing var
someOtherNumber = 321;
console.log(someOtherNumber);

const someConstant = 'foo'; 
const someConstant2 = 'bar';
const someConstant3 = 'baz'; //you cannot change the value
console.log(someConstant);

let cars = ['vaz', 'zaz', 'gaz','maz','uaz', 'bmw'];
console.log(cars); //arrays- masīvi
console.log(cars [2]);
cars [1] = 'audi';
console.log(cars);
cars.push('tesla');
console.log(cars);
console.log(cars.length);

console.log('foo' + 'bar'); //concatenation
console.log('foo' + "bar");

let name = 'Jānis'; //concatenate+variable
console.log('Hello, ' +name);
console.log(`Hello, ${name}`); //interpolation/ template literals
console.log(`Hello, ${name}, go and drive a ${cars[1]}`);


const person = {
    name: 'Jon',
    lastName: 'Doe',
    age: 42,
    
};
console.log(person);
console.log(person.lastName);
person.name = 'Billy';
console.log(person.name);
console.log(person['name']);

const people = [
    {
        name: 'Jon',
        lastName: 'Doe',
        age: 42,

    },
    {
        name: 'Jane',
        lastName: 'Doe',
        age: 32,
    }
]
console.log(people [1].name);
console.log(people [1]['name']);