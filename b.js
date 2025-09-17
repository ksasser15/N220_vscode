
// JavaScript Varaible
// 







//Example: using var (older way, less safe)
var oldSchool = 10;
console.log(oldSchool); // Output: 10

// var a = 5;
// console.log(a);

/* 
====================
Variable Naming Rules
======================

Rules for valid variable names:
1. Must Start with a letter, underscore(_), or dollar sign ($).
2. After the first character, you can use letters, numbers, underscores, or dollar sign
3. Cannot use reserved keywords (like "class", "function", "let", etc).
4. Case Sensitive: myVar, MyVar, and myvar are ALL different
*/

let $let = 5;
//Example: Valid Names
let camelCaseOfAbcDepartment = "common style in JavaScript";//preferred
let dinner2go = "pizza";                    //numbers are allowed everywhere BUT the beginning
let I_AM_Hungry = true;
let i_am_hungry = false;                    // will work because of Case Sensitivity
let _Hello_ = "greeting";                   //underscore is fine
let $_$ = "money eyes";                     //dollar signs are allowed


let name = "Kevin";
let age = 22;
let email = "kevin@gmail.com";
console.log(name, age, email);



//Example: invalid Names (will be the cause of errors)
// let total% = 78;                            //%is not allowed
// let 2fast2catch = 99;                       // cannot start with number
// let function = false;                       //cannot use reserved keyword
// let class = "oops";                         //cannot use reserved keyword



/* 
========================
Best Practice for Naming
========================

1. Use camelCase for variables (example: userAge, totalScore)
2. Use descriptive names instead of short unclear ones.
3. Use ALL_CAPS for constants that never change
4. 
*/


/* 
==========================
JavaScript Strings
==========================



==========================
Single and Double Quotes
==========================

Strings can be written using either single ('') or ("") quotes
Just make sure to open and close with the SAME type of quote
*/

//Example
let str1 = 'This is a string';
let str2 = "This is a string";


/* 
==============================
Escaping Quotes with Backslash
==============================

Another way is to use the backslash to escape quotes
*/

//Example
let escape1 = 'it\s six o\clock';


/* 
========================
String Length Property
========================

.length tells us how many characters are inside the string
*/

//Example
let word1 = "caterpillar";
console.log(word1.length);              //output should be 11

/* 
===========================
Changing Case
===========================

toLowerCase() -> converts all letters in the string to lowercase
toUpperCase()-> converts all letters in the string to uppercase
*/

//Example

let kids = "THE KIDS";
console.log(kids.toLowerCase()); //Output: the kids

let wish = "i wish i were big";
console.log(wish.toUpperCase()); //Output: I WISH I WERE BIG.



/* 
==============================
trim() method
==============================

Removes whitespace ONLY from the beginning and end of string
*/

//Example
let spaced = "     but keep the middle spaces         ";
console.log(spaced.trim()); //Output: but keep the middle spaces


/* 
=====================
Accessing Characters
=====================

*/




/* 
=================
Extracting Parts
=================

slice(start, end) -> extracts parts of string (end not included)
substring(start, end) -> similar to slice (no negative indices support)
substr(start, end) -> extrtacts the given length
*/



/* 
========================
Searching Inside Strings
========================

indexOf(value) -> first occurrence (or -1 if not found)
lastIndexOf(value) -> last occurrence
includes(value) -> true/false if found
startsWith(value) -> true/false if starts with value
endsWith(value) -> true/false if ends with value
*/

//Examples
let sentence = "I love JavaScript because JavaScript is powerful!";
console.log(sentence.indexOf("JavaScrip")); //Output 7


console.log(sentence.lastIndexOf("JavaScript")); //Output 24
console.log(sentence.includes("powerful")); //Output true
console.log(sentence.startsWith("I love")); //Output true
console.log(sentence.endsWith("ful!")); //Output true

/* 
===============================
Replacing and Repeating Strings
===============================

replace(search, value) -> replaces first match (string or regex)
replaceAll(search, value) -> replaces all matches (ES2021+)
repeat(count) -> repeats string multiple times
*/

//Examples

let msg = "Hello World, Hello Universe";
console.log(msg.replace("Hello", "Hi")); //Output: Hi world, Hello Universe
console.log(msg.replaceAll("Hello", "Hi")); //Output: Hi world, Hi Universe
console.log(msg.repeat(3)); //Output: Hello World, Hello UniverseHello World, Hello UniverseHello World, Hello Universe


/* 
===========================
Splitting and Concatenating
===========================

split(separator) -> converts stirng into array
concat() -> joins multiple strings
*/

//Examples
let csv = "apple, banana, cherry";
console.log(csv.split(",")); //Output: ["apple", "banana", "cherry"]

// let f;
// f = csv.split(",");
// console.log(f);


let s1 = "Hello";
let s2 = "World";

console.log(s1.concat(" ", s2)); //Output: Hello World

/* 
==============================
Template Literals
==============================

Backticks ` ` allow interpolation with ${} and multi-line strings.

Template literals are literals delimited with backtick (`) characters,
allowing for multi-line strings, string interpolation with embedded expressions, and
special constants called tagged templates

Template literals are sometimes informally called template strings, 
becaure they are used most commonly for string interpolation
(to create strings by doing subsitution of placeholders).
However, a tagged template literal may not result in a string;
it can be used with a custom tag function to perform whatever operations
you want on the different parts of the template literal.
*/

//Example
let firstName = "Kevin";
let lastName = "S.";
console.log(`Hello ${firstName} ${lastName}, welcome`); //Output: Hello Kevin S., welcome



/* 
===================
JavaScript Numbers
===================

Numbers in JavaScript are values that can be used in mathematical 
operations, No quotes needed -- just write them
*/

//Examples

// int a = 10;
// float b = 3.4;
// long c = 3.44444;
// double d = 3.14159265358973;


let whole = 10;
let pi = 3.14159;
console.log(whole + pi); //Output: 13.14159


/* 
===================================
Fractions, Improper, Mixed
===================================


Fractions are just division operations
Mixed Numbers can be written using parentheses
*/

//Examples
let fraction = 1 / 3;
console.log(fraction); //Output: 0.3333333



/* 
===================================
Arithmetic Operators
===================================
+ - / *

*/
//Examples
let sum = 1+3;
console.log(sum); //Output: 4

let difference = 9-4;
console.log(difference); //Output: 5

let product = 4*8;
console.log(product); //Output: 32

let quotient = 17/8;
console.log(quotient); //Output: 2.125

let remainder = 17 % 8;
console.log(remainder); //Output: 1s


/* 
======================
String Concatenations
======================

+ is used to combine two strings together
*/
//Examples
let s3 = "This is ";
let s4 = "a complete sentence.";

console.log(s3 + s4); //Output: This is a complete sentence.


// // =====================================
// // Mathematical Functions in JavaScript
// // =====================================

// // Math.pow(base, exponent)
// raises the base number to the power of exponent

console.log(Math.pow(3,4)); //Output: 81

// Math.sqrt(number)
// takes the square root of number
 
console.log(Math.sqrt(36)); //Output: 6

// Math.abs(number)
// gives the absolute value of the number

console.log(Math.abs(-9)); //Output: 9

//Math.floor()
// provides the nearest integer rounding to the lower nearest integer
console.log(Math.floor(3.79)); //Output: 3



