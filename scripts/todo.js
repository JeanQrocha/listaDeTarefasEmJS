document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener('click', addTodo);

    document.addEventListener('keypress', (event) => {
        console.log(event.key)
        if (event.key == 'Enter') {
            addTodo();
        }
    });

    function addTodo() {


        const texto = todoInput.value.trim();

        if (texto !== '') {
            const li = document.createElement("li");
            const div = document.createElement("div");
            div.textContent = texto;

            const buttons = document.createElement("div");
            buttons.className = "buttons";

    
            const editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.className = "delete-button";
            editButton.addEventListener('click', () => {
                const novoTexto = prompt("Digite o novo texto:", div.textContent);
                if (novoTexto !== "") {
                    div.textContent = novoTexto;
                }
            });

            const deleteButton = document.createElement("button")
            deleteButton.textContent = "Deletar"
            deleteButton.className = "delete-button"
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(li)
            });
            buttons.appendChild(editButton);
            buttons.appendChild(deleteButton);

            li.appendChild(div);
            li.appendChild(buttons);
            todoList.appendChild(li);

            todoInput.value = '';
            todoInput.focus();


        }

    }
});