let input = require( "readline-sync" );

let arr1 = [];
let arr2 = [];

let limit = parseInt( input.question( "enter array length: " ));

for( let i = 1; i < 3; i++ ) {
    for( let j = 0; j < limit; j++ ) {
        if( i == 1 ) {
            arr1[j] = input.question( `enter ${j} th element of array1: ` );
        } else {
            arr2[j] = input.question( `enter ${j} th element of array2: ` );
        }
    }
}

for( let i = 0; i < limit; i++ ) {
    let temp = arr1[i];
    arr1[i] = arr2[i];
    arr2[i] = temp;
}
console.log( "array1: " + arr1 );
console.log( "array2: " + arr2 );