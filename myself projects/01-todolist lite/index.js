const inputValue = document.querySelector("#taskInput");
const addButton = document.querySelector("#inputButton")
const tasks = document.querySelector("#tasksText")



addButton.addEventListener("click", addDeleteTask)

function addDeleteTask () {
    if (inputValue.value === '') return ;

    const newTask = document.createElement('li');
    const deleteButton = document.createElement('button')

    deleteButton.textContent = 'delete'
    deleteButton.className = 'deleteBtn'

    deleteButton.addEventListener('click', () => {
        newTask.remove()
    });
    


    newTask.textContent = inputValue.value;
    newTask.className = 'task'
    newTask.appendChild(deleteButton)

    tasks.appendChild(newTask);
    inputValue.value = '';
    

}

