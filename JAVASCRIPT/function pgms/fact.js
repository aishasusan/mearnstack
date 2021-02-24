function fact(n)
{
    var fact=1;
    for(i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    return fact;
}
var n1=5;
var f=fact(5);
console.log("The factorial of "+n1+" is "+f);