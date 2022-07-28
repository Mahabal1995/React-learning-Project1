// Events

// there are three methods to create an event

// 1. add onClick attribute to HTML Element
// 2. assign function to onclick property of the selected element in JS code

// const btn = document.querySelector(".btn-headline");
// console.dir(btn);
// btn.onclick = function(){
//     console.log("you clicked me !!!!!");
// }

// 3. addEventListener()

// const btn = document.querySelector(".btn-headline");
// function clickMe(){
//     console.log("you clicked me");
// };

// btn.addEventListener("click", clickMe);

// btn.addEventListener("click", function(){
//     console.log("you clicked me");
// });

// btn.addEventListener("click", () => {
//     console.log("you clicked me");
// });


// this keyword
const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function(){
//     console.log("you clicked me");
//     console.log("value of this: ", this);// value of this will be calling button
// });

btn.addEventListener("click", () => {
    console.log("you clicked me");
        console.log("value of this: ", this);// in the case of arrow function value of this will be window object
});



// Event Object

// Whenever an event occurs by calling addEventListner, browser returns an Event Object to the call back function as an argument
// two main properties of Event Object:
// currentTarget and Target


// Events behind the scenes

// JS engine, webAPI, call-stack, event-loop, call-back-queue    
