let img = document.getElementById('img');
let input = document.getElementById('input');

input.onchange = (e) => {
    if (input.files[0])
        img.src = URL.createObjectURL(input.files[0])
};

function validateForm() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            inputs[i].classList.add('error');
        } else {
            inputs[i].classList.remove('error');
        }
    }
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

// function choice(){
    // var submit = document.getElementById('submit');
    // let form = document.getElementById('form');
    // form.addEventListener("submit", (e) => {
    //     e.preventDefault();
      
    //     let judul = document.getElementById("judul").value;
    //     let jenisKegiatan = document.getElementById("jenisKegiatan").value;
    //     let tanggal_mulai = document.getElementById("tanggal_mulai").value;
    //     let tanggal_selesai = document.getElementById("tanggal_selesai").value;
    //     let jenis1 = document.getElementById("jenis1").value;
    //     let jenis2 = document.getElementById("jenis2").value;
    //     let jenis3 = document.getElementById("jenis3").value;
    //     let deskripsi = document.getElementById("deskripsi").value;
    //     let input = document.getElementById("input").value;
    //     let link = document.getElementById("link").value;
      
    //     if (judul == "" || link == "") {
    //       alert("Ensure you input a value in both fields!");
    //       console.log(
    //         `This form has a username of ${judul.value} and link of ${link.value}`
    //       );
    //     } else {
    //       // perform operation with form input
    //       alert("This form has been successfully submitted!");
    //       console.log(
    //         `This form has a username of ${judul.value} and link of ${link.value}`
    //       );
    //     }
    //   });
// }

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }