const mahasiswa = [
  { nim: "220001", nama: "Budi", jurusan: "Informatika" },
  { nim: "220002", nama: "Siti", jurusan: "Sistem Informasi" },
];

function tambahMahasiswa(nim, nama, jurusan) {
  const sudahAda = tambahMahasiswa.some((mhs) => mhs.nim === nim);
  if (sudahAda) {
    console.log(`Mahasiswa dengan NIM ${nim} sudah terdaftar`);
    return;
  }

  mahasiswa.push({ nim, nama, jurusan });
  console.log(`Mahasiswa ${nama} berhasil didaftarkan`);
}

function hapusMahasiswa(nim) {
  const index = mahasiswa.findIndex((mhs) => mhs.nim === nim);
  console.log(index);
  if (index === -1) {
    console.log(`Mahasiswa dengan NIM ${nim} tidak ditemukan`);
    return;
  }

  mahasiswa.splice(index, 1);
  console.log(`Mahasiswa dengan NIM ${nim} berhasil dihapus`);
}

function perbaharuiMahasiswa(nim, namaBaru, jurusanBaru) {
  const index = mahasiswa.findIndex((mhs) => mhs.nim === nim);
  if (index === -1) {
    console.log(`Mahasiswa dengan NIM ${nim} tidak ditemukan`);
    return;
  }

  mahasiswa[index] = { nim, nama: namaBaru, jurusan: jurusanBaru };
  console.log(`Mahasiswa dengan NIM ${nim} berhasil diperbaharui`);
}

function tampilkanMahasiswa() {
  mahasiswa.forEach((mhs) => {
    console.log(`NIM: ${mhs.nim}, Nama: ${mhs.nama}, Jurusan: ${mhs.jurusan}`);
  });
}

tampilkanMahasiswa();
