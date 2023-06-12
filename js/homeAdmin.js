// HAMBURGER NAVBAR 
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.left = "0";
}

function hideMenu() {
  navLinks.style.left = "-200px";
}

// Untuk Semua Pop Up
$ = function (id) {
    return document.getElementById(id);
}

var show = function (id) {
    $(id).style.display = 'flex';
}
var hide = function (id) {
    $(id).style.display = 'none';
}

// Untuk kasih hilang pop up dengan cara tekan daerah bagian luar dari pop up
window.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
        hide('popup');
    }
});