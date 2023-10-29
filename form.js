var ptrn_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
var ptrn_rating = /^[0-9]{1,2}/;
var inp_email = document.getElementById("email");
var inp_com = document.getElementById("com");
var inp_rate = document.getElementById("rate");
document.getElementsByTagName("form")[0].addEventListener('submit', validate);
function validate() {
    if (inp_email.value.length == "" || inp_email == undefined) {
        alert("Email must not be blank");
        inp_email.focus();
    } else 
    if (!ptrn_email.test(inp_email.value)) {
        alert("Email is out of format!");
        inp_email.value = "";
        inp_email.focus();
    } else
    if (inp_com.value.length < 1) {
        alert("Comment must not be blank!");
        inp_com.focus();
    } else 
    if (inp_rate.value.length < 1) {
        alert("Rating mmust not be blank!");
        inp_rate.focus();
    } else 
    if (!ptrn_rating.test(inp_rate.value)) {
        alert("Rating is not number!");
        inp_rate.value = "";
        inp_rate.focus();
    } else {
        alert("Send success!");
    }
}