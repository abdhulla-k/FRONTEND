let age = 22
let first_name = 'abdhulla'
let second_name = 'K'
const example = `${'myname age ' + age} 
${ 'my name is ' + first_name}`
let example2 = `${first_name} ${second_name}` // template literal


// print
console.log(example, example2)

const personal_information = {
    first_name : 'abdhu',
    second_name : 'omy',
    age : 22,
    location : 'omassery'
}

console.log(personal_information.first_name + ' ' + personal_information.second_name)

const {first_name: fn, second_name: sn} = personal_information
console.log(fn, sn)

// array
let names = ['abdhu', 'omy', 'k']
console.log(names)

// Destructuring arrays
let [first, second, last_name] = ['abdhu', 'k', 'omy']
console.log( first, second, last_name )
first = 'abdhulla'
console.log( first, second, last_name )
