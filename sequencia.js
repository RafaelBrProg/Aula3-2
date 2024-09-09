const prompt = require("prompt-sync")();
const num1 = Number(prompt("Insira o primeiro numero: "));
const num2 = Number(prompt("Insira o segundo numero: "));
const num3 = Number(prompt("Insira o terceiro numero: "));
if (num3 > num2 && num1 < num2) {
    console.log("sua sequencia é crescente")
} else if (num1 > num2 && num2 > num3) {
    console.log("sum sequencia é decrescente" )
} else {
    console.log("sua sequencia é desorgaizada")
}