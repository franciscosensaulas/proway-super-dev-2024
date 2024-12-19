let botaoCriarCampos = document.querySelector("#criar-campo");

// Escopo dele é global
let numeroDaSorte = 0;

let quantidadeTentaivas = 5;

function criarCampo() {
  // Criar uma tag label
  let labelNumero = document.createElement("label");
  labelNumero.innerText = "Digite um número";
  // Link da label com o input
  labelNumero.htmlFor = "numero-sorte";

  // Criando uma tag input
  let campoNumero = document.createElement("input");
  // Definir que será um campo de número
  campoNumero.type = "number";
  campoNumero.id = "numero-sorte";
  // campoNumero.step = "0.01";

  // Adicionar o evento de apertar a tecla do enter, chamando a função para verificar
  // se o usuário descobriu o número da sorte
  campoNumero.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
      validarNumeroDigitado(evento);
    }
  });

  // Obter o body da página
  let body = document.querySelector("body");
  // Adicionar a label no body
  body.appendChild(labelNumero);
  // Adicionar o campo no body
  body.appendChild(campoNumero);

  // Definir o foco no campo do número
  campoNumero.focus();

  // Chamar função que gerará o número da sorte para o usuário descobrir
  gerarNumeroDaSorte();
  // Chamar função que desabilitará o botão de criar campo
  desabilitarBotao();
}

function validarNumeroDigitado(event) {
  // event é uma forma de obtermos a tag html que ocorreu aquele evento
  let campoNumero = event.target;
  // Obter o número que o usuário digitou
  let numeroDigitou = parseInt(campoNumero.value);

  if (numeroDigitou === numeroDaSorte) {
    alert("Acertou o número da sorte");
    return;
  }

  let diferenca;
  // Verificar se o número digitado é maior que o número da sorte, isso
  // é necessário pois a diferença não deve ser negativa
  if (numeroDigitou > numeroDaSorte) {
    // Subtrair do número digitado o número da sorte
    diferenca = numeroDigitou - numeroDaSorte;
  } else {
    // Subtrair do número da sorte o número digitado
    diferenca = numeroDaSorte - numeroDigitou;
  }

  quantidadeTentaivas = quantidadeTentaivas - 1;

  console.log(
    "Diferença: " + diferenca + "\nNúmero da sorte: " + numeroDaSorte
  );
  let mensagem = "";
  if (diferenca <= 3) {
    mensagem = "Pelando";
  } else if (diferenca <= 8) {
    mensagem = "Quente";
  } else if (diferenca <= 35) {
    mensagem = "Frio";
  } else {
    mensagem = "Congelando";
  }

  // Chamando a função passando como parâmetro a mensagem de feedback que será exibida no span

  if (quantidadeTentaivas <= 0) {
    alert("Game Over");
    campoNumero.value = "";
    mensagem = "Game Over";
    // campoNumero.disabled = true;
    quantidadeTentaivas = 5;
    gerarNumeroDaSorte();
  } else {
    criarSpanMensagemFeedback(mensagem);
    campoNumero.focus();
  }
}

function criarSpanMensagemFeedback(mensagemFeedback) {
  // Verificar se o span com o id mensagem já existe
  let span = document.querySelector("#mensagem");
  // Verifica que o span não existe
  if (span === null) {
    // Criar a span e adicionar no body
    span = document.createElement("span");
    span.id = "mensagem";

    let body = document.querySelector("body");
    body.appendChild(span);
  }
  // Definir a mensagem para o usuário do quão perto está do número da sorte ou não
  span.innerText = mensagemFeedback;
}

function desabilitarBotao() {
  // Desabilitar o botão para o usuário n criar multiplos campos
  botaoCriarCampos.disabled = true;
  // Forma alternativa de desabilitar o botão
  // botaoCriarCampos.setAttribute("disabled", "disabled");

  botaoCriarCampos.style.display = "none";
}

function gerarNumeroDaSorte() {
  // Gerar um número aleatório decimal ex.: 0.9581490129697068
  let numeroAleatorioDecimal = Math.random();
  // 95.81490129697068
  numeroAleatorioDecimal = numeroAleatorioDecimal * 100;
  // Obter somente o 95
  let numeroAleatorioInteiro = Math.round(numeroAleatorioDecimal);
  // Armazenar na variável numeroDaSorte(espoco global) o valor da variável que tem o scopo da função
  numeroDaSorte = numeroAleatorioInteiro;
}

botaoCriarCampos.onclick = criarCampo;
