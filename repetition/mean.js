let total = 0;
let jumlahBil = 0;

while (true) {
    const bil = parseFloat(prompt('Masukkan bilangan : '));
    if (bil == -100) {
        break;
    }

    console.log(`Operasikan ${total} + ${bil}`);
    jumlahBil += 1;
    total += bil

    console.log(`Total saat ini = ${total}`);
};
mean = total / jumlahBil
alert(`Total keseluruhan bilangan = ${total}
Rata-rata dari ${jumlahBil} bilangan = ${mean}`)