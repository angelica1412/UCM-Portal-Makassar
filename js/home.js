var navLinks = document.getElementById("navLinks")

function showMenu() {
    navLinks.style.left = "0";
}

function hideMenu() {
    navLinks.style.left = "-200px";
}

function search() {
    var keyword = document.querySelector('.search-box').value;
    // Lakukan aksi pencarian sesuai dengan kata kunci yang dimasukkan
    // Misalnya, redirect ke halaman hasil pencarian menggunakan window.location.href
    window.location.href = "home.html?keyword=" + keyword;
}