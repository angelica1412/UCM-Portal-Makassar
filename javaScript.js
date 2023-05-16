var inputPassword = document.getElementById("password");
var inputUsername = document.getElementById("username");

inputPassword.onchange = function (f) {
    if (inputPassword.value != '') {
        f.target.style.border = "2px solid #FF9800";
    } else if (inputPassword.value == ''){
        f.target.style.border = "1.5px solid #00000058";
    }
};

inputUsername.onchange = function (g) {
    if (inputUsername.value != '') {
        g.target.style.border = "2px solid #FF9800";
    } else if (inputUsername.value == ''){
        g.target.style.border = "1.5px solid #00000058";
    }
};