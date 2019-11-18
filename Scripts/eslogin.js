var sub = document.getElementById("submit");
// console.log(sub);
sub.addEventListener("click", submitfunc, false);

function submitfunc(e) {
    var username = document.getElementById("uid").value;
    var password = document.getElementById("upass").value;
    var logstat = document.getElementById("logstat");
    logstat.style.color = "red";
    logstat.style.fontSize = "1.2rem";
    logstat.style.textShadow = "1px 0px 1px black";
    //call to database

    if (true) //correct login crednetials
    {
        localStorage.setItem("uid", username);
        // userclass = 1 for old students
        // userclass = 2 for new candidates
        localStorage.setItem("uclass",1);  
        logstat.innerHTML = "Access Granted";
        // window.location.href = "../eslaunch.html"
    }
    else {
        if (1) //invalid email itself
        {
            logstat.innerHTML = "Username doesn't exist"
        }
        else // invalid credentials 
        {
            logstat.innerHTML = "Username and Password Mismatch"
        }
    }
}