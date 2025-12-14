let taskInput = document.getElementById('taskInput');
let addTask = document.getElementById('addTask');
let taskList = document.getElementById('taskList');

// initialize items from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// retreive tasks

tasks.forEach(task => renderTasks(task));

// add task List

addTask.addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (text === '') return;
    const task = { id: Date.now(), text, completedTask: false }
    tasks.push(task);
    saveTasks();

    renderTasks(task);

    // clear task
    taskInput.value = '';
})


function renderTasks(task) {
    const li = document.createElement('li');
    li.textContent = task.text
    taskList.appendChild(li);

    // toggle pending task;
    const completedTaskBtn = document.createElement('button');
    completedTaskBtn.textContent = task.completedTask ? 'Done' : 'Pending';
    li.appendChild(completedTaskBtn);

    completedTaskBtn.addEventListener('click', () => {
        task.completedTask = !task.completedTask;
        li.classList.toggle('completed');
        completedTaskBtn.textContent = task.completedTask ? 'Done' : 'Pending';
        saveTasks()
    })

    // delete task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        tasks = tasks.filter(t => t.id !== task.id);
        saveTasks();
    })

}
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}