function verificarIdade() {
    let inputElemento = document.getElementById("input-idade");
    let mensagemEl = document.getElementById("mensagem");

    // Verifica se o input existe
    if (!inputElemento) {
        console.error("Não encontrei o input-idade no HTML!");
        return;
    }

    let idadeInput = inputElemento.value;

    if (idadeInput === "") {
        mensagemEl.textContent = "Por favor, digite sua idade!";
        return;
    }

    let idade = parseInt(idadeInput);

    if (idade >= 18) {
        mensagemEl.textContent = "Acesso permitido! Vamos jogar!";
        document.getElementById("area-idade").style.display = "none";
        document.getElementById("area-jogo").style.display = "block";
    } else {
        mensagemEl.textContent = "Acesso negado. Você precisa ter 18 anos ou mais.";
    }
}

function jogar(escolhaJogador) {
    let escolhaComputador = Math.floor(Math.random() * 3) + 1;
    let mensagemEl = document.getElementById("mensagem");

    let nomesJogadas = { 1: "Pedra", 2: "Papel", 3: "Tesoura" };
    let textoComputador = `O computador escolheu: ${nomesJogadas[escolhaComputador]}. `;

    if (escolhaJogador == escolhaComputador) {
        mensagemEl.textContent = textoComputador + "Empate!";
    } 
    else if (
        (escolhaJogador == 1 && escolhaComputador == 3) ||
        (escolhaJogador == 2 && escolhaComputador == 1) ||
        (escolhaJogador == 3 && escolhaComputador == 2)
    ) {
        mensagemEl.textContent = textoComputador + "🎉 Você venceu!";
    } 
    else {
        mensagemEl.textContent = textoComputador + "O computador venceu!";
    }
}