class Parent{
    ride()
    {
        console.log("i have a car");
    }
}
class Child extends Parent{}

var ch=new Child();
ch.ride();

var ph=new Parent();
ph.ride();