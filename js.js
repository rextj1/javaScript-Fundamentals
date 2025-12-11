import { addTask, deleteTask, getAllTasks } from "./helpers/todo.js";

const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

async function renderTasks() {
  taskList.innerHTML = "";
  const tasks = await getAllTasks();
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = async () => {
      await deleteTask(task.id);
      renderTasks();
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

addBtn.onclick = async () => {
  const task = input.value.trim();
  if (!task) return;
  await addTask(task);
  input.value = "";
  renderTasks();
};

// Initial render
renderTasks();
