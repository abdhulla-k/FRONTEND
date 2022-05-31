let ar = [1, 5, 4, 3, 2, 6, 8];

// to find the length of an array
console.log(ar.length)

// to prin the element in a certain index
console.log(ar[0])

// to checke is include an element
console.log(ar.includes(3))
console.log(ar.includes('x'))

// to retern the array in reverce
console.log( ar.reverse());

// Sorts the elements of an array in specific order
console.log( ar.sort());

// Returns array by filling elements with given value
console.log( ar.fill( 7 ));

// Concatenates the array elements to a string
console.log( ar.join('ar'));

//Removes and returns the last array element
console.log( ar.pop());

// Removes and returns the first array element
console.log( ar.shift());

// Adds elements to end of array & returns its length
console.log( ar.push(9));

// Returns array by merging given value and/or arrays
let ar2 = [ 10, 11, 12, 13, 14 ];
console.log( ar.concat(ar2));

// Returns the last index of occurrence of an element
console.log( ar.lastIndexOf(7));

// Returns the first index of occurrence of element
console.log( ar.indexOf(7));

// Checks if a value exists in an array
console.log( ar.includes(11));

// Returns array by filtering elements on given test
console.log( ar.filter((a)=>(2*a)));

// Executes the given function on array elements
console.log( ar.forEach())

