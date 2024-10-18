const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');


function addTodo() {
    const task = todoInput.value.trim();
    if (task === '') return; 


    
    const taskText = document.createElement('span');
    taskText.textContent = task;

    const editButton = document.createElement('button');
    editButton.innerHTML = '&#9998;';
    editButton.classList.add('btn-edit');
    editButton.onclick = () => editTask(taskText);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&#128465;'; 
    deleteButton.onclick = () => deleteTask(li);

    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = ''; 
}


function deleteTask(taskElement) {
    taskElement.style.animation = 'slideOut 0.5s forwards';
    taskElement.addEventListener('animationend', () => {
        todoList.removeChild(taskElement);
    });
}


function editTask(taskText) {
    const newTask = prompt('Edit your task:', taskText.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskText.textContent = newTask.trim();
    }
}
