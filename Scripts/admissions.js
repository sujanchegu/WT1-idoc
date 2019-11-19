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