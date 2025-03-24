const anakAyam = parseInt(prompt('Masukkan jumlah anak ayam : '));

for (let i = anakAyam; i > 0; i--) {
    if (i == 1) {
        console.log(`Anak ayam tinggal ${i} matu satu tinggal induknya`);
    } else {
        console.log(`Anak ayam tinggal ${i} mati satu tinggal ${i-1}`)
    }
}