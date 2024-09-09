const prompt = require("prompt-sync")();
const lado1 = Number(prompt("Insira o primeiro lado: "));
const lado2 = Number(prompt("Insira o segundo lado: "));
const lado3 = Number(prompt("Insira o terceiro lado: "));
const lado4 = Number(prompt("Insira o quarto lado: "));

if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
    console.log("Este é um quadrado ")
} else if (lado1 === lado3 && lado2 === lado4 && lado1 !== lado2) {
console.log("Este é um retangulo ")
} else if (lado1 === lado2 && lado3 === lado4 && lado1 !== lado3) {
console.log("Este é um losango ")
} else {
    console.log("É outro tipo de quadrilátero")
}