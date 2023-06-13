 // JavaScript untuk menangani klik pada tampilan profile
 function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
  }
// Mengambil data dari session storage
var username = sessionStorage.getItem("username");
var major = sessionStorage.getItem("major");

// Mengubah isi elemen dengan ID "name" dan "major"
document.getElementById("name").textContent = username;
document.getElementById("major").textContent = major;

  // Menutup dropdown saat pengguna mengklik di luar dropdown
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown img')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

