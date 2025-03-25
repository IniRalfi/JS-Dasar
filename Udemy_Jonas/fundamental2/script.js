'use strict';

let hasDriveLicen = false;
const passTest = true;

if (passTest) hasDriveLicen = true;
if (hasDriveLicen) console.log('I can Drive');

function logger() {
    console.log('My name is R')
}

logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges}.`
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

const age1 = calcAge1(1991);
const calcAge2 = function (birth) {
    return 2037 - birth;
}
const age2 = calcAge2(1991);
console.log(age1, age2)

const calcAge3 = birth => 2037 - birth;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}



console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));