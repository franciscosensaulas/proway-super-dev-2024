// Solicitar para o usuário o nome
let nome = prompt("Digite o nome")

// Solicitar para o usuário a quantidade
let quantidade = parseInt(prompt("Digite a quantidade"))

// Solicitar para o usuário o preço
let preco = parseFloat(prompt("Digite o preço"))

// parseInt faz a conversão do que o usuário preenche(vem como string) para int
// parseFloat faz a conversão do que o usuário preenche(vem como string) para float (números reais, ex.: 2940.30)
let totalParcial = quantidade * preco
let desconto = 0

// Se a quantidade for menor que 100 dar um desconto de R$ 5,00
if (quantidade < 100){
    desconto = 5.00
} else if(quantidade < 500) { // Quantidade menor 500 dar um desconto de R$ 35,42
    desconto = 35.42
} else { // Senão o desconto será de R$ 70,00
    desconto = 70.00
}
let totalPedido = (quantidade * preco) - desconto
alert(
    "Produto:" + nome +
    "\nQuantidade: " + quantidade + 
    "\nPreço unitário: " + preco +
    "\nDesconto: " + desconto + 
    "\nTotal Pedido: " + totalPedido);

// Operadores relacionais
// ===  Igual
// <    Menor
// <=   Menor ou igual
// >    Maior
// >=   Maior ou igual
// !=   Diferente

