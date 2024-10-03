export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof(name) !== "string") { throw new TypeError(`TypeError: Name must be a string`); }
    if (typeof(length) !== "number") { throw new TypeError(`TypeError: Length must be a number`); }
    if (typeof(students) !== "object") { throw new TypeError(`TypeError: Students must be a object`); }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof(name) !== "string") { throw new TypeError(`TypeError: Name must be a string`); }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof(length) !== "number") { throw new TypeError(`TypeError: Length must be a number`); }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (typeof(students) !== "object") { throw new TypeError(`TypeError: Students must be a object`); }
    this._students = students;
  }
}
