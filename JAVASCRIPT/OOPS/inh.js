class Parent{
    m1()
    {
        console.log("inside parent m1 is the method");
    }
}
class Child extends Parent{
    m2()
    {
        console.log("inside child m2 is the method");
    }
}
class SubChild extends Child
{
    m3()
    {
        console.log("inside subchild m3 is the method");
    }
}

var sc=new SubChild();
sc.m3();
sc.m2();
sc.m1();

var c=new SubChild();
c.m2();
c.m1();

var p=new Parent();
p.m1();