import { getTasks, saveTasks } from "./storage.js";

export async function addTask(task) {
  const tasks = await getTasks();
  tasks.push({ id: Date.now(), text: task });
  await saveTasks(tasks);
}

export async function deleteTask(id) {
  let tasks = await getTasks();
  tasks = tasks.filter(task => task.id !== id);
  await saveTasks(tasks);
}

export async function getAllTasks() {
  return await getTasks();
}
