let cargo = prompt("Digite o seu cargo");
let anosCasa = parseInt(prompt("Digite a quantidade de anos de casa"));

let salario = 0;
if (cargo === "Desenvolvedor Júnior") {
    salario = 2200.00;
} else if (cargo === "Desenvolvedor Pleno") {
    salario = 5000.00;
} else if (cargo === "Desenvolvedor Senior") {
    salario = 8000.00;
} else if (cargo === "Especialista I") {
    salario = 12000;
} else if (cargo === "Especialista II") {
    salario = 17000;
}
// 1 ano  => 50%
// 2 anos => 75%
// 3 anos => 100%
// 5 anos => 125%
// 7 anos => 150% 7,8,9 anos
// 10 anos => 200% 

let percentualPlr = 0;
if (anosCasa === 1) {
    percentualPlr = 0.5;
} else if (anosCasa === 2) {
    percentualPlr = 0.75;
} else if (anosCasa <= 4) {
    percentualPlr = 1;
} else if (anosCasa <= 6) {
    percentualPlr = 1.25;
} else if (anosCasa <= 9) {
    percentualPlr = 1.50;
} else {
    percentualPlr = 2.00;
}

let plr = salario * percentualPlr;
alert(
    "Cargo: " + cargo +
    "\nAnos de casa: " + anosCasa +
    "\nSalário: " + salario +
    "\nPercentual PLR: " + percentualPlr +
    "\nPLR: " + plr);