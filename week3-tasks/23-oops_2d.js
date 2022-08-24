class Main {
    constructor () {
        this.main();
    }

    main() {
        // create input method or infrastructure to get inptu from terminal
        let input = require( "readline-sync" );

        // initialize array
        let arr = [];

        // get array length
        let limit = parseInt( input.question( "enter the length of your 2d array: " ));

        // get array value 
        arr = this.getArray( limit, input );

        // dispalay the array 
        this.displayArray( arr );
    }

    getArray( limit, input ) {
        let arr = [];
        let temp = [];

        // get array value
        for( let i = 0; i < limit; i++ ) {
            for( let j = 0; j < limit; j++ ) {
                temp.push(
                    parseInt(
                        input.question( `enter arr[${i}][${j}]th position value:` )
                    )
                )
            };

            // push seperate rows into array
            arr.push( temp );
            temp = [];
        }

        // return 2d array
        return arr;
    }

    displayArray( arr ) {
        // dispalay array
        console.log( arr );
    }
}

let obj1 = new Main();