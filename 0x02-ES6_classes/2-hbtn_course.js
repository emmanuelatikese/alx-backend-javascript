const HolbertonCourse = class {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() { return this._name; }

  set name(val) {
    if (!(typeof val === 'string')) {
      throw new TypeError('Length must be a number');
    }
    this._name = val;
  }

  get length() { return this._length; }

  set length(val) {
    if (!(typeof val === 'number')) {
      throw new TypeError('Length must be a number');
    }
    this._length = val;
  }

  get students() { return this._students; }

  set students(val) {
    if (!(val.every((x) => typeof x === 'string'))) {
      throw new TypeError('Students must be number');
    }

    this._students = val;
  }
};

export default HolbertonCourse;
