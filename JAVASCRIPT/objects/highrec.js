var text="hey hai hai hai hai hai hey hai hey hai hey hey hey";

var words=text.split(" ");
console.log(words);
var flag=0;
var dict={};

for(let word of words)
{

    if(word in dict)
    {
        dict[word]+=1;
       if(dict[word]>flag)
       {
           flag=dict[word];
           var temp=word
       }        
    }
    else{
        dict[word]=1;
    }
}
console.log(dict);
console.log(temp+" "+flag);