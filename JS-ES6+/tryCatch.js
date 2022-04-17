

function getValue() {
    //return [2,3]
}

try {
    const value = getValue()
    console.log(value[0] + value[1])
}
catch{
    console.log( 'something went wrong' )
}
finally{                // final will run allways
    console.log('event completed')
}