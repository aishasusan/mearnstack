class Parent {
    phone(num1,num2) {
        console.log("dada have a nokia 5.1 plus"+num1);
    }
}

class Child extends Parent{
    phone(num1,num2)
    {
        super.phone(num1,num2);
        console.log("i bought an iphone"+num1);
    }
}
 
var obj=new Child();
obj.phone(3,2);