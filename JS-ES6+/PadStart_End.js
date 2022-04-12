// do what the podStart and podEnd does?
// it gives us a way to add values to the starting string and add values to the end of the string.

/* padEnd will continue to add the letter you entered to the end of the sting,
  until the length of the string is as long as the intiger you entered. padStart also add the letter to the start of
  the string. to give the letter is not so important. function will add empty spaces when there is not have given  letter */

// eg

let example = 'abdhulla'

console.log(example.padEnd( 10, 'a' )) 

console.log(example.padStart( 10, 'a' ))

//////////////////////

let example1 = 'omy'

console.log( example1.padStart( 10 ))

// check the length
console.log( example.padEnd( 100 ).length)