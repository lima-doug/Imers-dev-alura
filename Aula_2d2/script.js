function calcStar(){
    var dist = parseFloat(document.getElementById('distancia').value);
    var veloc_m = parseFloat(document.getElementById("velocidade-media").value);
    var light_y = 9460536068.016

    var result_temp = ((dist/veloc_m));
    var convert_light = (dist/light_y);

    document.getElementById('anos-luz').setAttribute("value", convert_light);
    document.getElementById('tempo-nesc').setAttribute("value", result_temp.toFixed(2));
    
}

