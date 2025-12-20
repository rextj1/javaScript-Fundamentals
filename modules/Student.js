export default class Student {
  constructor(id, name, course, addedAt = Date.now()) {
    this.id = id;
    this.name = name;
    this.course = course;
    this.addedAt = addedAt;
  }

  info() {
    return `${this.name} — ${this.course}`;
  }

  update({ name, course }) {
    if (name) this.name = name;
    if (course) this.course = course;
  }
}
