// NAVBAR UNTUK RESPONSIVE 
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.left = "0";
}

function hideMenu() {
    navLinks.style.left = "-200px";
}

// Pop up kalau tekan tombol terima atau tolak
// var openBtn = document.getElementById('logout');
// var closeBtn = document.getElementById('cancel');
// var closeBtn2 = document.getElementById('tidak');
// var popup2 = document.getElementById('popup2');

// openBtn.addEventListener('click', function() {
//   popup2.style.display = 'flex';
// });

// closeBtn.addEventListener('click', function() {
//   popup2.style.display = 'none';
// });

// window.addEventListener('click', function (event) {
//     var popup = document.getElementById('popup');
//     if (event.target == popup) {
//         hide('popup');
//     }
// });

// Pop up untuk logout 
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

closeBtn2.addEventListener('click', function () {
    popup2.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === popup2) {
      popup2.style.display = 'none';
    }
  });

  
// // Pop up terima atau tolak admin 
// var tolak = document.getElementById('tolak');
// var terima = document.getElementById('acc');
// var popup = document.getElementById('popup');

// tolak.addEventListener('click', function () {
//     popup.style.display = 'flex';
// });

// terima.addEventListener('click', function () {
//     popup.style.display = 'flex';
// });

// window.addEventListener('click', function (event) {
//     if (event.target === popup) {
//       popup.style.display = 'none';
//     }
//   });
