// Function to show the popup
function show() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  // Function to hide the popup
  function hide() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  
  // Function to show/hide the mobile menu
  function showMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
  }
  
  // Function to validate the form before submission
  function validateForm() {
    var judul = document.getElementById("judul").value;
    var jenis1 = document.getElementById("jenis1").checked;
    var jenis2 = document.getElementById("jenis2").checked;
    var jenis3 = document.getElementById("jenis3").checked;
    var tanggalMulai = document.getElementById("tanggal_mulai").value;
    var tanggalSelesai = document.getElementById("tanggal_selesai").value;
    var deskripsi = CKEDITOR.instances.deskripsi.getData();
    var logo = document.getElementById("input").files[0];
    var link = document.getElementById("link").value;
  
    console.log("Judul:", judul);
    console.log("Jenis 1:", jenis1);
    console.log("Jenis 2:", jenis2);
    console.log("Jenis 3:", jenis3);
    console.log("Tanggal Mulai:", tanggalMulai);
    console.log("Tanggal Selesai:", tanggalSelesai);
    console.log("Deskripsi:", deskripsi);
    console.log("Link:", link);
    console.log("Logo:", logo);
    
  
    if (
      judul.trim() === "" ||
      (!jenis1 && !jenis2 && !jenis3) ||
      tanggalMulai.trim() === "" ||
      tanggalSelesai.trim() === "" ||
      deskripsi.trim() === "" ||
      link.trim() === "" || logo === undefined
    ) {
      // Show the snackbar message if any field is empty
      var snackbar = document.getElementById("snackbar");
      snackbar.className = "show";
      setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
      }, 3000);
      return false;
    } else {
      return true;
    }
  }
  
  // Event listener for form submission
  var submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    if (validateForm()) {
      // Show the success popup if the form is valid
      show("popup");
      sendFormDataToServer(); // Send form data to the server
      // clearForm();
      clearForm();
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
  
  