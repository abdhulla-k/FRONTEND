let input = require( "readline-sync" );

let limit = parseInt( input.question( "Enter the length of array: " ));

let arr = [];
let count = 0;

// get array elements from user
for( let i = 0; i < limit; i++ ) {
    arr[i] = parseInt( input.question( `enter ${i}th element of array: ` ));
}

for( let i = 0; i < limit; i++ ) {
    for( j = i+1; j < limit; j++ ) {
        if( arr[i] < arr[j] ) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
}

// arr.sort();
// arr.reverse();

console.log( arr );