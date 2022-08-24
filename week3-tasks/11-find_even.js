let input = require( "readline-sync" );

let limit = parseInt( input.question( "Enter the length of array: " ));

let arr = [];
let count = 0;

for( let i = 0; i < limit; i++ ) {
    arr[i] = parseInt( input.question( `enter ${i}th element of array: ` ));
    if( arr[i] % 2 == 0 ) {
        count++;
    }
}

console.log( `there are ${count} even numbers in your array` );