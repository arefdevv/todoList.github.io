const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
// event listener

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event) {
    // this prevents the button from submitting
    event.preventDefault();
    console.log("hellooo");

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Completed button

    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = "<i class='fa-solid fa-check'></i>";
    completedBtn.classList.add("completed-btn");
    todoDiv.appendChild(completedBtn);

    // delete button

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "<i class='fas fa-trash'></i>";
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);

    // appendinf to the list
    todoList.appendChild(todoDiv);

    // clearing the todo inout value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.classList.add("delete");
        todo.addEventListener("transitionend", function () {
            todo.remove();
        });
    }

    if (item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON > parse(localStorage.getItem("todos"));
    }
}
