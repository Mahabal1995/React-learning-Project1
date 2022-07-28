// const todoSection = document.querySelector(".section-todo");
// console.log(todoSection.classList);

// add() -> adding a class defined in css file to DOM

// todoSection.classList.add('bg-dark');

// remove() -> removing a class defined in css file from DOM

// todoSection.classList.remove('bg-dark');

// contains() -> to check whether a class is present

// todoSection.classList.contains('bg-dark');

// toggle() -> if the class is present - it removes, and if class is not present it adds

// todoSection.classList.toggle('bg-dark');

// Add new HTML elements to page

// innerHtml to add html element

// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);

// Overrides the innerHTML already present
// todoList.innerHTML = "<li> New Todo </li>" 

// Concates the new HTML element to preexisting innerHTML elements
// this type of concatenating every time in not efficient
// so to add HTML elemnts to DOM, better don't use innerHTML
// innerHTML is a better option to replace HTML elements
// todoList.innerHTML += "<li> New Todo </li>";

// Use document.createElement() to add/append/prepend/remove

// const newTodoItem = document.createElement("li");

// const newTodoItemText = document.createTextNode("Learn Java Script");
// newTodoItem.append(newTodoItemText);
// or
// newTodoItem.textContent = "Learn Python";

// const todoList = document.querySelector(".todo-list");

// append is newer version but appenChild is a bit older 
// append doesn't work in internet explorer

// add item at the end
// todoList.append(newTodoItem);

// add item at the beginning
// todoList.prepend(newTodoItem);

// remove item

// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();


// Insert items after/before
// same as above

// Same thing can be achieved with :
// element.insertAdjacentHTML(where, html)
// beforebegin == before
// afterbegin == prepend
// beforeend == append
// afterend == after

// const totdoList = document.querySelector(".todo-list");
// totdoList.insertAdjacentHTML("beforeend", "<li>Learn Python</li>");


//  cloning nodes

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new TODO";

// const li2 = li.cloneNode(true); // true = deep-clone
// ul.append(li);
// ul.prepend(li2);

// old methods to support Internet Explorer

// appendChild ==append
// insertBefore(element, referenceNode) == prepend
// replaceChild(ele1 ->with, ele2)
// removeChild == remove


//  static list vs live list

// querySelectorAll() alwasys returns static list
// getElementsBy...() always returnd live list  

// const listItems = document.querySelectorAll(".todo-list li");

// const ul = document.querySelector(".todo-list");

// const listItems = ul.getElementsByTagName("li");

// console.log(listItems);
// const sixthLi = document.createElement("li");
// sixthLi.textContent = "item 6";
// ul.append(sixthLi);
// console.log(listItems);



// How to get the dimensions of an element

// const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientReact();
// const height = sectionTodo.getBoundingClientReact().height;

// console.log(info);