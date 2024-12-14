// Função responsável por apresentar ou ocultar as divs relacionadas à modalidade selecionada.
function apresentarDivModalidade() {
    // Obtém o valor do input 'modalidade' que está marcado (selecionado).
    let campoModalidade = document.querySelector("input[name='modalidade']:checked");
    let modalidade = campoModalidade.value;

    // Obtém as referências para as divs de 'mensalista' e 'horista'.
    let divMensalista = document.querySelector("#modalidade-mensalista");
    let divHorista = document.querySelector("#modalidade-horista");

    // Se a modalidade selecionada for 'horista', exibe a div de 'horista' e oculta a de 'mensalista'.
    if (modalidade === "horista") {
        divHorista.classList.remove("ocultar"); // Exibe a div de 'horista'.
        divMensalista.classList.add("ocultar"); // Oculta a div de 'mensalista'.

    // Se a modalidade selecionada for 'mensalista', exibe a div de 'mensalista' e oculta a de 'horista'.
    } else if (modalidade === "mensalista") {
        divMensalista.classList.remove("ocultar"); // Exibe a div de 'mensalista'.
        divHorista.classList.add("ocultar"); // Oculta a div de 'horista'.
    }
}

// Função responsável por preencher os valores do salário base e do valor da hora com base no cargo selecionado.
function preencherSalarioBaseValorHora() {
    // Obtém os elementos do DOM que contêm os campos para cargo, salário base e valor da hora.
    let campoCargo = document.querySelector("#campo-cargo");
    let campoSalarioBase = document.querySelector("#campo-salario-base-value");
    let campoValorHora = document.querySelector("#campo-valor-hora-value");

    // Obtém o valor do cargo selecionado.
    let cargo = campoCargo.value;
    let salario = 0; // Inicializa o salário com 0.

    // Formata os valores em moeda brasileira (R$).
    let formatadorMoeda = new Intl.NumberFormat('pt-BR', {
        style:'currency', // Define o estilo como moeda.
        currency: 'BRL'   // Define a moeda como Real (R$).
    });

    // Define o salário de acordo com o cargo selecionado.
    if (cargo === "Assistente") {
        salario = 1700.00; // Salário para o cargo 'Assistente'.
    } else if (cargo === "Junior") {
        salario = 2500; // Salário para o cargo 'Junior'.
    } else if (cargo === "Pleno") {
        salario = 4500; // Salário para o cargo 'Pleno'.
    } else {
        salario = 8000; // Salário para cargos superiores (outros casos).
    }

    // Exibe o salário formatado no campo de 'salário base'.
    campoSalarioBase.innerText = formatadorMoeda.format(salario);

    // Calcula o valor da hora dividindo o salário por 220 (quantidade de horas trabalhadas por mês).
    let valorHora = salario / 220;

    // Exibe o valor da hora formatado no campo de 'valor hora'.
    campoValorHora.innerText = formatadorMoeda.format(valorHora);
}

// Função responsável por calcular o salário baseado no valor da hora e quantidade de horas trabalhadas.
function calcular() {
    // Obtém o valor do campo que exibe o valor da hora e o campo que contém a quantidade de horas.
    let spanValorHora = document.querySelector("#campo-valor-hora-value");
    let campoQuantidadeHoras = document.querySelector("#campo-quantidade-horas");

    // Obtém o valor do campo 'valor hora' (em formato de texto), e remove o símbolo 'R$' e a vírgula.
    let valorHoraString = spanValorHora.innerText;
    valorHoraString = valorHoraString.replace("R$", "").replace(",", ".").trim();

    // Converte o valor da hora para número (float).
    let valorHora = parseFloat(valorHoraString);

    // Converte a quantidade de horas para número inteiro.
    let quantidadeHoras = parseInt(campoQuantidadeHoras.value);

    // Calcula o salário multiplicando o valor da hora pela quantidade de horas trabalhadas.
    let salario = valorHora * quantidadeHoras;

    // Exibe o salário calculado em uma janela de alerta.
    alert("Salário: " + salario);
}
