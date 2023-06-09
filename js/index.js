$(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault();
  
      var name = $('#name').val();
      var password = $('#password').val();
      
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
  
            // Arahkan pengguna ke halaman yang sesuai berdasarkan level pengguna
            if(response.userSummary.userLevel === "user") {
              window.location.href = 'home.html?name=' + response.userSummary.name;
            } else if(response.userSummary.userLevel === "admin") {
              window.location.href = 'homeAdmin.html?name=' + response.userSummary.name;
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