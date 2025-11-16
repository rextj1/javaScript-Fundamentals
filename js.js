// Simple To-Do List Application
// Initialize task list from local storage
let getTaskeList = JSON.parse(localStorage.getItem("tasks")) || [];

let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// Add task on button click
getTaskeList.forEach(task => {
    let li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
});

addTaskBtn.addEventListener("click", () => {
    let task = taskInput.value.trim()

    if (task === "") return;
    let li = document.createElement("li");
    li.textContent = task;
    getTaskeList.push(task)
    localStorage.setItem("tasks", JSON.stringify(getTaskeList));
    

    // Remove task on click

    li.addEventListener("click", () => {
        taskList.removeChild(li);
        getTaskeList = getTaskeList.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(getTaskeList));
        
    });


    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
    localStorage.setItem("tasks", JSON.stringify(getTaskeList));
})

