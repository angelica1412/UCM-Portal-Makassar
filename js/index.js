$(document).ready(function() {
  $('#loginForm').submit(function(event) {
    event.preventDefault();

    var name = $('#name').val();
    var password = $('#password').val();

    // // Validasi karakter di nama, hanya huruf, angka, @, dan _ yang diperbolehkan
    // var nameRegex = /^[a-zA-Z0-9@_]+$/;
    // if (!nameRegex.test(name)) {
    //   alert("Nama pengguna hanya boleh terdiri dari huruf, angka, @, dan _.");
    //   return;
    // }

    // // Validasi password, hanya 8 karakter (huruf, angka, @, dan _)
    // var passwordRegex = /^[a-zA-Z0-9@_]{8,}$/;
    // if (!passwordRegex.test(password)) {
    //   alert("Password harus terdiri dari 8 karakter (huruf, angka, @, dan _).");
    //   return;
    // }

    var data = {
      name: name,
      password: password
    };

    $.ajax({
      url: 'http://localhost:4000/ucmportal/login',
      method: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(response) {
        // Login berhasil
        console.log(response);
        if (response.status) {
          console.log('Login successful');

          // Set sessionStorage
          sessionStorage.setItem("username", response.userSummary.name);
          sessionStorage.setItem("userLevel", response.userSummary.userLevel);
          sessionStorage.setItem("major", response.userSummary.major);

          // Arahkan pengguna ke halaman yang sesuai berdasarkan level pengguna
          if(response.userSummary.userLevel === "user") {
            window.location.href = 'home.html';
          } else if(response.userSummary.userLevel === "admin") {
            window.location.href = 'homeAdmin.html';
          }
        } else {
          // Login gagal
          console.log('Login failed');
        }
      },
      error: function(xhr, status, error) {
        // Kesalahan saat melakukan permintaan
        console.error(error);
        // Lakukan tindakan jika terjadi kesalahan
      }
    });
  });
});
