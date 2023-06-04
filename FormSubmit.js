// Mendapatkan referensi form dan tombol submit
var form = document.querySelector(".containerSemua form");
var submitButton = document.querySelector(".learn-more");

// Fungsi untuk memeriksa apakah semua input pada form sudah diisi
function checkForm() {
    var inputs = form.querySelectorAll("input, textarea");
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            return false;
        }
    }
    return true;
}

// Fungsi untuk mengirim form ke API POST
function sendForm() {
    // Logic untuk mengirim form ke API POST Anda
    // Anda perlu mengganti ini dengan fungsi yang benar-benar mengirim request ke API POST Anda
    console.log("Form has been submitted");
}

// Menambahkan event listener ke tombol submit
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (checkForm()) {
        sendForm();
    } else {
        alert("Mohon isi semua form");
    }
});
