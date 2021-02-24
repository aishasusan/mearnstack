//inorder to pass the same value to all object we can declare static variable inorder to reduce the memory wastage 
//this is done with the help of a keyword static
//to print static variable we use classname.static_variable_name
//outside or inside the class we access static variable with class name

class Student {



    constructor(roll, name, course) {
        this.roll = roll;
        this.name = name;
        this.course = course;
    }
    static getCollege() {
        return "vidhya";
    }
    printStudent() {
        console.log(this.roll);
        console.log(this.name);
        console.log(this.course);
        console.log(Student.getCollege());
    }
}

var s = new Student(1, "Messi", "btech");
s.printStudent();

var s1 = new Student(2, "cr7", "barch");
s1.printStudent();

console.log(Student.getCollege());