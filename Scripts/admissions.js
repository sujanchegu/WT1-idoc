var scrollEventHandler = function()
{
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);

var regbox = document.getElementById("regbox");
regbox.addEventListener("click",redirect,false);

function redirect () {
  window.location.href = "form.html";
}

document.addEventListener("mouseleave",exitmodal,false);
var modal = document.getElementById("exit");

var exits = 0;

function exitmodal () {
  if(exits%3 ==  0)
  {
    modal.style.display = "block";
  }
  exits++;
}

var closebutton = document.getElementById("close");

closebutton.addEventListener("click",closemodal,false);

function closemodal () {
  modal.style.display = "none";
}