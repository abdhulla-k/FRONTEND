let input = require( "readline-sync" );

let choice = parseInt(
    input.questionInt( "enter\n 1 for addition\n 2 for substraction\n 3 for division\n 4 for multiplication" )
);

let a = parseInt( input.question( "enter two numbers: " ));
let b = parseInt( input.question() );

if( choice == 1 ) {
    console.log( `sum is ${ a + b }` );
} else if( choice == 2 ) {
    console.log( `result is: ${ a - b }` );
} else if( choice == 3 ) {
    console.log( `result is: ${ a / b }` );
} else if( choice == 4 ) {
    console.log( `result is: ${ a * b }` );
} else {
    console.log( 'invalid choice! try again' );
}