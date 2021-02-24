//method overloading 
//method over riding

// metod overloading defines that the same method is being called by changing the type or number of arguments, 
class Math{
    add(num)
    {
        console.log("single argument is passed");
    }
    add(num1,num2)
    {
        console.log("2 arguments are passed");
    }
    add(num1,num2,num3)
    {
        console.log("3 arguments are passed");
    }

}
var m=new Math();
m.add(10);
m.add(10,12);
m.add(11,12,13)
//recently implemented method only works in this case
