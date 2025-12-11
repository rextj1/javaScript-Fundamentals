export async function getTasks() {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
}

export async function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
