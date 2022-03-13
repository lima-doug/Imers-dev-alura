
var listaFilme = [];
var listaName = [];

for (var i = 0; i < listaFilme.length; i++){

    document.write("<img src=" + listaFilme[i] + ">");
    document.write ("<h2>" + listaName[i] + "</h2>");

}
    

function addItem(){
    

    var addImage = document.getElementById("pegarImg").value;
    var addName = document.getElementById ("pegarNome").value;

        listaFilme.push(addImage);
        listaName.push (addName);

        document.getElementById("subst-image").innerHTML += "<img src=" + addImage + ">";    
}

