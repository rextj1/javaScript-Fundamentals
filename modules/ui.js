// UI helpers: create student card, update filter select, show messages, etc.
export function createStudentCard(student) {
  const root = document.createElement("div");
  root.className = "student-card";
  root.dataset.id = student.id;

  const left = document.createElement("div");
  left.className = "student-left";

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = student.name.split(" ").map(s => s[0] || "").slice(0,2).join("").toUpperCase();

  const meta = document.createElement("div");
  meta.className = "student-meta";
  const name = document.createElement("div");
  name.className = "name";
  name.textContent = student.name;
  const course = document.createElement("div");
  course.className = "course";
  course.textContent = student.course;

  meta.appendChild(name);
  meta.appendChild(course);
  left.appendChild(avatar);
  left.appendChild(meta);

  const actions = document.createElement("div");
  actions.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.className = "icon-btn edit";
  editBtn.title = "Edit";
  editBtn.dataset.action = "edit";
  editBtn.textContent = "✏️";

  const delBtn = document.createElement("button");
  delBtn.className = "icon-btn delete";
  delBtn.title = "Delete";
  delBtn.dataset.action = "delete";
  delBtn.textContent = "🗑";

  actions.appendChild(editBtn);
  actions.appendChild(delBtn);

  root.appendChild(left);
  root.appendChild(actions);

  return root;
}

export function populateCourseFilter(container, students) {
  // collect unique course names
  const courses = Array.from(new Set(students.map(s => s.course).filter(Boolean)));
  // clear
  container.innerHTML = "";
  const all = document.createElement("option");
  all.value = "";
  all.textContent = "All courses";
  container.appendChild(all);
  courses.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    container.appendChild(opt);
  });
}

export function showMessage(el, msg, type = "info", timeout = 2500) {
  el.textContent = msg;
  el.classList.remove("error","info");
  el.classList.add(type === "error" ? "error" : "info");
  if (timeout) {
    setTimeout(() => {
      if (el.textContent === msg) el.textContent = "";
    }, timeout);
  }
}
