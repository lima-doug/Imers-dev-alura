
var listaFilme = [];


for (var i = 0; i < listaFilme.length; i++){

    document.write("<img src=" + listaFilme[i] + ">");

}
    

function addItem(){
    

    var addImage = document.getElementById("pegarImg").value;

        listaFilme.push(addImage);

        document.getElementById("subst-image").innerHTML += "<img src=" + addImage + ">";    
}

