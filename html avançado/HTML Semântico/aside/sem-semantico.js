function apresentarSubmenu(event){
    let botaoQueOcorreuClick = event.target;
    let submenuId = botaoQueOcorreuClick.getAttribute("data-submenu");

    let ulSubmenu = document.getElementById(submenuId);
    ulSubmenu.classList.toggle("hidden-items")
    
}

let botoesMenu = document.getElementsByClassName("toggle-button");
for (let i = 0; i < botoesMenu.length; i++) {
    const botaoMenu = botoesMenu[i];
    // botaoMenu.onclick += apresentarSubmenu;
    botaoMenu.addEventListener("click", apresentarSubmenu);
}