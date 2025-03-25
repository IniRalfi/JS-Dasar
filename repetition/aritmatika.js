function penjumlahan(a, b) {
    alert(`Hasil penjumlahan dari ${a} + ${b} = ${a + b}`)
    return a + b;
}

function pengurangan(a, b) {
    alert(`Hasil pengurangan dari ${a} - ${b} = ${a - b}`)
    return a - b;
}

function perkalian(a, b) {
    alert(`Hasil perkalian dari ${a} x ${b} = ${a * b}`)
    return a * b;
}

function pembagian(a, b) {
    alert(`Hasil pembagian dari ${a} : ${b} = ${a / b}`)
    return a / b;
}

while (true) {
    const operasi = parseInt(prompt(`Silahkan masukkan operasi : 
1. Penjumlahan
2. Pengurangan
3. Perkalian
4. Pembagian
5. Keluar`));

    if (operasi == 5) {
        break
    }

    a = parseFloat(prompt('Silahkan masukkan angka pertama : '));
    b = parseFloat(prompt('Silahkan masukkan angka kedua : '));
    switch (operasi) {
        case 1:
            penjumlahan(a, b);
            break;
        case 2:
            pengurangan(a, b);
            break;
        case 3:
            perkalian(a, b);
            break;
        case 4:
            pembagian(a, b);
            break;
        default:
            alert('Operasi yang dipilih tidak valid!');
    }
};