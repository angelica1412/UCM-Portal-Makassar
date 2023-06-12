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

function getAcceptedForms() {
  var apiUrl = "http://localhost:4000/ucmportal/form/accepted"; // Ganti dengan URL API yang sesuai

  // Lakukan request AJAX ke API
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var acceptedForms = JSON.parse(xhr.responseText);

      // Panggil fungsi untuk memproses dan menampilkan form yang diterima
      processAcceptedForms(acceptedForms);
    }
  };
  xhr.send();
}

function processAcceptedForms(acceptedForms) {
  var latestContainer = document.getElementById("latest");

  // Kosongkan kontainer
  latestContainer.innerHTML = "";

  // Mengecek apakah ada data form terbaru
  if (acceptedForms.length > 0) {
    acceptedForms.forEach(function (form) {
      // Membuat elemen HTML untuk form
      var card = document.createElement("div");
      card.className = "column";
      card.innerHTML = `
        <div class="card">
          <img src="data:image/jpeg;base64,${form.logo}" />
          <p class="judul">${form.title}</p>
          <p class="tutup">${form.type}</p>
          <button id="selengkapnya" onclick="show('popupmore')">Selengkapnya</button>
        </div>
      `;
      // Tambahkan elemen form ke dalam kontainer
      latestContainer.appendChild(card);
    });
  } else {
    latestContainer.innerHTML = "Tidak ada data form terbaru.";
  }
}

// Panggil fungsi untuk mengambil data form terbaru dari API
getAcceptedForms();

