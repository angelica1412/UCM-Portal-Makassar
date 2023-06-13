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
      var judulKegiatan = document.querySelector(".judulkegiatan");
      var jenisKegiatan = document.querySelector(".jawabanjenis");
      var tanggalMulai = document.querySelector(".tanggalmulai");
      var tanggalAkhir = document.querySelector(".tanggalakhir");
      var deskripsi = document.querySelector(".descinfo");
      var logoKegiatan = document.querySelector(".logo1 img");
      var linkGoogleForm = document.querySelector(".rectangle");
      var tombolTolak = document.getElementById("tolak");
      var tombolTerima = document.getElementById("acc");


      judulKegiatan.textContent = formularData[0].title;
      jenisKegiatan.textContent = formularData[0].type;
      tanggalMulai.textContent = "Mulai: " + formularData[0].dateStart;
      tanggalAkhir.textContent = "Akhir: " + formularData[0].dateEnd;
      deskripsi.innerHTML = formularData[0].description;
      logoKegiatan.src = "data:image/jpeg;base64," + formularData[0].logo;
      linkGoogleForm.textContent = formularData[0].linkGoogleForm;
      var popup = document.getElementById('popup');
      tombolTolak.addEventListener("click", function () {
        updateFormStatus(formTitle, "Rejected");
        popup.style.display = 'flex';
        window.addEventListener('click', function (event) {
          if (event.target === popup) {
            popup.style.display = 'none';
          }
        });
        ClearFormView()

      });
      
      tombolTerima.addEventListener("click", function () {
        updateFormStatus(formTitle, "Accepted");
        popup.style.display = 'flex';
        ClearFormView()
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


function ClearFormView() {
  document.getElementById("judulKegiatan").value = "";
  document.getElementById("jenisKegiatan").value = "";
  document.getElementById("tanggalMulai").value = "Mulai : ";
  document.getElementById("tanggalAkhir").value = "Akhir : ";
  document.getElementById("deskripsi").value ="";
  document.getElementById("img").setAttribute("src", "");
  document.getElementById("linkGoogleForm").value ="";
}