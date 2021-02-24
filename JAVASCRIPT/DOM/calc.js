function clearBox(){
document.querySelector("#inp").value="";
}

function dis(num){
    document.querySelector("#inp").value+=num;
}

function res(){
    let data=document.querySelector("#inp").value;
    let res=eval(data);
    document.querySelector("#inp").value=res;
}

function back(){
    let data=document.querySelector("#inp").value;
    let res=data.slice(0,-1)//to remove last element from string o:strt index, -1:end index
    document.querySelector("#inp").value=res;
}