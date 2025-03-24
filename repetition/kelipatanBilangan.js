const batasAngka = parseFloat(prompt('Masukkan batas angka'));
const angka = parseFloat(prompt('Masukkan angka kelipatan : '));

let total = 0;
for (let i = 1; i < batasAngka; i++) {
    if (i % angka == 0) {
        total += i;
    };
};

alert(`Total bilangan kelipatan ${angka} antara 1 sd ${batasAngka} = ${total}`);