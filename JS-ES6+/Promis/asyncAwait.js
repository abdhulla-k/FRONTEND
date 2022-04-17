// The async keyword used when declaring a function.
// The await keyword used when calling a function.


// The fucnction created using async keyword returns a promis
// eg

async function getValue() {
    return 22;
}

const result = getValue();
// got a promis. then solv it
result.then((data) => {
    console.log(data)
})

//////////////////////////////////////


// await keyword will wait for respons

async function getValue1() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonData = await data.json();
    return jsonData;
}

const result1 = getValue1();
result1.then(( data ) => {
    console.log( data )
})
