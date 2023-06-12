var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.left = "0";
}

function hideMenu() {
  navLinks.style.left = "-200px";
}

function focusToSearchBox() {
  const searchBox = document.getElementById("search-box");
  searchBox.focus();
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



