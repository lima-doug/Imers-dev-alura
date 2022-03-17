var classeMago = {
    nome: "Mago",
    atributos: {
        ataque: 4,
        defesa: 3,
        magia: 8
    }
    
};

var classeGuerreiro = {
    nome: "Guerreiro",
    atributos: {
        ataque: 4,
        defesa: 8,
        magia: 2
    }
};

var classeAssassino = {
    nome: "Assassino",
    atributos: {
        ataque: 8,
        defesa: 2,
        magia: 2
    }
};

var classes = [classeMago, classeGuerreiro, classeAssassino];
var classeMaquina;
var classeJogador;


function sortearClasse() {
    var indiceRandomMaquina = parseInt(Math.random()*3);
    classeMaquina = classes[indiceRandomMaquina];

    var indiceRandomJogador = parseInt(Math.random()*3);


    while (indiceRandomMaquina == indiceRandomJogador){
        indiceRandomJogador = parseInt(Math.random()*3);
    }
    
    classeJogador = classes[indiceRandomJogador];
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("cardsClass").innerHTML += "<h1> Sua classe é " + classeJogador.nome + "</h1>";
    exibirOpcoes();
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");

    var opcoesTexto = "";

    for (var atributo in classeJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }

    opcoes.innerHTML = opcoesTexto;
}

function obterSelecao() {
    var ratioAtributos = document.getElementsByName("atributo");

    for (var i=0; i < ratioAtributos.length; i++){
        if(ratioAtributos[i].checked == true){
            return ratioAtributos[i].value;
        }
    }
}

function jogar() {

    var atributoSelecionado = obterSelecao();
    var elementoResultado = document.getElementById("resultado");
    var valorClasseJogador = classeJogador.atributos[atributoSelecionado];
    var valorClasseMaquina = classeMaquina.atributos[atributoSelecionado];
    


    if (atributoSelecionado == undefined){
        alert("Você não selecionou um atributo!")
    } else if (valorClasseJogador > valorClasseMaquina) {
        elementoResultado.innerHTML = "Você venceu"
    } else if (valorClasseMaquina > valorClasseJogador) {
        elementoResultado.innerHTML = "Você perdeu, o atributo do adversário é maior"
    } else {
        elementoResultado.innerHTML = "Vocês empataram!"
    }
}