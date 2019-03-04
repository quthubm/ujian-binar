function validasi() {
    var nim = document.getElementById("nim").value;
    var nama = document.getElementById("nama").value;
    var kelas = document.getElementById("kelas").value;
    var jurusan = document.getElementById("jurusan").value;
    var skripsi = document.getElementById("skripsi").value;
    var tanggal = document.getElementById("tanggal").value;
    var jam = document.getElementById("jam").value;
    var email = document.getElementById("email").value;
    var bimbingan = document.getElementById("bimbingan").value;
    if (nim !="" && nama != "" && kelas !="" && jurusan !="" && skripsi !="" && tanggal !="" && jam !="" && email!="" && bimbingan !="") {
        return true;
    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}