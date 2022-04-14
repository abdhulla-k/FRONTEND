// how to inherit a class
// eg

class Baseclass {

    constructor() {
        console.log( 'from constuctor of baseclass' );

    }

    setName(name) {
        this.name = name;
        console.log( `welcome ${this.name}. set name`)
    }

    sampleOverRidingFunction(){
        console.log( "It is a sample function for test super in case of functon. from base" )
    }
}

class Sub extends Baseclass {
    constructor(){
        console.log('from constructor of sub class')
        super()
    }

    showName() {
        console.log(`name is ${this.name}, from show name`)
    }

    sampleOverRidingFunction() {
        super.sampleOverRidingFunction()
    }
}

var a1 = new Sub()
a1.setName('abdhu')
a1.showName()
a1.sampleOverRidingFunction()