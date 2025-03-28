const barang = [
	{
		id: 1,
		nama: 'Buku Tulis',
		harga: 5000,
	},
	{
		id: 2,
		nama: 'Pensil',
		harga: 2000,
	},
	{
		id: 3,
		nama: 'Penghapus',
		harga: 1500,
	},
];

function tambahBarang(nama, harga) {
	const id = barang.length + 1;
	barang.push({ id, nama, harga });
	console.log(`Barang ${nama} berhasil ditambahkan`);
}

function hapusBarang(id) {
	const index = barang.findIndex((brg) => brg.id === id);
	if (index === -1) {
		console.log(`Barang dengan ID ${id} tidak ditemukan`);
		return;
	}
	barang.splice(index, 1);
	console.log(`Barang dengan ID ${id} berhasil dihapus`);
}

function perbaharuiBarang(id, namaBaru, hargaBaru) {
	const index = barang.findIndex((brg) => brg.id === id);
	if (index === -1) {
		console.log(`Barang dengan ID ${id} tidak ditemukan`);
		return;
	}
	barang[index] = { id, nama: namaBaru, harga: hargaBaru };
	console.log(`Barang dengan ID ${id} berhasil diperbaharui`);
}

function tampilkanBarang() {
	barang.forEach((brg) => {
		console.log(`ID: ${brg.id}, Nama: ${brg.nama}, Harga: ${brg.harga}`);
	});

	const totalHarga = barang.reduce((total, brg) => total + brg.harga, 0);
	console.log(`Total Harga: ${totalHarga}`);
}

// Menambahkan barang
tambahBarang('Penggaris', 3000);
tambahBarang('Spidol', 4000);
tambahBarang('Kertas', 1000);
tambahBarang('Stapler', 6000);

hapusBarang(2);
perbaharuiBarang(3, 'Penghapus Baru', 2000);
tampilkanBarang();
