var n1 = 50;
var n2 = 50;
var n3 = 50;
var temp = 0;
if((n1 > n2)&(n1 > n3))//n1
{
    console.log(n1);
    if (n2 > n3) {
        console.log(n2);
        console.log(n3);
    }
    else {
        console.log(n3);
        console.log(n2);
    }

}
else if ((n2 > n1) & (n2 > n3))//n2
{
    console.log(n2);

    if (n1 > n3) {
        console.log(n1);
        console.log(n3);
    }
    else {
        console.log(n3);
        console.log(n1);
    }

}
else if ((n3 > n1) & (n3 > n2))//n3
{
    console.log(n3);
    if (n2 > n1) {
        console.log(n2);
        console.log(n1);
    }
    else {
        console.log(n1);
        console.log(n2);
    }

}
else {
    console.log("*** the numbers are equal***");
}
