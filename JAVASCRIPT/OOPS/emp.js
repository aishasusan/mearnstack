class Emp{
    constructor(id,name,desig,sal){
        this.id=id;
        this.name=name;
        this.desig=desig;
        this.sal=sal;
    }
}

var obj1=new Emp (100,"aju","developer",25000)
var obj2=new Emp (101,"ashly","developer",28000)
var obj3=new Emp (102,"anu","testing",27000)
var obj4=new Emp (103,"athul","tetsing",27000)

var empl=[];
empl.push(obj1);
empl.push(obj2);
empl.push(obj3);
empl.push(obj4);

enames=empl.map(emp=>emp.name.toUpperCase());
console.log(enames);

//var dev=empl.filter(emp=>emp.desig=="developer").forEach(o=>console.log(o.name));

var max=empl.map(emp=>emp.sal).reduce((emp1,emp2)=>emp1>emp2?emp1:emp2);
console.log(max);

empl.sort((emp1,emp2)=>emp1.sal>emp2.sal?1:-1).forEach(emp=>console.log(emp));