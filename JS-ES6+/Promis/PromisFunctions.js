
function getJson( url ) {
    return fetch( url )
    .then(( data ) => {
        return data.json()
    })
}


getJson( 'https://jsonplaceholder.typicode.com/todos/1' )
.then(( data ) => {
    console.log( data )
    return getJson( 'https://jsonplaceholder.typicode.com/todos/2' )
})
.then(( data ) => {
    console.log( data )
    return getJson( 'https://jsonplaceholder.typicode.com/todos/1' )
})
.then(( data ) => {
    console.log( data )
}).catch(() => {
    console.log( 'error', err )  // will stopp exicution, if found an error
})