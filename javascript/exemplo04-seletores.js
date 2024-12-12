// O que é a função: é um trecho de código que tem como objetivo resolver algum problema
function ocultarDiv() {
    // let é usado para criar variáveis
    // divTag é uma variável que receberá a div
    // document é a propria página html
    // querySelector é utilizado para selecionar um elemento por um critério.
    //      pode ser por tag 'querySelector("div")
    //      pode ser por classe 'querySelector(".nome-classe")'
    //      pode ser por id 'querySelector("id-tag")'
    let divTag = document.querySelector("#div-apresentada");
    // Através do JavaScript estou alterando a propriedade CSS da div
    // display none é a forma de ocultar o elemento da página
    divTag.style.display = 'none';
    console.log(divTag);
}

function apresentarDiv() {
    let divTag = document.querySelector("#div-apresentada");
    divTag.style.display = "block";
}

function acaoBotaoApresentarOcultar() {
    let divTag = document.querySelector("#div-apresentada");
    // Se a div for oculta devo apresentar
    if (divTag.style.display === "none") {
        apresentarDiv(); // quando estiver ocultado => display none
    } else {
        ocultarDiv(); // quando estiver apresentado display block
    }
}

function alterarCorDiv(){
    // Buscar o elemento na página que contém a class="div-cor-azul"
    let div = document.querySelector(".div-cor-azul")
    div.style.backgroundColor = "aqua";
    div.style.height = "300px";
    div.style.textAlign = "center";
    div.style.color = "red";
    div.style.fontWeight = "bold";
}

function estilizarDiv(){
    let div = document.querySelector("#div-sem-estilizacao");
    // Adicionar a classe na lista de classes
    // classList é a lista de classes que aquele elemento(tag) contém
    div.classList.add("div-estilizada");
}

function alterarTitulo(){
    let h1 = document.querySelector("#titulo"); // # é utilizado para id
    h1.innerText = "Exemplos de seletores";
}

function incrementar(){
    let span = document.querySelector("span");
    let conteudoSpanString = span.innerText; // retorna uma string
    let numero = parseInt(conteudoSpanString);
    let numeroIncrementado = numero + 1;

    if (numeroIncrementado > 10)
        return
    // Alterar o texto da tag span para o novo número
    span.innerText = numeroIncrementado;
}
function decrementar(){
    let span = document.querySelector("span");
    let conteudoSpanString = span.innerText; // retorna uma string
    let numero = parseInt(conteudoSpanString);
    let numeroDecrementado = numero - 1;

    if (numeroDecrementado < -10)
        return

    span.innerText = numeroDecrementado;
}