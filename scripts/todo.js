document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener('click', addTodo);

    document.addEventListener('keypress', (event) => {
        console.log(Event.key)
        if (event.key == 'Enter') {
            addTodo();
        }
    });

    function addTodo() {


        const texto = todoInput.value.trim();

        if (texto !== '') {
            const li = document.createElement("li");
            li.textContent = texto

            const deleteButton = document.createElement("button")
            deleteButton.textContent = "Deletar"
            deleteButton.className = "delete-button"
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li)
            });

            // const editButton = document.createElement("button")
            // editButtonButton.textContent = "Editar"
            // editButton.className = "edit-button"
            // editButtonButton.addEventListener('click', () => {

            // });

            li.appendChild(deleteButton)
            todoList.appendChild(li);
            todoInput.value = '';
            todoInput.focus();


        }

    }
});