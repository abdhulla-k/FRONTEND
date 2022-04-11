// what is default parameter ?
// default parameter will privent error, when the parra meter is note passed at the time of function calling.

function add( num_array = [] ){ /* assigned an empty array to num_array. That is an example of default parameter */
    let total = 0;
    num_array.forEach(element => {
        total += element;
    });
    console.log(total)
}

arr = [1, 2, 3, 4, 5]

add(arr) // here, passed a parameter

add() /* here, did not passed any  parameter's. even then, the function will work with the default array that have 
set there in under function. */

////////////////////////

// an another example for default parameter


function sum(a=0){() => a
    console.log(a)
}

sum()
sum(3)