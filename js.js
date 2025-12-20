import { getAllTasks, addTasks, completedTaskButton, deleteTask } from './helpers/todo.js';

let taskInput = document.getElementById('taskInput');
let addTask = document.getElementById('addTask');
let taskList = document.getElementById('taskList');


// retreive tasks
let tasks = getAllTasks();
console.log(tasks);


function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {

        const li = document.createElement('li');
        li.textContent = task.text

        // mark completed task
        if (task.completedTask) {
            li.classList.add('completed');
        }

        // toggle pending task;
        const completedTaskBtn = document.createElement('button');
        completedTaskBtn.textContent = task.completedTask ? 'Done' : 'Pending';


        completedTaskBtn.addEventListener('click', () => {
            task.completedTask = !task.completedTask;
            li.classList.toggle('completed');
            completedTaskBtn.textContent = task.completedTask ? 'Done' : 'Pending';
            completedTaskButton(task);
            // refresh tasks
            tasks = getAllTasks();
            // re-render tasks
            renderTasks();

        })

        // delete task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';


        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            deleteTask(task)
            // refresh tasks
            tasks = getAllTasks();
            renderTasks();
        })
        taskList.appendChild(li);
        li.appendChild(completedTaskBtn);
        li.appendChild(deleteBtn);
    });


}

// add task List
addTask.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text === '') return;
    addTasks(text);
    // refresh tasks
    tasks = getAllTasks();
    renderTasks();
    // clear task
    taskInput.value = '';
})
// initial render
renderTasks();