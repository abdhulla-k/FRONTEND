// what is call back function
// in call back function. you can pass functions as parameters

// for example:

function print( a, b, c ){
    let result = a + b
    c(result)
}

print( 2, 3, console.log)  // here we are passing 'console.log' as a parameter

////////////////////////////

function plus(a,b){
    return a+b
}

function exam( a, b, c ){
    let result = c(a,b)
    console.log(result)
}

exam( 3, 3, plus ) // here we passing function plus as a parameter