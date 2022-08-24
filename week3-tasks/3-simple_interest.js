let input = require( "readline-sync" );

let p = parseFloat( input.question( "Enter principal amount: " )); // principal amount
let r = parseFloat( input.question( "Enter interest rate: " )); // interest rate
let n = parseFloat( input.question( "Enter number of years: " )); // number of years

// find simple interest
let simpInterest = ( p*r*n ) / 100

if( isNaN( simpInterest ) ) {
    console.log( "you entered wrong data. every values are note numbers" );
} else {
    console.log( `smiple interest is: ${ simpInterest }` );
}