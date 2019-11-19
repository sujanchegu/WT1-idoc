let a = 0;
var id;
var id2;
var b = 0;
function cong() {
    a = a + 5;
    var ele = document.getElementById("cong");
    ele.style.width = a + "px";
    if (a == 200) {
        window.clearInterval(id);
        id2 = window.setInterval(green, 30);
    }
}
function green() {
    b += 0.08;
    var ele1 = document.getElementById("green");
    ele1.style.width = b + "%";
    if (b > 7.1) {
        window.clearInterval(id2);
        document.getElementById("content").innerHTML = "Registration Successful!";

    }
}
function fun() {
    id = window.setInterval(cong, 30);

}
fun();