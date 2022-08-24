let input = require( "readline-sync" );

let number = parseInt(
    input.question( "enter a number to show multiplication table: " )
);

for( let i = 0; i < 10; i++ ) {
    console.log( `${ i+1 } * ${ number } = ${ (i+1) * number }` );
};