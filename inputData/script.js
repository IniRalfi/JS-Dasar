const namaBarang = prompt('Masukkan nama barang : ');
const hargaBarang = parseInt(prompt('Masukkan harga barang'));
const pajak = 12.5 / 100 * hargaBarang
const totalHarga = pajak + hargaBarang

alert(`Nama barang : ${namaBarang}
harga barang : ${hargaBarang}
Pajak yang harus di bayar : ${pajak}
Total harga yang harus dibayar adalah : ${totalHarga}`)