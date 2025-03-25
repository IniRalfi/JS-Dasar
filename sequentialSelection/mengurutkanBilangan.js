let bil1 = parseInt(prompt('Masukkan bilangan pertama: '));
let bil2 = parseInt(prompt('Masukkan bilangan kedua : '));
let bil3 = parseInt(prompt('Masukkan angka ketiga : '));
let bil
if (bil1 > bil2) {
    [bil1, bil2] = [bil2, bil1]
};
if (bil1 > bil3) {
    [bil1, bil3] = [bil3, bil1]
};

if (bil2 > bil3) {
    [bil2, bil3] = [bil3, bil2]
};

alert(`Urutan bilangan dari terkecil ke terbesar adalah ${bil1}, ${bil2}, ${bil3}`);