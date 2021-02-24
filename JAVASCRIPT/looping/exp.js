//2=24(2+22)
//3=369(3+33+333)
//.....9=9
var num=2;

while(num<=9)
{
var i=1;
var res=0;
var s=0;
while(i<=num)
    {
        res=res*10+num*i;
        i++;
    }
    s=s+res;
    console.log(s);
    num++;
}   

