function convertCsh(){
    var valor_real = parseFloat(document.getElementById('value-real').value);
    var select_return = document.getElementById("value-convert").value;

    var resultado;
    //document.getElementById('text-result').setAttribute("value", resultado);
    
    switch (select_return) {
        case 'EUR':
        resultado = (valor_real/5.52);
        document.getElementById('text-result').setAttribute("value", resultado.toFixed(2));
        break;

        case 'USD':
        resultado = (valor_real/5.06);
        document.getElementById('text-result').setAttribute("value", resultado.toFixed(2));
        break;

        case 'GBP':
        resultado = (valor_real/6.64);
        document.getElementById('text-result').setAttribute("value", resultado.toFixed(2));
        break;

        case 'CAD':
        resultado = (valor_real/3.93);
        document.getElementById('text-result').setAttribute("value", resultado.toFixed(2));
        break;

        case 'AUD':
        resultado = (valor_real/3.68);
        document.getElementById('text-result').setAttribute("value", resultado.toFixed(2));
        break;

        case 'JPY':
        resultado = (valor_real/0.044);
        document.getElementById('text-result').setAttribute("value", resultado.toFixed(2));
        break;

        case 'INR':
        resultado = (valor_real/0.066);
        document.getElementById('text-result').setAttribute("value", resultado.toFixed(2));
        break;

        case 'NZD':
        resultado = (valor_real/3.44);
        document.getElementById('text-result').setAttribute("value", resultado.toFixed(2));
        break;

        case 'CHF':
        resultado = (valor_real/5.44);
        document.getElementById('text-result').setAttribute("value", resultado.toFixed(2));
        break;

        case 'BTC':
        resultado = (valor_real/199446.85);
        document.getElementById('text-result').setAttribute("value", resultado);
        break;

    }
 } /*
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

*/

