// Obtém os elementos do DOM que contêm os campos para cargo, salário base e valor da hora.
let campoCargo = document.querySelector("#campo-cargo");
let campoSalarioBase = document.querySelector("#campo-salario-base-value");
let campoValorHora = document.querySelector("#campo-valor-hora-value");
// Obtém as referências para as divs de 'mensalista' e 'horista'.
let divMensalista = document.querySelector("#modalidade-mensalista");
let divHorista = document.querySelector("#modalidade-horista");
// Obtém o valor do campo que exibe o valor da hora e o campo que contém a quantidade de horas.
let spanValorHora = document.querySelector("#campo-valor-hora-value");
let campoQuantidadeHoras = document.querySelector("#campo-quantidade-horas");

let campoMesReferencia = document.querySelector("#campo-mes-referencia");
let campoAnoReferencia = document.querySelector("#campo-ano-referencia");
let campoPlanoSaude = document.querySelector("#campo-plano-saude");
let campoPlanoOdontologico = document.querySelector("#campo-plano-odontologico");
let campoAuxilioCreche = document.querySelector("#campo-auxilio-creche");

// Função responsável por apresentar ou ocultar as divs relacionadas à modalidade selecionada.
function apresentarDivModalidade() {
    // Obtém o valor do input 'modalidade' que está marcado (selecionado).
    let campoModalidade = document.querySelector("input[name='modalidade']:checked");
    let modalidade = campoModalidade.value;

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
    // Obtém o valor do cargo selecionado.
    let cargo = campoCargo.value;

    let salario = obterSalarioPorCargo(cargo);

    // Calcula o valor da hora dividindo o salário por 220 (quantidade de horas trabalhadas por mês).
    let valorHora = calcularValorPorHoraDoHorista(salario);

    // Exibe o salário formatado no campo de 'salário base'.
    campoSalarioBase.innerText = formatarMoeda(salario);
    // Exibe o valor da hora formatado no campo de 'valor hora'.
    campoValorHora.innerText = formatarMoeda(valorHora);
}

function calcular() {
    let campoModalidade = document.querySelector("input[name='modalidade']:checked");
    // Validar que a modalidade foi escolhida
    if(campoModalidade === null){
        alert("Escolha uma modalidade")
        return;
    }

    let modalidade = campoModalidade.value;

    let cargo = campoCargo.value;
    // Validar que o cargo foi escolhido
    if (cargo === ""){
        alert("Escolha o cargo")
        return;
    }

    let salarioBase = obterSalarioPorCargo(cargo);
    let salarioBruto = 0;

    if (modalidade === "horista") {
        let valorHora = calcularValorPorHoraDoHorista(salarioBase);
        if(campoQuantidadeHoras.value === ""){
            alert("Preencher a quantidade de horas");
            campoQuantidadeHoras.focus();
            return;
        }

        let quantidadeHoras = parseInt(campoQuantidadeHoras.value);
        salarioBruto = calcularSalarioBrutoHorista(valorHora, quantidadeHoras);
    } else {
        salarioBruto = salarioBase;
    }

    let descontoPlanoSaude = obterDescontoPorPlanoSaude(campoPlanoSaude.value);
    let descontoPlanoOdontologico = obterDescontoPorPlanoOdontologico(
        campoPlanoOdontologico.checked);

    let auxilioCreche = obterAcrescimoAuxilioCreche(campoAuxilioCreche.checked);
    let salarioLiquido = calcularSalarioLiquido(
        salarioBruto, descontoPlanoOdontologico, descontoPlanoSaude, auxilioCreche);

    alert(
        "Salário Bruto: " + formatarMoeda(salarioBruto) +
        "\nDesconto Plano Saúde: " + formatarMoeda(descontoPlanoSaude) +
        "\nDesconto Plano Odontológico: " + formatarMoeda(descontoPlanoOdontologico) +
        "\nAuxílio Creche: " + formatarMoeda(auxilioCreche) +
        "\nAuxilio Home Office: " + formatarMoeda(150) +
        "\nVR: " + formatarMoeda(1000) +
        "\nSalário Líquido: " + formatarMoeda(salarioLiquido));
}

function obterSalarioPorCargo(cargo) {
    let salario = 0;
    if (cargo === "Assistente") {
        salario = 1700.00; // Salário para o cargo 'Assistente'.
    } else if (cargo === "Junior") {
        salario = 2500; // Salário para o cargo 'Junior'.
    } else if (cargo === "Pleno") {
        salario = 4500; // Salário para o cargo 'Pleno'.
    } else {
        salario = 8000; // Salário para cargos superiores (outros casos).
    }
    return salario;
}

function formatarMoeda(valor) {
    // Formata os valores em moeda brasileira (R$).
    let formatadorMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency', // Define o estilo como moeda.
        currency: 'BRL'   // Define a moeda como Real (R$).
    });

    let valorFormatado = formatadorMoeda.format(valor);
    return valorFormatado;
}

function obterDescontoPorPlanoSaude(planoSaude) {
    if (planoSaude === "Sem") {
        return 0;
    }

    if (planoSaude === "Básico") {
        return 40;
    }

    if (planoSaude === "Intermediário") {
        return 300;
    }

    return 550;
}

function obterDescontoPorPlanoOdontologico(planoOdontologico) {
    if (planoOdontologico === true) {
        return 50;
    }

    return 0;
}

function obterAcrescimoAuxilioCreche(auxilioCreche) {
    if (auxilioCreche === true) {
        return 100;
    }
    return 0;
}

function calcularValorPorHoraDoHorista(salario) {
    let valorHora = salario / 220;
    return valorHora;
}

function calcularSalarioBrutoHorista(valorHora, quantidadeHoras) {
    let salarioBruto = valorHora * quantidadeHoras;
    return salarioBruto;
}

function calcularSalarioLiquido(
    salarioBruto, descontoPlanoOdontologico, descontoPlanoSaude, auxilioCreche) {
    let descontos = descontoPlanoOdontologico + descontoPlanoSaude;
    let vr = 1000;
    let auxilioHomeOffice = 150;
    let acrescimos = auxilioCreche + auxilioHomeOffice + vr;
    let salarioLiquido = salarioBruto - descontos + acrescimos;
    return salarioLiquido;
}