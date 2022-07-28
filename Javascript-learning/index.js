// how js works

// first the code is Compiled
//  then the code is executed

// Compilations Phase
// 1. Tokenizing/lexing - code is split into small tokens
// 2. parsing - Abstract Syntax tree(ast) is developed using tokens
// 3. Code generation

// Why the code is to be compile??
//  -- to do early error checking
//  -- to determine appropriate scope for all the variables

// console.log(this);
// console.log(window);
// console.log(firstname);
// var firstname = "Maha";

// how the JS execute the code ??
// Global execution context which is created on a stack => 1. creation phase, 2. code execution phase
//creation phase =>
//      window() object or Global object is created 
//      creates varable and assigns it to undefined (when declared using var-keyword)
//      sets this ---> to window() object
// execution phase =>
//      JS is a synchronous programming language --> lines of codes are executed line by line
//      to execute code in JS, an execution context is created, which is called as Global execution context

//JS is a lexical script language. 

// Hoisting
//  => this is possible because of creating the global execution context 
//      where the variable declared with var keyword is 
//      stored in the global memory even before execution

// console.log(this);
// console.log(window);
// console.log(myFunction);
// console.log(fullName);

// function myFunction(){
//     console.log("this is my function");
// }

// var firstName = "maha";
// var lastName = "Shri";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// Function Expression

// console.log(myFunction); // undefined - Hoisting

// var myFunction = function(){
//     console.log("this is my function")
// }

// console.log(myFunction); //function

// what happens in case of "let" and "const"

// in case of let and const variables, these are uninitialized but var variable are initialized to undefined in the Global memory while creating Global Exceuting context
// Hoisting happens even in case of let and const but because they are not uninitailze we get the error as : trying to access variable before initialization

//  Temporal dead Zone - TDZ - until a variable is initialized, it is in TDZ 

// Function execution context 
// --> pushed to call stack
// --> local memory creaction
//      ---> has an arrya like object called - argumnets
//      ---> local variable initialization
// --> code execution
//      ---> line by line code execution


// Scope chaining 
// JS always follows lexical scope

// closures

// ----> functions can return functions
// ----> when function returns a function it will be returned 
//        along with the local variable values of the returning functions
//          this is known as closures

// closures example1:
// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();

// closures example2:

// function myfunction(power){
//     return function(number){
//         return number ** power;
//     }
// }

// const square = myfunction(2);
// const ans = square(3);
// console.log(ans);

// closures example3:

function func(){
    let counter = 0;
    return function(){
        if(counter<1){
            console.log("Hi, you called me");
            counter++;
        }else{
            console.log("Mai already call ho chuka hun!!!");
        }
    }
}

const myfunc = func();
myfunc();
myfunc();

// Four Different ways of linking JS file to HTML
// 1. script tag inside head tag ---> chances of getting error is more
// 2. script tag inside body tag at the end ---> better option
// 3. script tag with async inside head tag ---> chances of getting error
// 4. script tag with defer inside head tag ---> most efficient and best way