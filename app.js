// app.js
const stringUtils = require('./stringUtils');

const myString = "hello bridgelabz";

console.log("Original:", myString);
console.log("Capitalized:", stringUtils.capitalize(myString));
console.log("Reversed:", stringUtils.reverseString(myString));
console.log("Vowel Count:", stringUtils.countVowels(myString));