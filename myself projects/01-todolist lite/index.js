const inputValue = document.querySelector("#taskInput");
const addButton = document.querySelector("#inputButton")
const tasks = document.querySelector("#tasksText")



addButton.addEventListener("click", ()=> {
    console.log(event.target);
    console.log(event.target.parentElement);
    addTask()
});
let taskCount = 0;



function addTask () {
    if (inputValue.value === ''){
        return
    } 
    
    const newTask = document.createElement('li');
    const deleteButton = document.createElement('button')

    deleteButton.textContent = 'X'
    deleteButton.className = 'deleteBtn'

    deleteButton.addEventListener('click', () => {
        newTask.remove();
        taskCount--;
        tasksCount.textContent = `Count: ${taskCount}`;
    });
    
    const completeButton = document.createElement('button');
    completeButton.textContent = '+';
    completeButton.className = 'completeBtn';

    completeButton.addEventListener('click', () => {
        newTask.className = ('complete')
    });


    newTask.textContent = inputValue.value;
    newTask.className = 'task'
    newTask.appendChild(deleteButton)
    newTask.appendChild(completeButton)

    tasks.appendChild(newTask);
    inputValue.value = '';
    taskCount++;
    tasksCount.textContent = `Count: ${taskCount}`
    const allTasks = document.querySelectorAll(".task");

    allTasks.forEach((task, index) => {
    console.log(`${index + 1}: ${task.textContent}`);
    });
    

}


    const count = document.querySelector('.count')
    const tasksCount = document.createElement('p');
    tasksCount.textContent = `Count: 0`
    

    count.appendChild(tasksCount)

