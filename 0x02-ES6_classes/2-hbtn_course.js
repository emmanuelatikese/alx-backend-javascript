const HolbertonCourse = class{
    constructor(name, length, students){
        this.name = name;
        this.length = length;
        this.students = students;
    }
    get name(){return this._name}
    set name (val){
        this._name = typeof val === "string" ? val : new TypeError("Name must be String")
    }

    get length(){return this._length}
    set length(val){
        if ( !(typeof val === 'number')){
            throw new TypeError("Length must be a number")
        }
        this._name
    }

    get students(){ return this._students}
    set students(val){
        if (typeof students === Array){
            this._students = val.every(x => typeof x === "string") ? val : new TypeError("Students must have string elements")
        }
    }
}

export default HolbertonCourse;