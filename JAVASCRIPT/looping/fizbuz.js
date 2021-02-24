//fizz buzz  fizbuz prob

//0 to 50
//fiz n%3
//buzz n%5
//fizzbuzz n%15

var i=1;
while(i<=50)
{
    if(i%15==0)
    {
        console.log(i+" fizzbuzz");
    }
    else if(i%5==0)
    {
        console.log(i+" buzz");
    }
    else if(i%3==0)
    {
        console.log(i+" fizz");
    }
    else
    {
        console.log(i+" neither ");
    }
    i++;
}