var counterVal = 0;
function incrementClick() {
    updateLikes(++counterVal);
}
function updateLikes(val) {
    var likes_num = document.querySelector("#likes");
    likes_num.innerText = val;
}