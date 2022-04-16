// whate are the defferences between syncronous call back and asyncronous call back?
// Javascript is an event based programing language. Event is messages from browser.
/*

 Synchronous:
    Synchronous functions only work with line by line.
    If an API call is synchronous, it means that code execution will block (or wait) for the API call to return 
    before continuing. This means that until a response is returned by the API, your application will not execute
    any further, which could be perceived by the user as latency or performance lag in your app. Making an API call
    synchronously can be beneficial, however, if there if code in your app that will only execute properly once the
    API response is received.

 Asynchronous:
    Asynchronous calls do not block (or wait) for the API call to return from the server. Execution continues on in 
    your program, and when the call returns from the server, a "callback" function is executed. 

*/

/*
 In Javascript, callbacks are usually asynchronous - you pass a function that will be invoked ... but other events
 will continue to be processed until the callback is invoked.

 If you don't care what Javascript events occur in which order - great.
 Otherwise, one very powerful mechanism for managing asynchronous behavior in Javascript is to use "promises":
*/

// eg of Asynchronous callback function

var button1 = document.getElementById( "mybutton" )
button1.onclick = () => {
    console.log('started click event')   // it will work first 
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/todos/1', // js will mark hear and go ahead.
        sucsess: (data) => {                          // js would be aware about the success message
            console.log(data);
        }
    })
    console.log('completed click event') // it will work second
}

/*
 Incase of multiple api, may you have to write the code as nested.It is very difficult to write and maintain the code
 if it is in nested method. 'Promis' will help you to get rid of the nested method. Promis is a class and You can use it
 to wirte code as simple.
 Go to file Promis.js
*/