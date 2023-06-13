function getRequestList() {
  var apiUrl = "http://localhost:4000/ucmportal/listrqform";

  // Lakukan request AJAX ke API menggunakan jQuery
  $.ajax({
    url: apiUrl,
    type: "GET",
    dataType: "json",
    success: function (requestList) {
      processRequestList(requestList);
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
}

function processRequestList(requestList) {
  var getRequestList = document.getElementById("list_Pengirim");

  // Kosongkan kontainer
  getRequestList.innerHTML = "";

  // Mengecek apakah ada data form terbaru
  if (requestList.length > 0) {
    requestList.forEach(function (list) {
      // Membuat elemen HTML untuk form
      var infopengirimDiv = document.createElement("button");
      infopengirimDiv.className = "infopengirim";
      infopengirimDiv.innerHTML = `
          <div class="name">
            <p class="namepengirim">${list.userName}</p>
            <p class="jurusan">${list.nim} - ${list.major}</p>
          </div>
          <div class="iconbeside">
            <a href="#"><i class="fa-solid fa-chevron-right"></i></a>
          </div>
        `;

      infopengirimDiv.addEventListener("click", function () {
        var userName = list.userName;
        var formTitle = list.formTitle;
        showFormularData(userName, formTitle);
      });

      // Tambahkan elemen form ke dalam kontainer
      getRequestList.appendChild(infopengirimDiv);
    });
  } else {
    getRequestList.innerHTML = "Tidak ada data form terbaru.";
  }
}

function showFormularData(userName, formTitle) {
  var apiUrlForm = `http://localhost:4000/ucmportal/form/${formTitle}`;
  console.log(userName);

  // Lakukan request AJAX ke API menggunakan jQuery
  $.ajax({
    url: apiUrlForm,
    type: "GET",
    dataType: "json",
    success: function (formularData) {
      console.log(formularData);
      // Memperbarui tampilan HTML dengan data formular
      const judulKegiatan = document.querySelector(".judulkegiatan");
      const jenisKegiatan = document.querySelector(".jawabanjenis");
      const tanggalMulai = document.querySelector(".tanggalmulai");
      const tanggalAkhir = document.querySelector(".tanggalakhir");
      const deskripsi = document.querySelector(".descinfo");
      const logoKegiatan = document.querySelector(".logo1 img");
      const linkGoogleForm = document.querySelector(".rectangle");
      const tombolTolak = document.getElementById("tolak");
      const tombolTerima = document.getElementById("acc");
  
      judulKegiatan.textContent = formularData[0].title;
      jenisKegiatan.textContent = formularData[0].type;
      tanggalMulai.textContent = "Mulai: " + formularData[0].dateStart;
      tanggalAkhir.textContent = "Akhir: " + formularData[0].dateEnd;
      deskripsi.innerHTML = formularData[0].description;
      logoKegiatan.src = "data:image/jpeg;base64," + formularData[0].logo;
      linkGoogleForm.textContent = formularData[0].linkGoogleForm;
  
      // Cek jika ada data yang kosong
      
      window.addEventListener('click', function (event) {
        if (event.target === popup) {
          popup.style.display = 'none';
        }
      });
      // Tambahkan event listener pada tombol "Tolak"
      tombolTolak.addEventListener("click", function () {
        const jenisKegiatanValue = document.querySelector(".jawabanjenis").value;
        const judulKegiatanValue = document.querySelector(".judulkegiatan").value;
        const tanggalMulaiValue = document.querySelector(".tanggalmulai").value;
        const tanggalAkhirValue = document.querySelector(".tanggalakhir").value;
        const deskripsiValue = document.querySelector(".descinfo").innerHTML;
        const logoKegiatanValue = document.querySelector(".logo1 img").src;
        const linkGoogleFormValue = document.querySelector(".rectangle").value;
        
      
        if (
          judulKegiatanValue == "" ||
          jenisKegiatanValue == "" ||
          tanggalMulaiValue == "" ||
          tanggalAkhirValue == "" ||
          deskripsiValue == "" ||
          logoKegiatanValue== undefined ||
          linkGoogleFormValue == "" 
        )  {
          // Tampilkan pop-up snackbar
          var snackbar = document.getElementById("snackbar");
          snackbar.className = "show";
          setTimeout(function () {
            snackbar.className = snackbar.className.replace("show", "");
          }, 3000);
          return false;
        } else {
          updateFormStatus(formTitle, "Rejected");
          clearForm();
          popup.style.display = "flex";
          formTitle = "";
          return true;
        }
      });
      
      
  
      // Tambahkan event listener pada tombol "Terima"
      tombolTerima.addEventListener("click", function () {
        const jenisKegiatanValue = document.querySelector(".jawabanjenis").value;
        const judulKegiatanValue = document.querySelector(".judulkegiatan").value;
        const tanggalMulaiValue = document.querySelector(".tanggalmulai").value;
        const tanggalAkhirValue = document.querySelector(".tanggalakhir").value;
        const deskripsiValue = document.querySelector(".descinfo").innerHTML;
        const logoKegiatanValue = document.querySelector(".logo1 img").src;
        const linkGoogleFormValue = document.querySelector(".rectangle").value;
        
      
        if (
          judulKegiatanValue == "" ||
          jenisKegiatanValue == "" ||
          tanggalMulaiValue == "" ||
          tanggalAkhirValue == "" ||
          deskripsiValue == "" ||
          logoKegiatanValue== undefined ||
          linkGoogleFormValue == "" 
        )  {
          // Tampilkan pop-up snackbar
          var snackbar = document.getElementById("snackbar");
          snackbar.className = "show";
          setTimeout(function () {
            snackbar.className = snackbar.className.replace("show", "");
          }, 3000);
          return false;
        }else{
          updateFormStatus(formTitle, "Accepted");
          clearForm();
          popup.style.display = 'flex';
          formTitle = "";
        }
      });
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
  
}

function updateFormStatus(formTitle, status) {
  var apiUrlUpdateForm = `http://localhost:4000/ucmportal/updateform/${formTitle}/${status}`;

  // Lakukan request AJAX ke API menggunakan jQuery
  $.ajax({
    url: apiUrlUpdateForm,
    type: "PUT",
    success: function (response) {
      console.log(response);
      // Tambahkan logika atau tindakan yang diinginkan setelah update status form berhasil
    },
    error: function (xhr, status, error) {
      console.log(error);
    }
  });
}

getRequestList();

setInterval(function () {
  getRequestList();
}, 5000);

  function clearForm() {
    var judulKegiatan = document.querySelector(".judulkegiatan");
    var jenisKegiatan = document.querySelector(".jawabanjenis");
    var tanggalMulai = document.querySelector(".tanggalmulai");
    var tanggalAkhir = document.querySelector(".tanggalakhir");
    var deskripsi = document.querySelector(".descinfo");
    var logoKegiatan = document.querySelector(".logo1 img");
    var linkGoogleForm = document.querySelector(".rectangle");
  
    judulKegiatan.textContent = "";
    jenisKegiatan.textContent = "";
    tanggalMulai.textContent = "Mulai: ";
    tanggalAkhir.textContent = "Akhir: ";
    deskripsi.innerHTML = "";
    logoKegiatan.src = "";
    linkGoogleForm.textContent = "";
  }



