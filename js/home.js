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

// async function getTrendingData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
//   const data = await res.json();
//   const container = document.getElementById("trending");

//   data.forEach((item) => {
//     const cardTemplate = templateCardTrending({
//       image: item.thumbnailUrl,
//       judul: item.title,
//       waktu: "27 Nov 2023",
//     });
//     container.innerHTML += cardTemplate;
//   });
// }

// const templateCardTrending = ({ image, judul, waktu }) => {
//   return `
//         <div class="column">
//             <div class="card">
//                 <img src="${image}" />
//                 <p class="judul">${judul}</p>
//                 <p class="tutup">Berakhir pada : ${waktu}</p>
//                 <button>Selengkapnya</button>
//             </div>
//         </div>
//         `;
// };

// getTrendingData();

