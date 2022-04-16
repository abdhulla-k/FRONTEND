
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

console.log( '=============promis.resolv============')

// resolv is an inbulild function to convert an object into promis

const cach = {
    name : 'abdhu'
}

function getJso2( url ) {

    if (cach) {
        return Promise.resolve(cach)  // converting cach to promis
    }
    return fetch( url )
    .then(( data ) => {
        return data.json()
    })
}


