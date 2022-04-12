// get is a specific feature from javascript

class Animal{
    constructor( type, leg ) {
        this.type = type;
        this.leg = leg;
    }

    get metaData(){
        return `type: ${this.type}, legs: ${this.leg}`;
    }
}

let cat = new Animal( 'cat', 4 )
let mous = new Animal( 'mous', 4 )

console.log( cat.metaData )