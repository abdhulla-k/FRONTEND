function main() {
    let arr = [];
    arr = getArray();
    displayArray( arr );
}

function getArray() {
    let arr = [];
    let input = require( "readline-sync" );

    let length = input.question( "enter the length of array: " );
    for( let i = 0; i < length; i++ ) {
        arr[i] = input.question( `enter ${i}th element: ` );
    }

    return arr;
}

function displayArray( arr ) {
    console.log( arr );
}

main();