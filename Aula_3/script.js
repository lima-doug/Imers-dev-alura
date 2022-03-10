var randomNum = parseInt(Math.random() * 11);

function Chutar() {
    var getNum = parseInt(document.getElementById("chute").value)
    var resultado = document.getElementById("subst-valor");

    if (getNum > 10 || chute < 0) {
        resultado.innerHTML = "Número inválido. Digite um numéro de 0 a 10.";
    } else if (getNum == randomNum) {
        resultado.innerHTML = "Parabéns, você acertou"
    } else {
        resultado.innerHTML = "Que pena, você errou";
    }
}