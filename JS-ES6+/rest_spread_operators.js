/* what is rest operator.
JavaScript uses three dots (...) for both the rest and spread operators.
But these two operators are not the same.The main difference between rest and spread is that the rest 
operator puts the rest of some specific user-supplied values into a JavaScript array. But the spread syntax 
expands iterables into individual elements.*/

// for instance of rest operator

console.log( '==================rest operator==================' )


function res( a, b, ...c ){
    console.log( `'a is: ' ${a} ', b is: ' ${b} 'and c is: ' ${c}` )
    for ( i of c ){
        console.log( i )    // now c is itaratable
    }
}

res( 'potato', 'tomato', 'banana', 'jackfruit', 'orange', 'apple' )

///////////////////////////////////////
// rest operator

function add( num ) {
    console.log( arguments )  // use argument
}

add( 1, 2, 3, 4, 5 )


console.log('============================================')


function add1( ...num ){
    console.log( num )
}

add1( 1, 2, 3, 4, 5 )

/////////////////////////////

console.log( ' ==============spread operator================= ' )

// incase of spread operator


function spr( a, b, c, d, e, f ){
    console.log( a, b, c, d, e, f )
}

spr( ...'potato', )

/////////////////////////////////////

function spr1( a ){
    console.log( ...a )
}

spr1( 'Abdhulla K' )

////////////////////////////////////

function spr3( a ){
    console.log( a )
}

const c = {'country' : 'India', 'state': 'Kerala'}
let a = {'name': 'abdhu', ...c}
spr3( a )

////////////////////////////////////


let ar = [1, 2, 3, 4, 5, 7]
let kr = [...ar]

console.log(kr)

kr.push( true )
console.log(kr)


console.log('============================================')


let ab = {
    Name : 'abdhu',
    place : 'omy'
}
let bb = {
    ...ab
}

console.log( bb )
bb.Name = 'basheer'
console.log( bb )
console.log( ab )