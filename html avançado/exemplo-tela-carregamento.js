function terminarCarregament(){
    let divCarregando = document.getElementById("loading");
    divCarregando.style.display = "none";
    
    let main = document.getElementsByTagName("main")[0];
    main.style.display = "block";
}

window.addEventListener("load", terminarCarregament);