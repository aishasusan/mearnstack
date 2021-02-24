var n=829;
var rem=0;
var temp=0;
var r=0;
temp=n;
while(n!=0)
{
    rem=n%10;
    r=r*10+rem;
    n=Math.floor(n/10);
}

console.log("the reverse of the number is "+r);

