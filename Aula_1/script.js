function mediaFinal(){
    var n1 = parseFloat(document.getElementById('note1').value);
    var n2 = parseFloat(document.getElementById('note2').value);
    var n3 = parseFloat(document.getElementById('note3').value);
    var n4 = parseFloat(document.getElementById('note4').value);

    var resultado = parseFloat((n1+n2+n3+n4)/4);

    document.getElementById('text-result').setAttribute("value", resultado);
    
    if (resultado >= 6) {
        document.getElementById("text-result").style.background="#08E0D4"
        document.getElementById("text-result").style.color="#FFF"
        alert("Parabéns! Você passou com nota " + resultado);
    } else {
        document.getElementById("text-result").style.background="#E00863"
        document.getElementById("text-result").style.color="#FFF"
        alert("Que pena você foi reprovado...")
    }

}



