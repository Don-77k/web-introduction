var btn = document.querySelector("button");
var obj = document.querySelector("div");
var i = 1;

function fadeout(){
    obj.style.opacity = i;
    i -= 0.05;
    btn.disabled = true;
    if(i > 0){
        setTimeout(fadeout , 100);
    }else if(i < 0){
        btn.innerHTML = "淡入";
        btn.disabled = false;
        btn.addEventListener('click',fadein);
    }
}

function fadein(){
    obj.style.opacity = i;
  i += 0.05;
    btn.disabled = true;
    if(i < 1){
        setTimeout(fadein, 100)
    }else if(i >= 1){
        btn.innerHTML = "淡出";
        btn.disabled = false;
        btn.addEventListener('click',fadeout);
    }
}
btn.addEventListener("click", fadeout);