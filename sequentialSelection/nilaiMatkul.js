const nim = prompt('Masukkan NIM Mahasiswa');
const namaMahasiswa = prompt('Masukkan nama mahasiswaa : ');
const mataKuliah = prompt('Masukkan nama mata kuliah : ');
let kehadiran = parseInt(prompt('Masukkan jumlah kehadiran dari 16 sesi'));
while (kehadiran > 16) {
    alert('Jumlah kehadiran salah, silahkan masukkan jumlah yang benar!');
    kehadiran = parseInt(prompt('Silahkan masukkan jumlah kehadiran kembali!'));
}

if (kehadiran < 12) {
    alert(`Nama mahasiswa : ${namaMahasiswa}
NIM : ${nim}
Mata kuliah : ${mataKuliah}
Jumlah kehadiran : ${kehadiran}
Nilai mata kuliah ${mataKuliah} : E`)
} else {
    const tugas = parseInt(prompt('Masukan nilai tugas : '));
    const uts = parseInt(prompt('Masukkan nilai uts : '));
    const uas = parseInt(prompt('Masukkan nilai uas'));

    const nilaiAkhir = (kehadiran / 16) * 10 + tugas * 0.2 + uts * 0.3 + uas * 0.4
    let nilai;
    switch (true) {
        case (nilaiAkhir >= 80):
            nilai = 'A'
            break
        case (nilaiAkhir >= 75):
            nilai = 'B'
            break
        case (nilaiAkhir >= 60):
            nilai = 'C'
            break
        case (nilaiAkhir >= 50):
            nilai = 'D'
            break
        default:
            nilai = 'E'
    }

    alert(`Nama mahasiswa : ${namaMahasiswa}
NIM : ${nim}
Mata kuliah : ${mataKuliah}
Jumlah kehadiran : ${kehadiran}
Nilai tugas : ${tugas}
Nilai UTS : ${uts}
Nilai UAS : ${uas}
Nilai Akhir : ${nilaiAkhir}
Nilai mata kuliah ${mataKuliah} : ${nilai}`)
}