// for loop
console.log('================ For loop ================')


let incomes = [200, 300, 400]

for ( i in incomes ){
    console.log( incomes[i] )
}

console.log('============================================')

let total = 0;
for ( const income of incomes ){
    
    console.log( income );
    console.log( income )
    total +=income;
}

console.log('============================================')

for ( let income of incomes ){
    income += 100 
    console.log( income )
}

console.log('============================================')

let full_name = 'Accounting'
for ( const i of full_name ){
    if ( i == 's' ){
        break
    }
    else{
        console.log( i ) 
    }
    
}