// get input from terminal. there are many ways to get input from terminal. this is one of them.
var read = require( "readline-sync" )

let userInput = "";

var value = read.question( "enter your name: " );

console.log( `you entered ${ value }` );