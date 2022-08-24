let input = require( "readline-sync" );

let written = parseInt(
    input.questionInt( "enter written test mark: " )
);

let labTest = parseInt(
    input.question( "enter lab stest mark: " )
);

let assignment = parseInt(
    input.question( "enter assignment mark: " )
);

let weightedAverage = ( written * 70 ) / 100 + ( labTest * 20 ) / 100 + ( assignment * 10 ) / 100;
console.log( `wighted average: ${ weightedAverage }` );