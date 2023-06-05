let img = document.getElementById('img');
let input = document.getElementById('input');

input.onchange = (e) => {
    if (input.files[0])
        img.src = URL.createObjectURL(input.files[0])
};

function validateForm() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            inputs[i].classList.add('error');
        } else {
            inputs[i].classList.remove('error');
        }
    }
}

$ = function (id) {
    return document.getElementById(id);
}

var show = function (id) {
    $(id).style.display = 'flex';
}
var hide = function (id) {
    $(id).style.display = 'none';
}

window.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
        hide('popup');
    }
});