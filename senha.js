function verificarSenhaForte(senha) {
    if (senha.length < 8) {
        return false;
    }

    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temDigito = /[0-9]/.test(senha);
    const temCaractereEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    
    return temMaiuscula && temMinuscula && temDigito && temCaractereEspecial;
}
const senha = prompt("Digite a senha para verificar: ");
if (verificarSenhaForte(senha)) {
    console.log("A senha é forte.");
} else {
    console.log("A senha não é forte.");
}
