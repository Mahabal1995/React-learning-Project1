// DOM
// Document Object Model


// select element by getElementById("id")
// select element by querySelector("#id")

// change text
// textContent and innerText properties

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);
mainHeading.textContent = "THis is something";
console.log(mainHeading.textContent);

// use styles propety of document to change the styles of an element

// get and set attribute
// href, class, id, name are attributes
// use getAttribute() for getting attribute 
// use setAttribute() for setting the value for attribute

// get multiple elements using getElelments by class name
// get multiple elements using queryselector

// document.getElementsbyClassName("class-name"); // returns HTML-Collection
// document.querySelectorAll(".class-name"); // returns Node-list

// loop
// 
// simple for loop
// for of loop
// we cannot use for-each loop to iterate through HTMLCollections
// Array.from(HTMLCollection) convert HTMLCollections to array


// DOM Traversing

// const rootNode = document.getRootNode();
// console.log(rootNode.childNodes/parentNode/nextSibling/nextElementSibling);