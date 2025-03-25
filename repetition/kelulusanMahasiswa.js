let lulus = 0;
let tidakLulus = 0;
const jumlahMahasiswa = parseFloat(prompt('Masukkan jumlah mahasiswa : '));
console.log(`Jumlah mahasiswa = ${jumlahMahasiswa}`);

for (let i = 0; i < jumlahMahasiswa; i++) {
    nilai = prompt(`Masukkan nilai mahasiwa ke-${i+1}`).toUpperCase();
    if (nilai == 'A' || nilai == 'B' || nilai == 'C') {
        lulus += 1;
    } else {
        tidakLulus += 1;
    }
};

alert(`Jumlah mahasiswa lulus = ${lulus} Mahasiswa.
Jumlah mahasiswa tidak lulus = ${tidakLulus} Mahasiswa.`);