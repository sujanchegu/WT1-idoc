var option1 = document.getElementById("new");
var option2 = document.getElementById("old");
option1.addEventListener("click",newclick,false);
option2.addEventListener("click",existclick,false);


function newclick(e){
    window.location.href = "admissions.html"
}

function existclick(e){
    window.location.href = "eslaunch.html"
}