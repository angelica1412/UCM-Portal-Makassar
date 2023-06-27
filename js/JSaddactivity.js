// HAMBURGER NAVBAR 
var navLinks = document.getElementById("navLinks");

function showNav() {
  navLinks.style.left = "0";
}

function hideMenu() {
  navLinks.style.left = "-200px";
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



// Function to show the popup
function show() {
  var popup = document.getElementById("popupSubmit");
  popup.style.display = "flex";
}

// Function to hide the popup
function hide() {
  var popup = document.getElementById("popupSubmit");
  popup.style.display = "none";
}

// Function to show/hide the mobile menu
function showMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

function validateForm() {
  var judul = document.getElementById("judul");
  
  var jenis1 = document.getElementById("jenis1");
  var jenis2 = document.getElementById("jenis2");
  var jenis3 = document.getElementById("jenis3");
  var tanggalMulai = document.getElementById("tanggal_mulai");
  var tanggalSelesai = document.getElementById("tanggal_selesai");
  var deskripsi = CKEDITOR.instances.deskripsi;
  var logo = document.getElementById("input");
  var link = document.getElementById("link");
  var type = document.getElementById("jenisKegiatan")
  var deskripsikegiatan = document.getElementById("desckegiatan")
  var pattern = /^https?:\/\/(forms\.gle\/[A-Za-z0-9-_]+|docs\.google\.com\/forms\/d\/e\/[A-Za-z0-9-_]+\/viewform\?usp=sf_link)/;

  // Check each field and apply error state if it's invalid
  if (judul.value.trim() === "") {
    showError(judul, "Judul tidak boleh kosong");
  } else if (!jenis1.checked && !jenis2.checked && !jenis3.checked) {
    showError(type, "Harap pilih setidaknya satu jenis");
  } else if (tanggalMulai.value.trim() === "") {
    showError(tanggalMulai, "Tanggal Mulai tidak boleh kosong");
  } else if (tanggalSelesai.value.trim() === "") {
    showError(tanggalSelesai, "Tanggal Selesai tidak boleh kosong");
  } else if (deskripsi.getData().trim() === "") {
    showError(deskripsikegiatan, "Deskripsi tidak boleh kosong");
  } else if (logo.files.length === 0) {
    showError(logo, "Logo tidak boleh kosong");
  } else if (link.value.trim() === "") {
    showError(link, "Link tidak boleh kosong");
  } else if (logo.files[0].size > 5 * 1024 * 1024) {  // Check file size
    showError(logo, "Ukuran logo tidak boleh lebih dari 5MB");
  } else if (!pattern.test(link.value)) {
    showError(link, "Harap masukkan link Google Form yang valid");
  } else {
    return true;
  }
  return false;
}

function showError(input, message) {
  // Calculate the position to scroll to
  var rect = input.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollPos = rect.top + scrollTop - 120; // Scroll 100 pixels above the element

  // Scroll to the position
  window.scrollTo({
    top: scrollPos,
    behavior: 'smooth'
  });

  // Show the snackbar with the error message
  var snackbar = document.getElementById("snackbar");
  snackbar.innerHTML = message;
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}




// Event listener for form submission
var submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from submitting
  if (validateForm()) {
    // Show the success popup if the form is valid
    show("popupSubmit");
    sendFormDataToServer(); // Send form data to the server
    // clearForm();
    clearForm();
    window.addEventListener('click', function (event) {
      var popup = document.getElementById('popupSubmit');
      if (event.target == popup) {
        hide('popupSubmit');
      }
    });

  }
});

// Update the image preview when selecting a file
var img = document.getElementById("img");
var input = document.getElementById("input");

input.onchange = function (e) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      img.src = e.target.result;
      console.log("Data Gambar:", img);
    };

    reader.readAsDataURL(input.files[0]);
  }
};

// Function to send form data to the server
function sendFormDataToServer() {
  var judul = document.getElementById("judul").value;
  var jenis1 = document.getElementById("jenis1").checked;
  var jenis2 = document.getElementById("jenis2").checked;
  var jenis3 = document.getElementById("jenis3").checked;
  var tanggalMulai = document.getElementById("tanggal_mulai").value;
  var tanggalSelesai = document.getElementById("tanggal_selesai").value;
  var deskripsi = CKEDITOR.instances.deskripsi.getData();
  var link = document.getElementById("link").value;

  // Get the value of "name" from sessionStorage
  var name = sessionStorage.getItem("username");
  if (!name) {
    console.error("Nilai 'name' tidak ditemukan dalam sessionStorage");
    return;
  }

  var formData = new FormData();
  formData.append("logo_form", input.files[0]);
  formData.append("title_form", judul);
  formData.append("type_form", jenis1 ? "Organisasi" : jenis2 ? "Unit Kegiatan Mahasiswa (UKM)" : "Acara/Kepanitiaan");
  formData.append("date_start_form", tanggalMulai);
  formData.append("date_end_form", tanggalSelesai);
  formData.append("description_form", deskripsi);
  formData.append("link_google_form", link);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:4000/ucmportal/" + name + "/saveform");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Formulir berhasil disimpan.");
    } else {
      console.error("Terjadi kesalahan saat menyimpan formulir:", xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error("Terjadi kesalahan koneksi saat menyimpan formulir.");
  };
  xhr.send(formData);
}

function clearForm() {
  document.getElementById("judul").value = "";
  document.getElementById("jenis1").checked = false;
  document.getElementById("jenis2").checked = false;
  document.getElementById("jenis3").checked = false;
  document.getElementById("tanggal_mulai").value = "";
  document.getElementById("tanggal_selesai").value = "";
  CKEDITOR.instances.deskripsi.setData("");
  document.getElementById("link").value = "";
  document.getElementById("input").value = null;
  document.getElementById("img").setAttribute("src", "/aset/addimage.png");

}







