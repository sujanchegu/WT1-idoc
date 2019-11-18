function redirect () {
    window.location.href = 'index.html';
}
var btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click",redirect,false);