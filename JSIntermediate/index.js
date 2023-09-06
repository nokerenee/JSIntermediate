/*
// Question 1: 
function ucFirstLetters(inputString) {
    let words = inputString.split(' ');
    let capitalizedWords = words.map(words => words.charAt(0).toUpperCase() + words.slice(1));
    return capitalizedWords.join(' ');
}

// console.log(ucFirstLetters("los angeles"));

let testStrings = [
    "los angeles"
];
testStrings.forEach(testString => {
    let result = ucFirstLetters(testString);
    // console.log(`Original: ${testString}\nCapitalized: ${result}\n`);
});


// Question 2:
function truncate (str, max) {
    if (str.length <= max) {
        return str;
    } else {
        return str.substring(0, max - 0) + '...';
    }
}

// console.log(truncate('This text will be truncated if it is too long', 25)); 
// This text will be truncat...

function truncate (str, max) {
    return str.length <= max ? str : str.substring(0, max - 3) + '...';
}

// console.log(truncate('This text will be truncated if it is too long', 28)); 
// This text will be truncat...


// Question 3:
const animals = ['Tiger', 'Giraffe']; 
animals.push('Wolf', 'Koala');
animals.unshift('Flea', 'Parrot');
animals.sort();
// console.log(animals);

const replaceMiddleAnimal = [...animals];
replaceMiddleAnimal[2]= 'Flamingo';
const removed = replaceMiddleAnimal.splice(2, 'Flamingo');
// console.log(removed);
// console.log("Replaced Animal:", replaceMiddleAnimal);

const newAnimals = [...replaceMiddleAnimal];
function findMatchingAnimals(beginsWith) {
    const lowerCaseBeginsWith = beginsWith.toLowerCase();
    return newAnimals.filter(animal => animal.toLowerCase().startsWith(lowerCaseBeginsWith));
}

const matchingAnimals = findMatchingAnimals('Fl');
// console.log("Matching animals:", matchingAnimals);


// Question 4:
function camelCase(cssProp) {
    const words = cssProp.split('-');
    const camelCasedWords = words.map((word, index) => {
        if (index === 0) {
            return word;
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return camelCasedWords.join('');
};

// console.log(camelCase('margin-left')) // marginLeft 
// console.log(camelCase('background-image')) // backgroundImage 
// console.log(camelCase('display')) // display

function camelCaseFor(cssProp) {
    const words = cssProp.split('-');
    let camelCased = words[0];

    for (let i = 1; i < words.length; i++) {
        camelCased += words[i][0].toUpperCase() + words[i].slice(1);
    }
    return camelCased;
}

// console.log(camelCaseFor('margin-left-necloe')) // marginLeft 
// console.log(camelCaseFor('background-image')) // backgroundImage 
// console.log(camelCaseFor('display')) // display

function camelCaseForOf(cssProp) {
    const words = cssProp.split('-');
    let camelCased = words[0];

    for (const word of words.slice(1)) {
        camelCased += word[0].toUpperCase() + word.slice(1);
    }
    return camelCased;
}

// console.log(camelCaseForOf('margin-left')) // marginLeft 
// console.log(camelCaseForOf('background-image')) // backgroundImage 
// console.log(camelCaseForOf('display')) // display

function camelCaseWithConditional(cssProp) {
    const words = cssProp.split('-');
    let camelCased = words[0];

    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        camelCased +=word[0].toUpperCase() + word.slice(1);
    }
    return camelCased;
}

// console.log(camelCaseWithConditional('margin-left')) // marginLeft 
// console.log(camelCaseWithConditional('background-image')) // backgroundImage 
// console.log(camelCaseWithConditional('display')) // display


// Question 5:
let twentyCents = 0.20;
let tenCents = 0.10;

// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`); 
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 
// console.log(fixedTwenty + fixedTen) //why is this not working?

// In JavaScript, the toFixed() method returns a string representation of a number with a specified number of decimal places. When you use the + operator to concatenate strings, JavaScript treats the values as strings and performs string concatenation, rather than arithmetic addition.
// Here's what is happening: '0.20' + '0.10' = '0.200.10'

function currencyAddition(float1, float2) {
    const result = (parseFloat(float1) + parseFloat(float2)).toFixed(2);
    return parseFloat(result);
}
const sum = currencyAddition(twentyCents, tenCents);
// console.log(sum);

function currencyAddition(float1, float2, numDecimals) {
    const parsedFloat1 = (parseFloat(float1));
    const parsedFloat2 = (parseFloat(float2));

    if (numDecimals < 1 || numDecimals > 10) {
        return 'Invalid number of decimals';

    }
    return (parsedFloat1 + parsedFloat2).toFixed(numDecimals);
}

function currencyOperation(float1, float2, operation, numDecimals) {
    const parsedFloat1 = (parseFloat(float1));
    const parsedFloat2 = (parseFloat(float2));

    if (numDecimals < 1 || numDecimals > 10) {
        return 'Invalid number of decimals';
    }

    switch (operation) {
        case '+':
            return (parsedFloat1 + parsedFloat2).toFixed(numDecimals);
        case '-':
            return (parsedFloat1 - parsedFloat2).toFixed(numDecimals);
        case '*':
            return (parsedFloat1 * parsedFloat2).toFixed(numDecimals);
        case '/':
            return (parsedFloat1 / parsedFloat2).toFixed(numDecimals);
    }
}

// console.log(currencyOperation('0.20', '0.10', '+')); // Output: 0.30
// console.log(currencyOperation('0.20', '0.10', '-')); // Output: 0.10
// console.log(currencyOperation('0.20', '0.10', '*')); // Output: 0.02
// console.log(currencyOperation('0.20', '0.10', '/')); // Output: 2.00

// console.log(0.3 == currencyAddition(0.1, 0.2, 10)); // true 
// console.log(0.3 == currencyOperation(0.1, 0.2, '+', 10)); // true
// console.log(0.3 == currencyAddition(0.1, 0.2, 11)); // false 
// console.log(0.3 == currencyOperation(0.1, 0.2, '+', 11)); // false
// console.log(0.3 == currencyAddition(0.1, 0.2, 0)); // false 
// console.log(0.3 == currencyOperation(0.1, 0.2, '+', 0)); // false


// Question 6:
// function unique(duplicatesArray) {
    // return duplicatesArray.filter((value, index, array) => array.indexOf(value) === index);
// }
// Explanation of option above: array.indexOf function would return the first matched word. In first example, array.indexOf('red') would always return 0. So when it comes to the second "red" (index 5), array.indexOf('red') is 0 and index is 5, which is a false. So that filter function will not pick up the second "red".

function unique(duplicatesArray) {
    return Array.from(new Set(duplicatesArray));
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']; 
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]; 
const zooAnimals = ['giraffe', 'tiger', 'flamingo', 'lion', 'tiger', 'parrot', 'flamingo', 'giraffe'];

console.log(unique(colours)) // ['red', 'green', 'blue', 'yellow', 'orange'] 
console.log(unique(testScores)) // [55, 84, 97, 63, 32, 91, 43]
console.log(unique(zooAnimals)) // [giraffe, tiger, flamingo, lion, parrot]


// Question 7:
const books = [ 
    {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925}, 
    {id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960}, 
    {id: 3, title: '1984', author: 'George Orwell', year: 1949}, 
    {id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932}, 
    {id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951}, 
];

function getBookTitle(bookId) {
    let foundBook = books.find(book => book.id === bookId);
    return foundBook ? foundBook.title : 'Book not found';
}
// console.log(getBookTitle(2));

function getOldBooks() {
    let oldBooks = books.filter(book => book.year < 1950);
    return oldBooks;
}
// console.log(getOldBooks());

function addGenre() {
    let booksWithGenre = books.map(book => ({...book, genre: 'classic'}));
    return booksWithGenre;
}
// console.log(addGenre());

function getTitles(authorInitial) {
    let titles = books.filter(book => book.author.startsWith(authorInitial)).map(book => book.title);
    return titles;
}
// console.log(getTitles('F'));

function latestBook() {
    let latest = books[0];
    books.forEach(book => {
        if (book.year > latest.year) {
            latest = book;
        }
    });
    return latest;
}
// console.log(latestBook());
*/

// Question 8:
const phoneBookABC = new Map(); //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

// const phoneBookDEF = new Map();
// const contactsDEF = [
    // ['Devon', '0467245170'],
    // ['Eastwood', '0417452311'],
    // ['Finley', '0459839047']
// ];

const phoneBookDEF = new Map([
    ['Devon', '0467245170'],
    ['Eastwood', '0417452311'],
    ['Finley', '0459839047']
]);

phoneBookABC.set('Caroline', '0435574021');

function printPhoneBook(contacts) {
    for (const [name, phoneNumber] of contacts) {
        console.log(`${name} : ${phoneNumber}`);
    }
};

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

function printFullList(phoneBook) {
    for (const [name, phoneNumber] of phoneBook) {
        console.log(name);
    }
}

console.log(phoneBookABC);
console.log(phoneBookDEF);
console.log(phoneBook);
console.log("Phone Book ABC:"); 
printPhoneBook(phoneBookABC);
console.log("Phone Book DEF:");
printPhoneBook(phoneBookDEF);
console.log("Full List of Names in Combined Phone Book:");
printFullList(phoneBook);

/*
// Question 9:
let salaries = { 
    "Timothy": 35000, 
    "David": 25000, 
    "Mary": 55000, 
    "Christina": 75000, 
    "James": 43000 
};

function sumSalaries(salaries) {
    let total = 0;
    for (const salary of Object.values(salaries)) {
        total += salary;
    }
    return total;
}

function topEarner(salaries) {
    let topName = null;
    let topSalary = 0;

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            topSalary = salary;
            topName = name;
        }
    }
    return topName;
}

// console.log(sumSalaries(salaries));
// console.log(topEarner(salaries));


// Question 10:
const today = new Date (); 
const totalMinutesPassed = today.getHours() * 60 + today.getMinutes();
const totalSecondsPassed = totalMinutesPassed * 60 + today.getSeconds();

// console.log('Current time is' + today.toLocaleTimeString ());
// console.log(today.getHours() + 'hours have passed so far today');
// console.log(today.getHours() * 60 + today.getMinutes() + 'minutes have passed so far today');
// console.log((today.getHours() * 60 + today.getMinutes()) * 60 + today.getSeconds() + 'seconds have passed so far today');
// console.log(totalMinutesPassed + ' minutes have passed so far today');
// console.log(totalSecondsPassed + ' seconds have passed so far today');

const birthDate = new Date('1992-07-07');
const ageMilliseconds = today - birthDate;
const ageYears = Math.floor(ageMilliseconds / (365 * 24 * 60 * 60 * 1000));
const ageMonths = Math.floor((ageMilliseconds % (365 * 24 * 60 * 60 * 1000)) / (30 * 24 * 60 * 60 * 1000));
const ageDays = Math.floor((ageMilliseconds % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

// console.log(`I am ${ageYears} years, ${ageMonths} months, and ${ageDays} days old`);

function daysInBetween(date1, date2) {
    const timeDifference = Math.abs(date2 - date1);
    const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    return daysDifference;
};

const date1 = new Date('2023-01-01');
const date2 = new Date('2023-08-21');
// console.log(`Days in between: ${daysInBetween(date1, date2)}`);
*/