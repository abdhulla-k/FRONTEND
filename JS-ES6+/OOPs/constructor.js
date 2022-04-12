// how to create constructor in a class?

class Student {

    name;
    yob;

    constructor( name, yob ){
        this.name = name;
        this.yob = yob;
    }

    get_age(){
        return new Date().getFullYear() - this.yob;
    }
}



// create object
var student1 = new Student( 'Abdhu', 2000 )
var student2 = new Student( 'Time', 1998 )

// print student1's data
console.log( `Hello ${ student1.name }, your ${ student1.get_age() } years old` )

// print student2's data
console.log( `Hello ${ student2.name }, your ${ student2.get_age() } years old` )
