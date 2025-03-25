const namaKaryawan = prompt('Masukkan nama karyawan : ');
let golongan = prompt('Masukkan golongan karyawan : ').toUpperCase();
const daftarGolongan = ['A', 'B', 'C', 'D']

while (!daftarGolongan.includes(golongan)) {
    if (golongan != undefined) {
        alert('Silahkan masukkan golongan yang benar');
    };
    golongan = prompt('Silahkan masukkan kembali golongan yang benar').toUpperCase()
}
let upah;
switch (golongan) {
    case 'A':
        upah = 5000
        break
    case 'B':
        upah = 6000;
        break
    case 'C':
        upah = 7500;
        break
    case 'D':
        upah = 9000;
        break
};

const jamKerja = parseInt(prompt('Masukkan jam kerja karyawan : '));
let gaji;
if (jamKerja >= 150) {
    const jamLembur = jamKerja - 150;
    const upahLembur = jamLembur * 0.25 * upah;
    gaji = (jamKerja * upah) + upahLembur;

} else {
    gaji = jamKerja * upah;
}

alert(`Nama karyawan : ${namaKaryawan}
Golongan : ${golongan}
Gaji pokok : Rp.${upah}
Jam kerja : ${jamKerja} jam
Gaji karyawan : Rp.${gaji}`);