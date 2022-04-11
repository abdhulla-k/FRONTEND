// what are the differences among var, let, and const ?

// let is reducing some issues of var.
/*  if you created var globally, then that will currept the window object ( every global object are saves in window
     object. but every declarations under function in saves in stack of that function ) let will not currept the 
     global object. because, at the time of declaration of let, can not possible to repeat with same name as global
       variable declaration */

// the point is var currepts window object
// let will not currept window object

// eg.

var a = 3

var a = 2
console.log(a)

// let b = 5   // will show error
let b = 6
console.log(`let from global ${b}`)

function sum(){
    var a = 3
    let k = 4
    console.log(`var a from function ${a}`)
    console.log(`let from function ${k}`)
}
let k = 7
sum()
console.log(`let from global ${k}`)
console.log(`var a from globla ${a}`)

/////////////////////////////////

console.log('===============================================')

// variable scope
// scope means the avilability or accessibility of a variable. 
// you can access var before declaration. incase of let, can not possible. because
// the point is:
// var : will hoist. let : wont hoist           * what is meant by hoisting?

// eg.

function sample(){
    console.log(ho)
    // console.log(hi)  // it will show error. because, let difined after usage.
    var ho = 3; // will not print enything. because, declaration only move to upperside. assignment will not.
    let hi = 2;
    console.log(hi)
}

sample()

// usage under blocks
// block = everything under a curly brace. { this is block }
// poing is :
// can declare var any times under a block. will not show error. because of hoisting.
// can not declare a let multiple times in a block

function sample2(){
    var a;
    var a;
    var a; // will not show error

    //let b;
    let b; // will show error.
}


////////////////////////

// var is full function scop
// let is not
// eg

function sample3(){
    let kk = 33;
    let ab = 22;
    if(true){
        let aa = 100;
        var bb = 200;
        let ab = 500;
        console.log(kk)  // let is avilable under child block
        console.log(ab) // will print 500. not 22. because, important is block
    }

    console.log(`var is full functional scope ${bb}`) // will not show error
    // console.log(aa) //will show error. variable not diclared. because, incase of let, variable is only avilable 
    // under scop and chiledscope
    console.log(kk) // it will work
}

sample3()

console.log('====================================')

// const
// what is const?
// const is same as let, re assignment will show error. but can change dat in arra.
// can not declare const withoud a data

// eg.

// const y; // will show error
const y = 3;
console.log(y)

// y = 4; // it will show error. 

const arrr = [];
console.log(arrr)
arrr.push(3,4,5)
console.log(arrr)