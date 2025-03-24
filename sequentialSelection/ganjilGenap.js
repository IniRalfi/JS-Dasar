let ulang = true
while (ulang) {
    bil = parseInt(prompt('Masukkan angka : '));

    if (bil % 2 == 0) {
        category = 'genap'
    } else {
        category = 'ganjil'
    }

    alert(`Bilangan : ${bil}
Bilangan ${bil} merupakan bilangan ${category}.`);

    ulang = prompt('Lagi? (y/n)')
    if (ulang == 'n') {
        ulang = false
    }
}