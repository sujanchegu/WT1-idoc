var option1 = document.getElementById("new");
var option2 = document.getElementById("old");
option1.addEventListener("click",newclick,false);
option2.addEventListener("click",existclick,false);


function newclick(e){
    window.location.href = "#aboutus"
}

function existclick(e){
    window.location.href = "#aboutus"
}

var uniname = document.getElementById("uniname");
uniname.addEventListener("click",function() {
    window.location.href = "index.html";
},false)