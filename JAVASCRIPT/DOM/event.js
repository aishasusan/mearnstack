 var ck = document.querySelector("#clk");
ck.addEventListener("click", () => {
    ck.textContent = "clicked";
    ck.style.color = "red";
})

var dbl = document.querySelector("#dbclk");
dbl.addEventListener("dblclick", () => {
    dbl.textContent = "double clicked";
    dbl.style.color = "blue";
})

var mh = document.querySelector("#over");
mh.addEventListener("mouseover", () => {
    mh.textContent = "mouse currently over me";
    mh.style.color = "violet";
})

var mh = document.querySelector("#over");
mh.addEventListener("mouseout", () => {
    mh.textContent = "mouse currently not over me";
    mh.style.color = "maroon";
})