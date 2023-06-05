 // JavaScript untuk menangani klik pada tampilan profile
 function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    dropdownContent.classList.toggle("show");
  }

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