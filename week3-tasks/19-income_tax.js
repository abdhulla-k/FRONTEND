let input = require( "readline-sync" );

let annualIncome = input.question( "enter your annual income: " );

if( annualIncome <= 250000 ) {
    console.log( "No tax" );
} else if( annualIncome > 250000 && annualIncome <= 500000 ) {
    console.log( `tax amount is: ${ ( annualIncome / 100 ) * 5 }`);
    
} else if( annualIncome > 500000 && annualIncome <= 1000000 ) {
    console.log( `tax amount is: ${ ( annualIncome / 100 ) * 20 }`);
    
} else if( annualIncome > 1000000 && annualIncome <= 5000000 ) {
    console.log( `tax amount is: ${ ( annualIncome / 100 ) * 30 }`);
    
}