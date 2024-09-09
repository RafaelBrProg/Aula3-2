const prompt = require("prompt-sync")();
const vendaJunho = Number(prompt("Insira o valor da compra de junho: "));
const vendaJulho = Number(prompt("Insira o valor da compra de julho: "));
const vendaAgosto = Number(prompt("Insira o valor da compra de agosto: "));
let comissao
if (vendaJunho >= 5000 && vendaJunho <= 10000) {
    comissao = vendaJunho * (5 / 100)
    console.log(`Em junho vendas maiores que 5000, a comissão foi de R$${comissao}`)
} else if (vendaJunho > 10000) {
    comissao = vendaJunho * (10 / 100)
    console.log(`Em junho vendas maiores que 10000, a comissão foi de R$${comissao}`)
} else {
    console.log("Em junho nao teve comissão ")
}
if (vendaJulho >= 5000 && vendaJulho <= 10000) {
    comissao = vendaJulho * (5 / 100)
    console.log(`Em julho vendas maiores que 5000, a comissão foi de R$${comissao}`)
} else if (vendaJulho > 10000) {
    comissao = vendaJulho * (10 / 100)
    console.log(`Em julho vendas maiores que 10000, a comissão foi de R$${comissao}`)
} else {
    console.log("Em julho nao teve comissão")
}

if (vendaAgosto >= 5000 && vendaAgosto <= 10000) {
    comissao = vendaAgosto * (5 / 100)
    console.log(`Em agosto vendas maiores que 5000, a comissão foi de R$${comissao}`)
} else if (vendaAgosto > 10000) {
    comissao = vendaAgosto * (10 / 100)
    console.log(`Em agosto vendas maiores que 10000, a comissão foi de R$${comissao}`)
} else {
    console.log("Em agosto nao teve comissão")
}