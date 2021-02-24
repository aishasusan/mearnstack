var n=153;
var rem=0;
var temp=0;
var sum=0;
temp=n;
while(temp!=0)
{
    rem=temp%10;
    sum=sum+rem*rem*rem;
    temp=Math.floor(temp/10);
}

if(sum==n)
{
    console.log("the number is amstrong");
}
else{
    console.log("the number is not amstrong");
}
