
/* ===================================================
   JavaScript Lecture 05
   Topic: Functions, Arrow Functions and Array Methods
   =================================================== */

// Console में message दिखाने के लिए console.log() use होता है
console.log("hello");


// ===================================================
// 1. FUNCTION
// ===================================================

// Function code का एक block है, जिसे जरूरत पड़ने पर चलाया जा सकता है.

// Function बनाने का तरीका:
// function functionName(parameters) {
//     // yahan code likhen
// }

// Function को चलाने के लिए function call करते हैं.

function myfunction(msg) {
    // msg में function call के समय दी गई value आएगी
    console.log(msg);
    console.log("Welcome to Apna College!");
    console.log("We are learning JavaScript.");
}

// Function को call करते समय argument देते हैं
myfunction("Hello Mahesh!");


// ===================================================
// 2. SUM OF TWO NUMBERS
// ===================================================

function sum(a, b) {
    // a और b function के local parameters हैं
    let result = a + b;

    // return result को function के बाहर भेजता है
    return result;
}

let val = sum(3, 4);
console.log("Sum =", val);


// ===================================================
// 3. ARROW FUNCTIONS
// ===================================================

// Arrow function लिखने का छोटा तरीका है.

// Normal function से दो numbers का जोड़
function normalSum(a, b) {
    return a + b;
}

// Arrow function से दो numbers का जोड़
const arrowSum = (a, b) => {
    return a + b;
};

console.log("Normal Sum =", normalSum(5, 6));
console.log("Arrow Sum =", arrowSum(5, 6));


// दो numbers का multiplication
function mul(a, b) {
    return a * b;
}

// Multiplication का arrow function
const arrowMul = (a, b) => {
    return a * b;
};

console.log("Multiplication =", mul(4, 5));
console.log("Arrow Multiplication =", arrowMul(4, 5));


// बिना parameter वाला arrow function
const printHello = () => {
    console.log("Hello");
};

printHello();


// ===================================================
// 4. COUNT VOWELS IN A STRING
// ===================================================

// String में a, e, i, o, u की संख्या गिनना
function countVowels(str) {
    let count = 0;

    // String के हर character को एक-एक करके check करते हैं
    for (const char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }

    // कुल vowels की संख्या वापस भेजते हैं
    return count;
}

console.log("Vowels =", countVowels("mahesh"));


// वही काम arrow function की मदद से
const countVow = (str) => {
    let count = 0;

    for (const char of str) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }

    return count;
};

console.log("Arrow Function Vowels =", countVow("javascript"));


// ===================================================
// 5. forEach() METHOD
// ===================================================

// forEach array के हर element पर दिए गए function को चलाता है.

let cities = ["pune", "delhi", "mumbai"];

cities.forEach((value, index, array) => {
    // value = current element
    // index = element की position
    // array = पूरा original array
    console.log(value.toUpperCase(), index, array);
});


// हर number का square निकालना
let nums = [2, 3, 4, 5, 6, 67, 52, 39];

nums.forEach((num) => {
    // Number को उसी number से multiply करने पर square मिलता है
    console.log(num * num);
});


// ===================================================
// 6. map() METHOD
// ===================================================

// map() पुराने array के elements पर operation करके नया array बनाता है.

let numbers = [67, 52, 39];

let newArr = numbers.map((value) => {
    return value * 2;
});

console.log("Doubled Array =", newArr);


// ===================================================
// 7. filter() METHOD
// ===================================================

// filter() condition के अनुसार elements चुनकर नया array बनाता है.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 33, 333, 444];

// केवल even numbers को चुनना
let evenArr = array.filter((value) => {
    return value % 2 === 0;
});

console.log("Even Numbers =", evenArr);


// केवल odd numbers को चुनना
let oddArr = array.filter((value) => {
    return value % 2 !== 0;
});

console.log("Odd Numbers =", oddArr);


// ===================================================
// 8. reduce() METHOD
// ===================================================

// reduce() array के elements को combine करके एक final value देता है.

let array1 = [1, 2, 3, 4, 5, 6];

// सभी numbers का total निकालना
const output = array1.reduce((result, current) => {
    return result + current;
}, 0);

console.log("Total Sum =", output);


// सभी numbers में सबसे बड़ा number निकालना
const largest = array1.reduce((result, current) => {
    return result > current ? result : current;
});

console.log("Largest Number =", largest);
