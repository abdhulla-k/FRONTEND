/*

* Promis is a class
* thies class has a constructor and that constructor would take an argument as function.pass your function here.
* there are also two functions named resolve and reject.
* promiss returns an object. that object has a function named 'then'. you can call callbacks into then.
* you can call 'catch' function to catch errors

*/

const post = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

function getPost() {
    setTimeout( () => {
        let output = '';
        post.forEach((post, index ) => {
            output += `<li> ${post.title} </li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost( newOne ){
    return new Promise(( res, rej ) => {
        setTimeout(() => {
            post.push(newOne);

            const error = false;
            if (!error) {
                res();
            }
            else {
                rej( 'Error: something went wrong' );
            }
        }, 2000 );
    })
}


createPost( { title: 'Post Three', body: 'this is post three' })
 .then(getPost)
 .catch(err => {
     console.log(err)
 })



////////////////////////////////////////////////////////////////////

// create a promis

function myFetch(url) {
    return new Promise(( resolve, reject ) => {
        $.ajax({
            type: "GET",
            url: url,
            sucsess: function(msg){
                resolve(msg)
            },
            error: function( statusText ) {
                reject( statusText )
            },
        });
    });
}


// uset that promis

const pr = myFetch('https://jsonplaceholder.typicode.com/todos/1')

pr.then(( data ) => {
    console.log(data);
},)


///////////////////////////////////////////

// nesting

console.log( "requesting 1" )
const pr1 = myFetch( 'https://jsonplaceholder.typicode.com/todos/1' )
pr.then(( data ) => {
    console.log( data );

    console.log( "requesting 2" )
    pr2 = myFetch( 'https://jsonplaceholder.typicode.com/todos/2' )
    pr2.then(( data ) => {
        console.log( data )

        console.log( "requesting 3" )
        pr3 = myFetch( 'https://jsonplaceholder.typicode.com/todos/3' )
        pr3.then(( data ) => {
            console.log( data )
        })
    })
})  // this nesting method is not a good practice. so promis has a great method 'chaining'


////////////////////////////////////////

// chaining

console.log( 'requested 1' )

myFetch( 'https://jsonplaceholder.typicode.com/todos/1' )
.then(( data ) => {
    console.log(data);
    console.log( 'requested 2' )
    return myFetch( 'https://jsonplaceholder.typicode.com/todos/2' )
})
.then(( data ) => {
    console.log( data );
    console.log( 'requested 3' )
    return myFetch( 'https://jsonplaceholder.typicode.com/todos/3' )
})
.then(( data ) => {
    console.log( data )
});


/////////////////////////////////////////

// fetch function. fetch is an inbuild function from javascript insted of createing new promis
console.log(' ==============fetch============\n')

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(( data ) => {
    return data.json() 
})
.then(( data ) => {                  // to reduce thsi multiple line. write a function 
    console.log( data )
})  

///////////////////////////////////
 // to reduce thsi multiple line. write a function 

function getJson( url ) {
    return fetch( url )
    .then(( data ) => {
        return data.json()
    })
}

getJson('https://jsonplaceholder.typicode.com/todos/1')
.then(( data ) => {
    console.log( data );
    getJson('https://jsonplaceholder.typicode.com/todos/2')
})
.then(( data ) => {
    console.log(data)
    getJson('https://jsonplaceholder.typicode.com/todos/3')
})
.then(( data ) => {
    console.log( data)
})

