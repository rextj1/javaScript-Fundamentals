// StudentDB: async fake DB + localStorage persistence
const STORAGE_KEY = "students_v2";

export default class StudentDB {
  constructor() {
    this.students = this._load();
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      console.error("Failed reading storage", err);
      return [];
    }
  }

  _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.students));
    } catch (err) {
      console.error("Failed saving storage", err);
    }
  }

  // simulate latency, and possible occasional failure (for error handling)
  _simulate(result, delay = 300, failRate = 0.0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < failRate) reject(new Error("Simulated server error"));
        else resolve(result);
      }, delay);
    });
  }

  async add(student) {
    this.students.push(student);
    this._save();
    return this._simulate("ok", 250);
  }

  async update(id, data) {
    const s = this.students.find(x => x.id === id);
    if (!s) throw new Error("Not found");
    s.name = data.name ?? s.name;
    s.course = data.course ?? s.course;
    this._save();
    return this._simulate("ok", 200);
  }

  async remove(id) {
    this.students = this.students.filter(s => s.id !== id);
    this._save();
    return this._simulate("ok", 200);
  }

  async getAll() {
    // return a shallow copy
    return this._simulate([...this.students.map(s => ({ ...s }))], 200);
  }
}
