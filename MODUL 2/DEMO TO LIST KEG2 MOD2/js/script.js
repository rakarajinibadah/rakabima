document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    function addTodo() {
        const taskText = todoInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement('li');

            // Task text
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            // Edit button
            const editBtn = document.createElement('button');
            editBtn.textContent = "Edit";
            editBtn.classList.add('edit-btn');
            editBtn.onclick = () => editTask(taskSpan);

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = () => listItem.remove();

            // Append elements
            listItem.appendChild(taskSpan);
            listItem.appendChild(editBtn);
            listItem.appendChild(deleteBtn);
            todoList.appendChild(listItem);

            // Clear input
            todoInput.value = "";
        }
    }

    // Function to edit a task
    function editTask(taskSpan) {
        const newTask = prompt("Edit your task:", taskSpan.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            taskSpan.textContent = newTask;
        }
    }

    // Add task on button click
    addBtn.addEventListener('click', addTodo);

    // Add task on pressing Enter
    todoInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
