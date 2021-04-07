
function addTwoNumbers(number1, number2) { //function definition
    return number1 +number2;      //body, the value, what is the result of this function
} //return function

const sumOfTwoNumbers = addTwoNumbers(6, 11);

console.log(sumOfTwoNumbers);
//DRY- DONT REPEAT YOURSELF

function isPrimeNumber(number){
    let hadDivisor = false;
    for (let i =2; i < number; i++) {
        if(number % i === 0) {
            hadDivisor = true;
            break;
        }
    }
   // if (hadDivisor) {
   //     return false;
   // }

    //return true;
    return !hadDivisor;
}

function isPrimeNumber2(number){
    for (let i =2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimeNumber(6));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(81));

console.log('............')

for (let i = 1; i < 100; i ++) {
    if(isPrimeNumber2(i)) {
        console.log(`${i} is a prime number`)
    }
}

let lastPrimeNumber = 0;
for (let i = 1; i < 100; i ++) {
    if(isPrimeNumber2(i)) {
        lastPrimeNumber = i;
        console.log(`${i} is a prime number`)
    }
}
console.log(`The last prime number was ${lastPrimeNumber}`);

console.log('Built-in functions');

console.log(parseInt('123'));
console.log(parseInt('123asd'));
console.log(parseInt('asd123'));//

console.log(Math.round(3.5));
console.log(Math.random(5,7));

console.log('foo'.split(''));
const bar = 'foo';
console.log(bar.split(''));

function reverseWord(phrase) {
    const phraseAsArray = phrase.split('');
    const reversedArray = phraseAsArray.reverse();
    const reversedPhrase = reversedArray.join('');

    return reversedPhrase
}
console.log(reverseWord('Jānis'));
//Hello Worls > hello_world

function sakeCase(phrase) {
    const lowerCasePhrase = phrase.toLowerCase();
    const replacedPhrase = lowerCasePhrase.replace(/ /g, '_');

    return replacedPhrase;
}
console.log(sakeCase('Hello World'));
console.log(sakeCase('Hello World foo baz bar'));

function reverseWord2(phrase) {
    return phrase
    .split('')
    .reverse()
    .join(''); //2 arrays+join= string
}
console.log(reverseWord('Spring'));

function sakeCase2(phrase) {
    
    return phrase
    .toLowerCase()
    .replace(/ /g, '_');
}
console.log(sakeCase('Hello World'));
console.log(sakeCase('Hello World foo baz bar'));

console.log('...........')

function palindrome(str) {

    let len = str.length;
    let mid = Math.floor(len/2);

    for ( let i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(palindrome('madam'));


function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

function uppercase(str)
{
  let array1 = str.split(' ');
  let newarray1 = [];
    
  for(let x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));



function find_longest_word(str)
{
  let array1 = str.match(/\w[a-z]{0,}/gi);
  let result = array1[0];

  for(let x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

function vowel_count(str1)
{
  let vowel_list = 'aeiouAEIOU';
  let vcount = 0;
  
  for(let x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));

console.log('...........')

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var i = 2; i < n; i++)
    {
      if(n % i === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));


console.log('...........')

function detect_data_type(value)
{

    return typeof value;
}
console.log(detect_data_type(7));
console.log(detect_data_type('spring'));
console.log(detect_data_type(false));


console.log('...........')

function matrix(n) {

    var i;
    var j;

    for (i=0; i < n; i++)
    {
      for (j=0; j < n; j++)
      {
           if (i === j)
           {
            
             console.log(' 1 ');
           }
                  
           else 
            {
             console.log(' 0 ');}
            }
         console.log('----------');
       }
   }
matrix(4);

console.log('----------');

function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));