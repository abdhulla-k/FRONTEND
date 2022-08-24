let input = require( "readline-sync" );

let number = input.question( "enter a number: " );
let flag = true;

for( let i = 2; i < number - 1; i++ ) {
    if( number % i == 0 ) {
        console.log( "number is not prime" );
        flag = false;
        break;
    }
}

if( flag == true ) {
    console.log( "number is prime" );
}