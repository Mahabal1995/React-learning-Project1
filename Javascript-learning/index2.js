const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents refreshing the page after submitting the form
  const newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = 
    `<span class="text">${newTodoText}</span>
        <div class="todo-btns">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
        </div>`;
   newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
  todoInput.value = "";
});

todoList.addEventListener("click", (event) => {
    if(event.target.classList.contains("done")){
        const liSpan = event.target.parentNode.previousElementSibling;
        // for done btn - div is parent and its previous sibling element is a span where the needed text is present
        liSpan.style.textDecoration = "line-through";
    }

    if(event.target.classList.contains("remove")){
        const targetedLi = event.target.parentNode.parentNode;
        targetedLi.remove();
    }
})
