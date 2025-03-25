const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sesuatu: ", function (input) {
    console.log("Anda memasukkan:", input);
    rl.close();
});