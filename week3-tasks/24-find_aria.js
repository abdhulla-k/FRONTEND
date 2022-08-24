class Aria {
    input = require( "readline-sync" );

    circle() {
        let radius = this.input.question( "enter the radius: " );

        // aria of a circle is = 3.14 * r * r
        let aria = ( 3.14 * radius ) * radius
        console.log( `result is: ${ aria }` );
    }

    squire() {
        let length = this.input.question( "enter the length: " );
        
        // aria of a squire = a * a
        let aria = length * length;

        console.log( `aria is: ${ aria }` );
    }

    rectangle() {
        // aria of a rectangle = l*w ( width * height )
        let length = this.input.question( "enter the width: " );
        let height = this.input.question( "enter the height: " );

        console.log( `aria is: ${ length * height }` );
    }

    triangle() {
        // aria of a triangle = 1/2bh ( b = base, h = height )
        let base = this.input.question( "enter the base: " );
        let height = this.input.question( "enter the height: " );
        console.log( `aria is: ${1/2 * base * height }` );
    }

}

class MyClass extends Aria {
    main() {
        // create input method
        let input = require( "readline-sync" );

        // ask the user choice
        let choice = parseInt(
            input.question(
                `Enter your choice:\n\t\t1. Circle\n\t\t2. Squire\n\t\t3. Rectangle\n\t\t4. Triangle\n`
            )
        )

        switch( choice ) {
            case 1:
                this.circle();
                break;
            
            case 2:
                this.squire();
                break;

            case 3:
                this.rectangle();
                break;

            case 4:
                this.triangle();
                break;

            default:
                console.log( "invalid choice! try again." );
        }
    }

    circle() {
        super.circle();
    }

    squire() {
        super.squire();
    }

    rectangle() {
        super.rectangle();
    }

    triangle() {
        super.triangle();
    }
}

// create object
let obj1 = new MyClass();
obj1.main();