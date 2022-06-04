var btn_one = 0;
var btn_two = 0;
var btn_three = 0;
function incrementClick_btn1() {
    updateLikes1(++btn_one);
}
function incrementClick_btn2() {
    updateLikes2(++btn_two);
}
function incrementClick_btn3() {
    updateLikes3(++btn_three);
}
function updateLikes1(val) {
    var likes= document.querySelector("#likes");
    likes.innerText = val;
}
function updateLikes2(val) {
    var likes2= document.querySelector("#likes2");
    likes2.innerText = val;
}
function updateLikes3(val) {
    var likes3= document.querySelector("#likes3");
    likes3.innerText = val;
}