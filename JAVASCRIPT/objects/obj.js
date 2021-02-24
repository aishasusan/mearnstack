var emp={
    id:100,
    name:"Ash",
    des:"software associate",
    salary:40000
}
console.log(emp["name"]);
emp.salary+=1000;
console.log(emp.salary);

if("gen" in emp)
{
    console.log("key exists");

}
else
{
    emp["gen"]="f";
}