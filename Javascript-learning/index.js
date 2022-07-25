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

console.log(this);
console.log(window);
console.log(firstname);
var firstname = "Maha";

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

console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "maha";
var lastName = "Shri";
var fullName = firstName + " " + lastName;
console.log(fullName);