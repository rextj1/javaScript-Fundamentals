import { getTasks, saveTasks } from "./storage.js";
// add tasks
export function addTasks(text) {
    const tasks = getTasks();
    tasks.push({ id: Date.now(), text, completedTask: false });
    saveTasks(tasks);
}

// handle pending 
export function completedTaskButton(task) {
    let tasks = getTasks();
    tasks = tasks.map(t => t.id === task.id ? { ...t, completedTask: !t.completedTask } : t);
    saveTasks(tasks);
}

// delete task
export function deleteTask(task) {
    let tasks = getTasks();
    tasks = tasks.filter(t => t.id !== task.id);
    saveTasks(tasks);
}
// get all tasks
export function getAllTasks() {
    return getTasks();
}

