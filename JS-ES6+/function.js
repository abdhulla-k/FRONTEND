// function

function sum( num1, num2 ){
    var result = ( num1 + num2 )
    return result
}
console.log( sum( 1, 3 ))


console.log('============================================')


function new_address(address){
    const {state, city} = address;

    const data = {
        state,
        city,
        country: 'India'
    }
    console.log( `${data.state}, ${data.city}, ${data.country}` )
}

new_address( {city:'Kozhikode', state:'Kerala'})

