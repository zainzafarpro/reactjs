/*
    ===== TIME AND JAVASCRIPT WAITS FOR NONE ======

    whenever a javascript program is called, a global execution context is created.
    What is execution context?
    you can imagine a box which has 2 phases, a memory creation phase and a code execution phase.
    in memory creation phase, all of the variable and functions allocated to memroy into the global space, in case of variable a special keyword is assignd called "undefind".
    in case of function, functions are copied as it is in memory creation.
*/
var num = 2;

// const variables must be declared whenever they are initialized, also constants cannot be reassigned a value;
const plus = 4;

// functions are the heart of javascript, they are like mini programs, whenever they are invoked a whole new execution context is created. Functions are first class citizens
function sum(n) {
    var ans = n + n;
    // return keyword states that return the control of the program where this function was invoked, so in this case a control will be shifted to sum1 and sum2 respectively.
    return ans;
}

// after receving the value from function sum, function sum's execution context will be deleted from the global execution context.
var sum1 = sum(num);
// when control moves to sum2, a brand new execuation context will be created.
var sum2 = sum(5);

/**
 * What is call stack?
 * so you can imagine this as a pipe in which execution contexts are pushed one by one, whenever execution context is done it gets poped out from call stack and control goes back to the global execution context, and when the whole program is done, a global execution context is also poped out from call stack. call stack is only for managing the execution contexts of javascript programs. It is also known as main thread
**/

/** =================================================================*/

/** This is a pure example of hoisting, a javascript engine will scan the code and will first assign memory to all the variables and functions, and then the progam will move towards the second phase which is code execution. in memory creation phase functions are copied as it is so in this case we will be able to call and recevie a value from getName function and the value of abc will be "undefind". 
*/

console.log(abc);
var abc = 10;

getName();
function getName() {
    console.log("Zain just started learning");
}


/**================================================================== */


// Example of lexical scope, Scope Chain or closures. Closures have some advantages in javascript, such as maintaing state, function currying, function once and function memoiz, clousers can be used  in data hiding/encapsulation, disadvantages of clousers: over consumption of memory, memory leaks,

function a() {
    function b() {
        var a = 0;
        function c() {
            console.log(a);
        }
        c();
    }
    b();
}

a();

/**================================================================== */
// example of temporal dead zone, let and const are the strict version of variable declaration, we cannot duplicate a variable while using let or const but we can do this in case of var, let and const have their own memory space and cannot be attached to globalt window object .
 let b = 11;
 var a = 10;

/**================================================================== */

// This is a perfect valid javascript code and it is called a block or a compound statement, why we use block/compound statement? we use it because we group multiple statements in a block of javascript code where a javascript engine expect only one statement. let and const are hoisted in their own memory space called block, whereas var is hoisted in global memory space, thats why we can access var outside that block and we cannot access let and const outside the block.
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a)
    console.log(b)
    console.log(c);
}

console.log(a)
console.log(b)
console.log(c);

// this is a pure example of shadowing in javascript, this variable w inside the block shadows the variable w which is outside the block, and the variable inside the block will modify the value of the variable global variable w, because they both point and hoisted to the global memory space.
var w = 100;

{ 
    var w = 200;
}

console.log(w);

// illegal shadowing, we cannot shadow a let variable using var but we can shadow a let variable using let.

let wow = 200;

{
    var wow = 100;
}

// Constructor functions: Constructor function is like a blueprint for creating a certin function/object.
function Person (name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("zain", 20);

// Function statement, Function expression, Anonymous function, Named function expression, Arrow functions

// Function statement, this is also known as Function declaration 
function statment (){
    //....
}

/** The difference between function statement and function expression is hoisting, we can call a normal function before its declaration but in case of function expression we cannot do that. because in memory creation phase function expression will acts like a variable and it will throw an error*/

// Function expression, here function acts like a variable/value
var abx = function () {
    // ...
}

// Anonymous Function, a function without name, Anonymous function is only come into picutre when a you want a function treated as a value. The ability to use function as value are known as first class function, we can also call them as a callback functions. Higher order function: A function which takes another function as an argument or return a function is called higher order function
// function () {

// }

// Named function expression, This is the same as function expression but here a function which is assigned to a variable has a name.
const abw = function aboi() {
    console.log(this);
}
abw()

const aby = () => {
    console.log(this);
}
aby();

// Event Listeners
const element = document.getElementById('clickMe');
element.addEventListener('click', function() {
    console.log('wow')
});

// Web APIs, These API's are part of browser, They are not part of javascript. These API provides a connection to access browser's other features.
// - set time out
// - console.log
// - DOM API
// - location
//- fetch

// Event Loop, Callback Queue, MicroTask Queue: When we use a event or a web API, It registers a call back function, Whenever a callback function invoked it is pushed into a callback queue and an event loop takes that callback function and pushes into the call stack where it gets execuated quickly. so a event loop continuesly monitors the callback queue and callstack; An event loop waits for the callstack to be empty and check if there is anything in callback que then it takes that callback function and pushes into the callstack. event loop handles asynchronous events such as timers, network requests, I/O operations, and more; Micro Task queue is given priority over callback queue and this queue only has the callback fuctions which comes via promises and Mutation observers.


// JavaScript runtime enviroment aka JRE is required to run the javascript code, different browsers has different runtime enviroment such as chrome has v8 firefox has spider monkey etc. a javascript engine run a code in 3 steps, - parsing - compilation - execution

// Callback hell: This occours when you have nested callback functions. when there are lots of callback function, then the code starts to grow horizontally, this is also called as pyramid of dom

// Promises: Promise is an object which represents the eventual completion of an async operation. an async operation eventually be completed but in execution period the value of the user variable will be an empty object and later once we receive a response the object will be filled with data. Why promises are important? by using promises we have the control in our program and we attach a callback function once the promise is settled it is also more cleaner way to write a code., in callback way we give control to another function to invoke our callback function, this called the inversion of control. Settled Promise has 2 states: resolve and rejected

const GITHUB_API = "https://api.github.com/users/zainzafarpro"

// fetch function is a web API, its not part of js, it is provided by browser, Its a Promise and it returns a Response object.
const user = fetch(GITHUB_API);

// This is the example of consuming Promise. a traditional way to handle promise.
user.then(function(response) {
    // response variable receive a value and .json() function is also a Promise.
    return response.json()
}).then(function(data) {
    document.getElementById('clickMe').addEventListener('click', function() {
        document.getElementById('avatar').src = data.avatar_url
    });
})

// This is the example of creating promise.

function creatOrder(cart) {
    // Promise constructor has 2 parameters, resolve and reject. resolve is only be used when our code is successful and in case of error it should be rejected.
    return new Promise(function(resolve, reject) {
        if (true) {
            resolve(orderID);
        }
        if (!cart) {
            let err = new Error("no cart");
            reject(err)
        }
    });
}

/* 
what is async?
what is await?
what is async function? and how it is different from normal function?
*/ 

// async functions always returns a promise, Even if you write a promise and return it from this function. if you pass a normal value it will wrap it into a promise and then return it. Async await is the same and works the same as OLD implementation, it is just more cleaner and concies way to write promises code.

// async function returns a Promise.
async function testAsync() {
    // await keyword can only be used inside async function and it expects a promise, we should write it infront of promise.
    // if we put any code before this line, the javascript engine won't wait for the promise to be resolved, it will quickly execute the code but if we put any code after the await keyword js engine appears to wait for the promise and won't go to the next line. in a traditional way this is not the case.
    const res = await promiseValue;

    // here in async await, the text will be printed after the promise when it is settled.
    console.log("this text will be printed when the promise is resolved");

    console.log(res);
}

// when testAsync() is called, it will be quickly pushed into callstack and js engine will start executing the code. When the execution reachs to the await keyword , the execution of the function will be suspended until the promise is settled and the testAsync() function will be poped out of call stack so that our main thread aka callstack is not blocked. When our promise is settled, the testAsync() function will again pushed into the call stack and the execution will be started from where it left here.
testAsync();

const promiseValue = new Promise(function(resolve, reject) {
    let testJson = {
        firstName: "Affan",
        lastName: "Zain",
        age: 1,
        gender: "male",
        getFullName: function() {
            let fullName = `${this.firstName} ${this.lastName}`;
            return fullName;
        }
    };
    setTimeout(function() {
        resolve(testJson);
    }, 5000);
})

function getValue() {

    promiseValue.then((res) => { console.log(res) });

    // here in a traditional way of handling promise, the text will be printed even if promise is settled or not or any code after the "then" statement, code will quickly be executed.
    console.log("this text will be printed before the promise is resolved, it won't wait a for a promise to be resolved");
}

getValue()


// Real life async await example using fetch() function.
const GIT_API = "https://api.github.com/users/zainzafarpro" // we know that if we paste this url in browser it will show us a json, so it will return a json

async function getGitData() {
    // as mentioned above in old example, this fetch() function is a Promise type and it returns us a Response obejct, so we need to use await keyword to handle promise.
    const gitData = await fetch(GIT_API);
    
    // once we receive a value in gitData variable it will be again a Promise, so again we need to write a await keyword to handle that promise.
    const jsonData = await gitData.json();

    console.log(jsonData);  

}

getGitData();

// Error handling in async await
const TEST_API = "https://somerandomeurl.invalid.com"

async function handleError() {
    // we use try and catch block to handle error inside async await function. when the API call is successful try block is called and executed but when the API has some error and faild, Catch block will be called.
    try {
        const data = await fetch(TEST_API);
        const res = await data.json();
        console.log(res);
    }
    catch(error) {
        console.log(error);
    }
}
handleError();



/** Promise APIs: 
 * Promise.all()
 * Promise.allSettled()
 * Promise.race()
 * Promise.any()
*/

// this is used to handle parallel API calls/multiple Promises and it takes an array of Promises as an argument.
Promise.all(["p1", "p2", "p3"]); // in case of success: This will make 3 API calls in parallel and in response we will get an array. it will wait for all Promises to finish and then it will give the response. The response will be like ["val1", "val2", "val3"]

Promise.all(["p1", "p2", "p3"]);// in case of failure: This will make 3 parallel API calls and as soon as any of the Promise gets rejected this will throw an error and promise.all will also be a failure. For example p2 gets rejected after 1 second, it will not wait for other promises to finish and imediately it will throw an error. The response will be like "Error"

// This is used when we want to receive a API response even if any of them is failed. it also takes an iterable as an argument such as array.
Promise.allSettled(["p1", "p2", "p3"])// In case of success it will behave same as Promise.all but in case of failure, It will give response even if any of the Promise gets rejected, it will wait for all other promises to get settled. The response will be like ["val1", "Error", "val3"]

//This promise is used as a race, which ever promise gets settled first it will give you the response of that settled promise. It takes an iterable itme and in response it returns a value of the promise which gets settled first, weather it is success or failure. it will not wait for other promises to finish
Promise.race(["p1", "p2", "p3"])

//it is very much similar to race. it takes an array as argument and it will wait for first promises to get resolved or successful, and it will return the value or successful promise, something like "val2", it is a success seeking promise API.
Promise.any(["p1", "p2", "p3"])// If all of the promises gets rejected or failed then in this moment, we will receive an "aggregated error" and this error will be an array of all three errors. ["err1", "err2", "err3"]


// Live example of Promise.all, Lets create dummy Promise API calls with time delay to demostrate the success and failure response.

const p1 = new Promise(function(resolve, reject) {
    // This API will return a promise after 5 seconds
    setTimeout(() => {
        resolve("p1 is successful");
    }, 5000)
});

const p2 = new Promise(function(resolve, reject) {
    // This API will return a promise after 3 second
    setTimeout(() => {
        resolve("p2 is successful");
    }, 3000)
});

const p3 = new Promise(function(resolve, reject) {
    // This API will return a promise after 1 second
    setTimeout(() => {
        resolve("p3 is successful");
    }, 1000)
});

Promise.all([p1, p2, p3]).then(function(res){
    console.log(res); // this is a case of success and output will be ['p1 is successful', 'p1 is successful', 'p1 is successful'] after 5 seconds
})

// Failure case of Promise.all

const p1 = new Promise(function(resolve, reject) {
    // This API will return a promise after 5 seconds
    setTimeout(() => {
        resolve("p1 is successful");
    }, 5000)
});

const p2 = new Promise(function(resolve, reject) {
    // This API will return a promise after 3 second
    setTimeout(() => {
        reject("p2 is not successful");
    }, 3000)
});

const p3 = new Promise(function(resolve, reject) {
    // This API will return a promise after 1 second
    setTimeout(() => {
        resolve("p3 is successful");
    }, 1000)
});

Promise.all([p1, p2, p3]).then(function(res){
    console.log(res);
}).catch(function(err) {
    console.error(err); // this is a case of failure and output will be "p2 is not successful" after 3 seconds
})


// Live example of Promise.allSettled()

const p1 = new Promise(function(resolve, reject) {
// This API will return a promise after 5 seconds
setTimeout(() => {
    resolve("p1 is successful");
}, 5000)
});

const p2 = new Promise(function(resolve, reject) {
// This API will return a promise after 3 second
setTimeout(() => {
    reject("p2 is not successful");
}, 3000)
});

const p3 = new Promise(function(resolve, reject) {
// This API will return a promise after 1 second
setTimeout(() => {
    resolve("p3 is successful");
}, 1000)
});

/**   
 * This API will wait for all promises to get settled weather any of them is successful or failure, it will collect the data and it will send an array of objects as response so the output will be:
0: {status: 'fulfilled', value: 'p1 is successful'}
1: {status: 'rejected', reason: 'p2 is not successful'}
2: {status: 'fulfilled', value: 'p3 is successful'}

This is the safest option among all the Promise API's
*/
Promise.allSettled([p1, p2, p3]).then(function(res){
    console.log(res);
}).catch(function(err) {
    console.error(err);
})

// Live example of Promise.race()

const p1 = new Promise(function(resolve, reject) {
// This API will return a promise after 5 seconds
setTimeout(() => {
    resolve("p1 is successful");
}, 5000)
});

const p2 = new Promise(function(resolve, reject) {
// This API will return a promise after 3 second
setTimeout(() => {
    reject("p2 is not successful");
}, 3000)
});

const p3 = new Promise(function(resolve, reject) {
// This API will return a promise after 1 second
setTimeout(() => {
    resolve("p3 is successful");
}, 1000)
});
    
// This API will wait for first setlled promise weather it is success or failure, it will give you the response of first settled promise. in this case output will be "p3 is successful" becuse it gives us result after 1 second if it was failed we will receive error then.
Promise.race([p1, p2, p3]).then(function(res){
    console.log(res); 
}).catch(function(err) {
    console.error(err);
})

// Live example of Promise.any()

const p1 = new Promise(function(resolve, reject) {
// This API will return a promise after 5 seconds
setTimeout(() => {
    reject("p1 is successful");
}, 5000)
});

const p2 = new Promise(function(resolve, reject) {
// This API will return a promise after 3 second
setTimeout(() => {
    resolve("p2 is successful");
    //reject("p2 is successful");
}, 3000)
});

const p3 = new Promise(function(resolve, reject) {
// This API will return a promise after 1 second
setTimeout(() => {
    reject("p3 is successful");
}, 1000)
});
    
// In this case: This API will wait for first settled Success Promise and give a value in response so output will be "p2 is successful" becuse p2 was resolved after 2 seconds, it will ignore the rejected promises.

Promise.any([p1, p2, p3]).then(function(res){
    console.log(res); 
}).catch(function(err) {
    console.error(err); // in case all API are failed then it will collect the data and return a aggregate error so the response would look like "AggregateError: All promises were rejected" try commenting out the resolve statment of p2 and uncomment reject statement.

    //to get an array of error we should catch an err object which is like
    console.log(err.errors);
// })

// ==========================================================

// "use strict";

/** "this" keyword in javascript
 * this keyword behave differently according to global scope, function scope, strict and non strict mode.
 */

// this keyword in global scope
console.log(this) // this statement will point to globalObject, globalObject can be different according to JRE. in our case it will be window.

// this keyword in function scope
function thiskeyword() {
    console.log(this) // now its value will be globalObject in case of non-strict mode, but if we use strict mode, the value will be undefined.
}

thiskeyword(); // the value of this keyword is also depends on how the function is called. in strict mode the value will be undefined and in non-strict mode the value will be globalObject
window.thiskeyword(); // in strict mode if we attach a reference with function then its value will be that refernce in this case we attached a globalObject then its value will be window.

// this in non-strict mode - (this substitution)
// if the value of this keyword is undefined or null, this keyword will be replaced by globalObject in case of non-strict mode.


// this inside object's method.
const obj = {
    a: 100,
    b: "now",
    c: function () { // what is method? if we declare a function as a part of an object it is known as method.
        console.log(this); // in case of this, this value will represent the object, inside a method this value becomes the object value.
    }
}

obj.c();

// call() apply() bind() (sharing methods) - this value can be modified by using these methods. each and every method in javascript has access to these special methods 

let student = {
    name: "Zain",
    printName: function (arg1, arg2) {
        console.log(`${this.name} ${arg1} ${arg2}`);
    }
}

let student2 = {
    name: "Affan"
}

// this is called function borrowing. here we are using call() method with student object. we use this call method when we want this keyword to point where we want. The first argument of call will be the refrence to this variable where we want this to point and after that there will be function arguments if any.
student.printName.call(student2, "arg1", "arg2"); // by using call method, we are sharing student's object printName method and sharing it with student2 so this keyword will now point to student2 object.

// in apply method here a only difference is passing other arguments, in call we pass arguments separately but in apply we will provide a list of arguments
student.printName.apply(student2, ["argss", "argsss"]);

// bind method is exactly the same as call method, in case of bind it will make a copy of that function which can be invoked later rather than invoking directly;
const copyoffunc = student.printName.bind(student2, ["argss", "argsss"]);
copyoffunc();


// this inside arrow functions: arrow function does not come along with their own this keyword binding by default. in arrow function this retains the value of enclosing lexicle context or you can see how that arrow function written in code.
let arrowObj = {
    a: 10,
    y: () => {
        console.log(this) // here this arrow function inside an object and that object is lexically inside the global space so the value of this will be window.
    }
}

// this keyword inside a nested arrow function

let nestedArrowObj = {
    a: 20,
    z: function () {
        // enclosing lexical context.
        const v = () => {
            console.log(this) // So here this arrow function is lexically sitting inside a method which belongs to an object. so this variable will point to the nestedArrowObj.
        }
        v();
    }
}
