let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
    let task = taskInput.value.trim()

    if (task === "") return;
    let li = document.createElement("li");
    li.textContent = task;

    // Remove task on click
    li.addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    
    // Clear input field
    taskInput.value = "";
})

