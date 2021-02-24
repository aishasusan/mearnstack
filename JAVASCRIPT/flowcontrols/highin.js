var n1 = 20;
var n2 = 50;
var n3 = 30;
var temp1=0;
var temp2=0;
var temp3=0;
if ((n1 > n2) & (n1 > n3))//n1
{
    console.log(n1 + " is largest ");
    if (n2 > n3) {
        console.log(n2 + " is second largest");
    }
    else {
        console.log(n3 + " is second largest");
    }
}
else if ((n2 > n1) & (n2 > n3))//n2
{
   console.log(n2 + " is largest");
    if (n1 > n3) {
        console.log(n1 + " is second largest");
    }
    else {
        console.log(n3 + " is second largest");
    }
}
else if ((n3 > n1) & (n3 > n2))//n3
{
    console.log(n3 + " is largest");
    if (n2 > n1) {
        console.log(n2 + " is second largest");
    }
    else {
        console.log(n1 + " is second largest");
    }
}
else {
    console.log("equal");
}
