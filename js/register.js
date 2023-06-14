const registerhome = document.getElementById('homeregister');

registerhome.addEventListener("submit", async (event) => {
  event.preventDefault();

  let nama = document.getElementById('nama').value;
  let NIM = document.getElementById('NIM').value;
  let jurusan = document.getElementById('jurusan').value;
  let spesialisasi = document.getElementById('spesialisasi').value;
  let fakultas = document.getElementById('fakultas').value;
  let password = document.getElementById('password').value;

  // Validasi karakter di nama, hanya huruf, angka, @, dan _ yang diperbolehkan
  let nameRegex = /^[a-zA-Z0-9@_]+$/;
  if (!nameRegex.test(nama)) {
    alert("Nama pengguna hanya boleh terdiri dari huruf, angka, @, dan _.");
    return;
  }

  // Validasi NIM, hanya angka yang diperbolehkan
  let nimRegex = /^[0-9]+$/;
  if (!nimRegex.test(NIM)) {
    alert("NIM hanya boleh terdiri dari angka.");
    return;
  }

  // Validasi password, hanya 8 karakter (huruf, angka, @, dan _)
  let passwordRegex = /^[a-zA-Z0-9@_]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password harus terdiri dari 8 karakter (huruf, angka, @, dan _).");
    return;
  }

  console.log({ nama, NIM, jurusan, spesialisasi, fakultas, password });

  let data = {
    "nim": NIM,
    "name": nama,
    "major": jurusan,
    "faculty": fakultas,
    "speciality": spesialisasi,
    "password": password
  };

  let response = await fetch('http://localhost:4000/ucmportal/register', {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  });

  let result = await response.json();

  console.log({ result });

  // alert("Registrasi Berhasil")
  window.location.href = "/html/index.html";
});
