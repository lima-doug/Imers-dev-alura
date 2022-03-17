//         chave.  valor.
var rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: "Gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
//var jogadorNovo = { nome: "", foto: "", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

var jogadores = [rafa, paulo, gui];

function calculaPontos(jogador) {
    var pontos
    return pontos = jogador.vitorias * 3 + jogador.empates;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento +=
            "<td class='action-table'><button class='win' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento +=
            "<td class='action-table'><button class='tie' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento +=
            "<td class='action-table'><button class='defeat' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}
exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    for (var contador = 0; contador < jogadores.length; contador++) {
        if (contador != i) {
            var outrosJogadores = jogadores[contador];
            outrosJogadores.derrotas++;
        }
    }
    exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate() {
    for (
        var segundoIndice = 0; segundoIndice < jogadores.length; segundoIndice++
    ) {
        var jogador = jogadores[segundoIndice];
        jogador.empates++;
        jogador.pontos = calculaPontos(jogador);
    }
    exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}

function resetarJogo() {
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0;
        jogadores[i].derrotas = 0;
        jogadores[i].empates = 0;
        jogadores[i].pontos = 0;
    }
    exibeJogadoresNaTela(jogadores);
}