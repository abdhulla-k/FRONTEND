let input = require( "readline-sync" );

let row = input.question( "Enter row : " );
let colem = input.question( "Enter colem : " );

let arr1 = [];
let arr2 = [];
let arr3 = [];

let temp = [];


for( let i = 0; i < row; i++ ) {
    for( let j = 0; j < colem; j++ ) {
        temp[j] = parseInt( input.question( `enter arr1[${i}][${j}]th element: `));
    }

    arr1.push(temp);
    temp = [];
}

for( let i = 0; i < row; i++ ) {
    for( let j = 0; j < colem; j++ ) {
        temp[j] = parseInt( input.question( `enter arr2[${i}][${j}]th element: `));
    }

    arr2.push(temp);
    arr3.push(temp);
    temp = [];
}

// find sum of the array
for( let i = 0; i < row; i++ ) {
    for( let j = 0; j < colem; j++ ) {
        arr3[i][j] = arr1[i][j] + arr2[i][j];
    }
}

console.log( arr3 );