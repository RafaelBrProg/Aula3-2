const prompt = require("prompt-sync")();
const nota1 = Number(prompt("Insira a nota : "));
const nota2 = Number(prompt("Insira a nota : "));
const nota3 = Number(prompt("Insira a nota : "));
const media = (nota1 + nota2 + nota3) / 3
if (media >85  ) {
    let media1 = media +5
    console.log(`Sua nota com bonificação foi ${media1}`)
}
else if (media >=70 && media <=85  ) {
    let media2 = media + 3
    console.log(`Sua nota com bonificação foi ${media2}`)
}
else  
    console.log(` Voce nao recebe bonificação `)
