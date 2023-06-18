// HAMBURGER NAVBAR 
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.left = "0";
}

function hideMenu() {
  navLinks.style.left = "-200px";
}

//Tekan Cari Sekarang Langsung ke Search Bar
function focusToSearchBox() {
  const searchBox = document.getElementById("search-box");
  searchBox.focus();
}

// Pop Up Logout
var openBtn = document.getElementById('btnlogout');
var closeBtn = document.getElementById('cancel');
var closeBtn2 = document.getElementById('tidak');
var popup2 = document.getElementById('popup2');

openBtn.addEventListener('click', function () {
  popup2.style.display = 'flex';
});

closeBtn.addEventListener('click', function () {
  popup2.style.display = 'none';
});

// $ = function (id) {
//   return document.getElementById(id);
// }

// var show = function (id) {
//   $(id).style.display = 'flex';
// }
// var hide = function (id) {
//   $(id).style.display = 'none';
// }

// window.addEventListener('click', function(event) {
//   var popup = document.getElementById('popup2');
//   if (event.target == popup) {
//       hide('popup2');
//   }
// });


