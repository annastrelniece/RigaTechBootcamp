console.log('......Task1.........')
function reverseNumber(number) {
    const string = number.toString();

    return string.split('').reverse().join('');
}

console.log(reverseNumber(12345));
console.log('......Task2.........')
function isPalindrome(string) {
    const cleanedUpStirng = string.toLowerCase().replace(/ /g, '');

    return cleanedUpStirng.split('').reverse().join('') === cleanedUpStirng;
}

console.log(isPalindrome('nurses run'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('foo'));

console.log('......Task3.........')
//all possible combinations af letters of a string
function generateCombinations(string) {
    let result = [];

    for (let i = 0; i < string.length; i++) { //d
        let character = string.charAt(i);
        let temporaryArray = [character];//[d]

        for (let j = 0; j < result.length; j++) {
            temporaryArray.push(result[j] + character);//[o;g]
        }
        result = result.concat(temporaryArray);
        // result = [...result, ...temporaryArray]; //[] + [d, o, g]
    }

    return result;
}

console.log(generateCombinations('dog'));
console.log(generateCombinations('abc'));

console.log('......Task4.........')
function sortString(string) {
    return string.split('').sort().join('');
}

console.log(sortString('nurses run'));
console.log(sortString('Madam'));
console.log(sortString('foo'));
console.log(sortString('webmaster'));

console.log('......Task5.........')

function sortString(phrase) {
    let wordsArray = phrase.split(' ');
    for (let wordIndex in wordsArray) {
        const word = wordsArray[wordIndex];
        let lettersArray = word.split('');
        lettersArray[0] = lettersArray[0].toUpperCase(); 
        wordsArray[wordIndex] = lettersArray.join('');
    }
    return wordsArray.join(' ');
}

console.log(sortString('nurses run'));
console.log(sortString('the quick brown fox'));

console.log('......Task6.........')

function findLongersWord(phrase) {
    const wordsArray = phrase.split(' ');
    let longestWord = '';
    for (let word of wordsArray) {
        if (word.length > longestWord.length) {
            longestWord = word; 
        }
    }
    return longestWord;
}

console.log(findLongersWord('nurses run'));
console.log(findLongersWord('the quick brown fox'));
console.log(findLongersWord('Web Development Tutorial'));

console.log('......Task7.........')
function getVowelCount(phrase) {
    const letters = phrase.toLowerCase().split('');
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let letter of letters) {
        if (vowels.indexOf(letter) >= 0) {//indexOf if element exists in array
            vowelCount++;
        }
    }

    return vowelCount;
}

console.log(getVowelCount('nurses run'));
console.log(getVowelCount('the quick brown fox'));
console.log(getVowelCount('the quIck brOwn fox'));
console.log(getVowelCount('Web Development Tutorial'));

console.log('......Task8.........')
function isPrimeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrimeNumber(6));
console.log(isPrimeNumber(7));
console.log(isPrimeNumber(81));

console.log('......Task9.........')
function getType(variable) {
    return typeof variable;
}

console.log(getType(1));
console.log(getType('foo'));
console.log(getType({}));
console.log(getType(function() {}));
console.log(getType(true));
let foo;
console.log(getType(foo));

console.log('......Task10.........')
function getIdentityMatrixAsString(number) {
    let output = '';
    for (let row = 0; row < number; row++) {
        let rowString = '';
        for (let col = 0; col < number; col++) {
            if (col === row) {
                rowString += '1  ';
            } else {
                rowString += '0  ';
            }
        }            
        output += `${rowString}\n`;//new lines
    }

    return output;
}

console.log(getIdentityMatrixAsString(1));
console.log(getIdentityMatrixAsString(10));

function getIdentityMatrixAsArray(number) {
    let outputArray = [];
    for (let row = 0; row < number; row++) {
        let rowArray = [];
        for (let col = 0; col < number; col++) {
            if (col === row) {
                rowArray.push(1); //adding elements to array
            } else {
                rowArray.push(0);
            }
        }            
        outputArray.push(rowArray);
    }

    return outputArray;
}
console.log(getIdentityMatrixAsArray(1));
console.log(getIdentityMatrixAsArray(10));

console.log('......Task11.........')
function getNumbers(numbersArray) {
    numbersArray = numbersArray.sort(function (a, b) {
        return a -b;
    });
    const numbersArrayLength = numbersArray.length;

    if (numbersArrayLength === 0) {
        return '';//empty string
    }
    if (numbersArrayLength === 1) {
        return numbersArray[0];
    }
    const secondSmallestNumber = numbersArray[1];
    const secondLargestNubmer = numbersArray[numbersArrayLength - 2];

    return `${secondSmallestNumber},${secondLargestNubmer}`;
}

console.log(getNumbers([]));
console.log(getNumbers([5]));
console.log(getNumbers([1,2,3,4,5]));
console.log(getNumbers([1,2,3,4,5,6,3,4,5,7,2,4,5,1,5,4,7,3,9]));
console.log(getNumbers([1,2,3,11,14,67]));