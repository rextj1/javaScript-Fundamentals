import Student from "./modules/student.js";
import StudentDB from "./modules/StudentDB.js";
import * as UI from "./modules/ui.js";

const db = new StudentDB();

// DOM refs
const form = document.querySelector("#studentForm");
const nameInput = document.querySelector("#name");
const courseInput = document.querySelector("#course");
const studentsContainer = document.querySelector("#students");
const messageEl = document.querySelector("#message");

const searchInput = document.querySelector("#search");
const filterCourse = document.querySelector("#filterCourse");
const sortSelect = document.querySelector("#sortBy");
const darkToggle = document.querySelector("#darkToggle");
const saveBtn = document.querySelector("#saveBtn");
const cancelEditBtn = document.querySelector("#cancelEdit");

// state
let editingId = null;
let cache = []; // last loaded students

// load & render
async function loadAndRender() {
  try {
    cache = await db.getAll();
    renderList(cache);
    UI.populateCourseFilter(filterCourse, cache);
  } catch (err) {
    UI.showMessage(messageEl, "Failed loading students", "error");
    console.error(err);
  }
}

function applyFilters(list) {
  const q = searchInput.value.trim().toLowerCase();
  const course = filterCourse.value;
  let out = list;

  if (q) {
    out = out.filter(s => (s.name + " " + s.course).toLowerCase().includes(q));
  }
  if (course) {
    out = out.filter(s => s.course === course);
  }

  // sort
  const sort = sortSelect.value;
  if (sort === "added_desc") out.sort((a,b) => b.addedAt - a.addedAt);
  else if (sort === "added_asc") out.sort((a,b) => a.addedAt - b.addedAt);
  else if (sort === "name_asc") out.sort((a,b) => a.name.localeCompare(b.name));
  else if (sort === "name_desc") out.sort((a,b) => b.name.localeCompare(a.name));

  return out;
}

function renderList(list) {
  studentsContainer.innerHTML = "";
  const filtered = applyFilters(list);
  if (filtered.length === 0) {
    studentsContainer.textContent = "No students found.";
    return;
  }
  const frag = document.createDocumentFragment();
  filtered.forEach(s => {
    const card = UI.createStudentCard(s);
    frag.appendChild(card);
  });
  studentsContainer.appendChild(frag);
}

// event delegation for edit/delete
studentsContainer.addEventListener("click", async (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const action = btn.dataset.action;
  const card = btn.closest(".student-card");
  if (!card) return;
  const id = Number(card.dataset.id);

  if (action === "edit") {
    // populate form for editing
    const s = cache.find(x => x.id === id);
    if (!s) return;
    editingId = id;
    nameInput.value = s.name;
    courseInput.value = s.course;
    saveBtn.textContent = "Save";
    cancelEditBtn.classList.remove("hidden");
    window.scrollTo({top:0, behavior:"smooth"});
  } else if (action === "delete") {
    if (!confirm("Delete this student?")) return;
    try {
      await db.remove(id);
      UI.showMessage(messageEl, "Student deleted.");
      await loadAndRender();
    } catch (err) {
      UI.showMessage(messageEl, "Delete failed", "error");
      console.error(err);
    }
  }
});

// form submit => add or update
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const course = courseInput.value.trim();
  if (!name || !course) return UI.showMessage(messageEl, "Name and course required", "error");

  if (editingId) {
    // update
    try {
      await db.update(editingId, { name, course });
      UI.showMessage(messageEl, "Student updated.");
      editingId = null;
      saveBtn.textContent = "Add Student";
      cancelEditBtn.classList.add("hidden");
      form.reset();
      await loadAndRender();
    } catch (err) {
      UI.showMessage(messageEl, "Update failed", "error");
      console.error(err);
    }
  } else {
    // add
    const s = new Student(Date.now(), name, course);
    try {
      await db.add(s);
      UI.showMessage(messageEl, "Student added.");
      form.reset();
      await loadAndRender();
    } catch (err) {
      UI.showMessage(messageEl, "Add failed", "error");
      console.error(err);
    }
  }
});

// cancel edit
cancelEditBtn.addEventListener("click", () => {
  editingId = null;
  form.reset();
  saveBtn.textContent = "Add Student";
  cancelEditBtn.classList.add("hidden");
});

// live controls
[searchInput, filterCourse, sortSelect].forEach(el => {
  el.addEventListener("input", () => renderList(cache));
});

// dark mode
darkToggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
});

// initial
loadAndRender();
