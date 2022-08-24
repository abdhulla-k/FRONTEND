main();

function main() {
    let input = require( "readline-sync" );

    let arr1 = [];
    let arr2 = [];

    let row = parseInt( input.question( "enter the row of array: " ));
    let col = parseInt( input.question( "enter the colum of array: " ));

    // get array1 elements
    console.log( "enter the elements to array 1: " );
    arr1 = getArray( row, col, input );

    // get array2 elements
    console.log( "enter the elements to array 2: " );
    arr2 = getArray( row, col, input );

    // add two arrays
    let addedArray = [];
    addedArray = addArray( arr1, arr2, row, col );

    // print multiplied array
    displayArray( addedArray );
}

function getArray( row, col, input ) {
    let arr = [];
    let temp = [];

    // get array elements
    for( let i = 0; i < row; i++ ) {
        for( let j = 0; j < col; j++ ) {
            temp[j] = parseInt( input.question( `enter arr[${i}][${j}] th element: ` ));
        }
        arr.push( temp );
        temp = [];
    }

    return arr;
}

function addArray( arr1, arr2, row, col ) {

    // add two arrays
    for( let i = 0; i < row; i++ ) {
        for( let j = 0; j < col; j++ ) {
            arr1[i][j] += arr2[i][j];
        }
    }

    return arr1;
}

function displayArray( arr ) {
    console.log( arr );
}