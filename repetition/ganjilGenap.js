let ganjil = 0;
let genap = 0;

while (true) {
    bil = parseFloat(prompt('Masukkan bilangan bulat positif : '));
    if (bil < 0) {
        break;
    }
    if (bil % 2 == 0) {
        genap += 1;
    } else {
        ganjil += 1;
    }
};

alert(`Jumlah bilangan genap = ${genap} bilangan.
Jumlah bilagan ganjil = ${ganjil} bilangan.`)