let input = require( "readline-sync" );

let mark = input.question( "Enter you mark to find grade: " );

if( isNaN( mark )) {
    console.log( "you entered not a number" );
} else {
    if( mark < 50 ) {
        console.log( "Failed" );
    } else if( mark >= 50 && mark < 60 ) {
        console.log( "E" );
    } else if( mark >= 60 && mark < 70 ) {
        console.log( "D" );
    } else if( mark >= 70 && mark < 80 ) {
        console.log( "C" );
    } else if( mark >= 80 && mark < 90 ) {
        console.log( "B" );
    } else {
        console.log( "A" );
    }
}