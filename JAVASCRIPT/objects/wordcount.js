var text="hai hai hey hello hello hai hey hey hai hello hey hey hey";

var words=text.split(" ");

var dict={}

for(let word of words)
{

    if(word in dict)
    {
        dict[word]+=1;
        
    }
    else{
        dict[word]=1;
    }
}

console.log(dict);

var elm=[];
for(let key in dict)
{
    elm.push([dict[key],key]);
}

elm.sort((o1,o2)=>o2[0]-o1[0]);
console.log(elm[0]);