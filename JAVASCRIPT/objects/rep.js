var pattern="abbcaaac";

var dict={}



for(let ch of pattern)
{
    if(ch in dict)
    {
        console.log("recursive is "+ch);
        break;
    }
    else{
        dict[ch]=1;
    }
    
}

