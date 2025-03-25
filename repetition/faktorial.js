bil = parseInt(prompt('Masukkan bilangan : '));

let faktorial = 1;
if (bil <= 1) {
    faktorial = 1;
} else {
    for (let i = bil; i > 0; i--) {
        faktorial = faktorial * i
    }
}

alert(faktorial)