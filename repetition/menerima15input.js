let totalBil = 0;

for (let i = 0; i < 15; i++) {
    bil = parseInt(prompt(`Masukkan bilangan ke-${i} `));
    console.log(`Operasikan ${totalBil} + ${bil}`);
    totalBil += bil;
    console.log(`Iterasi ke-${i+1}`)
};

alert(`Total dari semua angka yang di inputkan adalah ${totalBil}`)