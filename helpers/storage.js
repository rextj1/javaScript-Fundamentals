// get all tasks
export function getTasks() {
   const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

// export function getTask() {
//    let tasks  = JSON.parse(localStorage.getItem('tasks')) || [];
// }

// save tasks
export function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}