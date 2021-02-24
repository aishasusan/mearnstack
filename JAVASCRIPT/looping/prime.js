var num=17;
var j=0;
for(var i=2;i<num;i++)
{
    if (num%i==0)
    {
     j=1;
     break;
    }    
}
if(j==0)
{
    console.log("number is prime");
}
else{
    console.log("number is not prime");
}