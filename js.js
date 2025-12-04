// Get elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Load from localStorage or start empty
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render all saved tasks on load
tasks.forEach(task => renderTask(task));

// Add new task
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  const task = { text, completed: false };
  tasks.push(task);
  saveTasks();
  renderTask(task);
  taskInput.value = "";
});

// Render task item
function renderTask(task) {
  const li = document.createElement("li");
  li.textContent = task.text;
  if (task.completed) li.classList.add("completed");

  // Toggle completion
  li.addEventListener("click", () => {
    task.completed = !task.completed;
    li.classList.toggle("completed");
    saveTasks();
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.classList.add("delete-btn");
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggle
    li.remove();
    tasks = tasks.filter(t => t !== task);
    saveTasks();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
}

// Save to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
