const COLOR_RED = "#F00";   // if COLOR_RED is never going to be changed... make it a constant

/* multi lines
yes it is */

//To keep the old code working, most such modifications are off by default.
//  You need to explicitly enable them with a special directive: "use strict".

let message;
message = 'hello';
alert(message);

// could do in multiple lines
let user = 'james', age= 50, imessage = 'hello?';

const myBirthday = '18.04.1982'; // for unchanging variable use const
// you cannot reassign a constant -> myBrithday = '20.04.1993';

//An extra variable is good, not evil.

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

//double quote or single quote matters!
let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)

let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")

typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)

