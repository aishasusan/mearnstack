//class:plan/blueprint/
//object
//reference

class Person{
    setPerson(name,age,gender)
    {
        this.name=name;//this.variable_name instance variable accessed with
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
var obj = new Person();//obj in m/y with all class instances and methods
obj.setPerson("ash",22,"male");
obj.printPerson();

var obj1 = new Person();
obj1.setPerson("annie",22,"female");
obj1.printPerson();
console.log(obj1.name);