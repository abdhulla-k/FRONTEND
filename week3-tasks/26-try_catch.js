// let myString = 1234;
let myString = "12345"

try {
    console.log( `Rverse string is: ${ myString.split( "" ).reverse().join( "" ) }` );

} catch( err ) {
    console.log( `${ err }` );

} finally {
    console.log( `Type of myString is: ${ typeof myString }` );

}