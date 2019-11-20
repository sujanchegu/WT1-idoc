var sub = document.getElementById("submit");
sub.addEventListener("click", submitfunc, false);

var uid = document.getElementById("uid");
uid.onblur = worker;


var logstat = document.getElementById("logstat");
var result;

function worker(e) {
    result = new Worker("Scripts/check.js");
    result.postMessage(uid.value);
    result.onmessage = function (event) {
        logstat.innerHTML = event.data;
    }
}

function submitfunc(e) {


    //call to database

    // if (true) //correct login crednetials
    // {
    //     localStorage.setItem("uid", username);
    //     // userclass = 1 for old students
    //     // userclass = 2 for new candidates
    //     localStorage.setItem("uclass",1);  
    //     logstat.innerHTML = "Access Granted";
    //     // window.location.href = "../eslaunch.html"
    // }
    // else {
    //     if (1) //invalid email itself
    //     {
    //         logstat.innerHTML = "Username doesn't exist"
    //     }
    //     else // invalid credentials 
    //     {
    //         logstat.innerHTML = "Username and Password Mismatch"
    //     }
    // }
}