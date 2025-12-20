// This module simply wraps StudentDB for demonstration of separating API layer.
// It is optional; main.js below uses StudentDB directly but this shows pattern.

import StudentDB from "./StudentDB.js";
const db = new StudentDB();

export async function fetchStudents() {
  return db.getAll();
}

export async function createStudent(s) {
  return db.add(s);
}

export async function modifyStudent(id, data) {
  return db.update(id, data);
}

export async function deleteStudent(id) {
  return db.remove(id);
}
