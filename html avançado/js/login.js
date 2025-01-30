function inicializarTema() {
    const temaSalvo = localStorage.getItem("theme");
    const temaSistema = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (temaSalvo) {
        definirTema(temaSalvo)
    } else {
        if (temaSistema) {
            definirTema('dark')
        } else {
            definirTema('light')
        }
    }
}

function alternarTema() {
    const temaAtual = document.body.getAttribute("data-theme");

    if (!temaAtual) {
        temaAtual = "light";
    }

    let novoTema = "";
    if (temaAtual == "dark") {
        novoTema = "light";
    } else {
        novoTema = "dark";
    }

    definirTema(novoTema);
}

function definirTema(tema) {
    document.body.setAttribute("data-theme", tema);
    localStorage.setItem("theme", tema);

    if (tema === "dark") {
        botaoAlternarTema.textContent = "🌙";
    } else if (tema === "light") {
        botaoAlternarTema.textContent = "🌞";
    } else {
        botaoAlternarTema.textContent = "🌓";
    }
}

let botaoAlternarTema = document.getElementsByClassName("theme-toggle")[0];
botaoAlternarTema.addEventListener("click", alternarTema);

inicializarTema();