const registerhome = document.getElementById('homeregister');

registerhome.addEventListener("submit", async (event) => {
    event.preventDefault()
    let nama = document.getElementById('nama').value;
    let NIM = document.getElementById('NIM').value;
    let jurusan = document.getElementById('jurusan').value;
    let spesialisasi = document.getElementById('spesialisasi').value;
    let fakultas = document.getElementById('fakultas').value;
    let password = document.getElementById('password').value;

    console.log({ nama, NIM, jurusan, spesialisasi, fakultas, password })

    let data = {
        "nim": NIM,
        "name": nama,
        "major": jurusan,
        "faculty": fakultas,
        "speciality": spesialisasi,
        "password": password,
    }

    let response = await fetch('http://localhost:4000/ucmportal/register', { method: "POST", body: JSON.stringify(data), headers: {"Content-Type": "application/json"} })

    let result = await response.json()

    console.log({result})

    // alert("Registrasi Berhasil")
    
    window.location.href = "/html/index.html"
})