var classeMago = {
    nome: "Mago",
    imagem: "https://www.rederpg.com.br/wp/wp-content/uploads/2019/12/Wizards-and-Spells-864x467.jpg",
    atributos: {
        ataque: 4,
        defesa: 3,
        magia: 8
    }
    
};

var classeGuerreiro = {
    nome: "Guerreiro",
    imagem: "https://www.pngkey.com/png/detail/151-1514744_image-dark-knight-aw-render-png-aigis-wiki.png",
    atributos: {
        ataque: 4,
        defesa: 8,
        magia: 2
    }
};

var classeAssassino = {
    nome: "Assassino",
    imagem: "https://64.media.tumblr.com/566095676d27bda491aaced2c43df751/tumblr_nz1ili43iV1tpri36o1_1280.png",
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
    
    exibirCartaJogador();
    exibirCartaMaquina();
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

    document.getElementById("btnJogar").disabled = true;
}



function exibirCartaJogador() {

    var divCartaJogador = document.getElementById ("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${classeJogador.imagem})`;

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in classeJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + classeJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class='carta-subtitle'>${classeJogador.nome}</p>`

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {

    var divCartaMaquina = document.getElementById ("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${classeMaquina.imagem})`;

    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";

    for (var atributo in classeMaquina.atributos){
        opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + classeMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class='carta-subtitle'>${classeMaquina.nome}</p>`

    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}

