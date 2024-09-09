function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function categorizarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso. Recomenda-se consultar um nutricionista para orientação sobre ganho de peso saudável.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal. Continue mantendo uma dieta equilibrada e praticando exercícios regularmente para manter a saúde.";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso. Considere ajustar sua dieta e aumentar a atividade física para atingir um peso saudável.";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade grau I. É importante buscar orientação médica para um plano de perda de peso e monitoramento da saúde.";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade grau II. Recomenda-se fortemente consultar um médico para um plano abrangente de tratamento e cuidados médicos.";
    } else {
        return "Obesidade grau III. É essencial procurar orientação médica imediata para avaliação e tratamento adequado.";
    }
}
function main() {
    const peso = parseFloat(prompt("Digite seu peso em quilogramas (kg):"));
    const altura = parseFloat(prompt("Digite sua altura em metros (m):"));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Erro: Peso e altura devem ser valores positivos e numéricos.");
        return;
    }

    const imc = calcularIMC(peso, altura);
    const mensagem = categorizarIMC(imc);

    alert(`Seu IMC é: ${imc.toFixed(2)}\n${mensagem}`);
}

main();