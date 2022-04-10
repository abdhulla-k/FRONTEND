// what is arrow function is ?
// be for learning about arrow function, we need to learn about anonimous function

// anonimous function is nothing but function that don't want name.
// eg

/*function ( a, b ){
    return a + b;
}*/

// in this case, how we can call the function without a name?
// actually not possible. since we'll diclare this function into a variable
// eg

var fn = function( a, b ){
    return a + b;
}

console.log(fn( 2, 3 ))  // now this function is working

// then what is narrow function
// narrow function is an another method to write anonimous function 
// eg 

var mn = ( a, b ) => {  /* useing  this arro => to make arrow function */ 
    return a + b;
}

console.log(mn( 3, 4 ))


/* we have to remove keyword return and curly braces together when there is only 
one line in arrow function*/
// eg 

var sn = ( a, b ) => ( a + b );

console.log(sn( 5, 5 ))


// some other example to narrow function 

function example1( ...nums ){
    let total = nums.reduce(( x, y ) => x + y )  // returns the sum of data coming from
    return total

    //console.log(total)
}

console.log(example1( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ))

///////////////////////

var example2 = ( a ) => ('abdhulla') // returns string

console.log(example2())

///////////////////////

// arrow function incase of objects

/* an other important pooint about arrow function is declaration. you can call normal functions before declaration.
but not possible in case of arrow function */ 
// eg

console.log(example3())

function example3(){
    return 'have to call normal function before declaration'
}

// cal narrow function before declaration

// console.log(example4())
// var example4 = () => console.log('not possible to call before declaration') 
// coments this befcouse of reduce error
/* why you have to possible to call function before declaration. The java script get host all the declarations to 
upper side of the file. incase of arrow function, the function will stay ther */