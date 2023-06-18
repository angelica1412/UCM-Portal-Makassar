// NAVBAR UNTUK RESPONSIVE 
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.left = "0";
}

function hideMenu() {
  navLinks.style.left = "-200px";
}

function showMenu() {
    navLinks.style.left = "0";
}

var openBtn = document.getElementById('btnlogout');
var closeBtn = document.getElementById('cancel');
var closeBtn2 = document.getElementById('tidak');
var popup = document.getElementById('popup2');

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

  function getMyActivityData() {
  var name = sessionStorage.getItem('username');
  var apiUrl = "http://localhost:4000/ucmportal/" + name + "/myforms";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiUrl, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var myActivityData = JSON.parse(xhr.responseText);
      processMyActivityData(myActivityData);
    }
  };
  xhr.send();
}

function processMyActivityData(myActivityData) {
  var tableData = document.getElementById("dataTabel");

  tableData.innerHTML = "";
  var counter = 0;

  if (myActivityData.length > 0) {
    myActivityData.forEach(function(data) {
      var table = document.createElement("tr");
      table.className = "column";
      table.innerHTML = `
        <td>${data.title}</td>
        <td>${data.type}</td>
        <td class="status"><span class="${getStatusClass(data.status)}"></span>${data.status}</td>
        <td>${data.date_start}</td>
      `;

      tableData.appendChild(table);
      counter++;
    });
  } else {
    tableData.innerHTML = "<tr><td colspan='4'>Tidak ada data form terbaru.</td></tr>";
  }
}
function getStatusClass(status) {
  switch (status) {
    case "Accepted":
      return "dotterima";
    case "Process":
      return "dotperiksa";
    case "Rejected":
      return "dottolak";
    default:
      return "";
  }
}

getMyActivityData();