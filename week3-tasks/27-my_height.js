my_height = 50;
let input = require( "readline-sync" );

try {
    let height = parseInt( input.question( "enter your height: " ));
    if( isNaN( height )) {
        // throw new Error( "notANumberError" );
        throw 'notANumberError'
        
    } else if( height > my_height ) {
        // throw new Error( "HugeHeightError" );
        throw 'hugeHeightError'
        
    } else if( height < my_height ) {
        // throw new Error( "TinyHeightError" );
        throw 'tinyHeightError'
        
    } else {
        console.log( height );
    }
} catch( err ) {
    console.log( err )
}