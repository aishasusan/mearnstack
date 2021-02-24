class Person{
    constructor(name,age,gender)
    {
        this.name=name;//this.variable_name instance variable accessed with objects
        this.age=age;
        this.gender=gender;
    }
    printPerson()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
    }
}
var obj = new Person("ash",22,"male");//obj in m/y with all class instances and methods
obj.printPerson();