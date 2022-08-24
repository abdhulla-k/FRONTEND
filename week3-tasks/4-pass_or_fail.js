let input = require("readline-sync" );

let mark = parseFloat( input.question( "Enter your mark: " ));

if( isNaN( mark ) ) {
    console.log( "you entered not a number. please try again" );
} else {
    if( mark >= 50 ) {
        console.log( "passed" );
    }

    if( mark < 50 ) {
        console.log( "you failed" );
    }
}