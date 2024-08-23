const todoForm = document.querySelector('.todo_form');
const todoInput = document.querySelector('.todo_input');
const todoList = document.querySelector('.todo_list');
const todoButton = document.querySelector('.todo_button');
const todoDeletButton = document.querySelector('.todo-delet');

const todos = [];

const savedTodos = JSON.parse(localStorage.getItem("todoList"));
if (savedTodos !== null) {
    todos.push(...savedTodos);

    const saveInHtml = todos.map((todo, index) => {
        return `<li class="todo" id="new-${index}">
              <h2 class="name-todo">${todo}</h2>
              <input type="checkbox" class="toggle-todo">
              <button class="todo-delet" data-index="${index}" type="button">Delete</button>
            </li>`;
    }).join("");

    todoList.innerHTML = saveInHtml;
}

todoButton.addEventListener("click", addTodo);

function addTodo() {

    const newTodo = todoInput.value;

    todos.push(newTodo);

    const todosInHtml = todos.map((todo, index) => {
        return `<li class="todo" id="new-${index}">
               <h2 class="name-todo">${todo}</h2>
              <input type="checkbox" class="togle-todo">
              <button class="todo-delet" data-index="${index}" type="button">Delet</button>
            </li>`;
    }).join("");

    localStorage.setItem("todoList", JSON.stringify(todos))

    todoList.innerHTML = todosInHtml;

    todoInput.value = "";
};

todoList.addEventListener("click", deleteTodo)

function deleteTodo(event) {
    const element = event.target;

    if (element.classList.contains('todo-delet')) {
        element.parentElement.remove();
        const index = element.getAttribute('data-index');
        todos.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(todos))
    }
}

todoList.addEventListener("change", toggleDone)

function toggleDone(event) {
    const element = event.target;

    if (element.parentElement.classList.contains("cheked")) {
        element.parentElement.classList.remove("cheked");
    } else {
        element.parentElement.classList.add("cheked");
    }
}