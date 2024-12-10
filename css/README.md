# Exercício: Explorando a Propriedade `margin`

Neste exercício, você irá aplicar o conceito de margens em elementos HTML utilizando a propriedade `margin` no CSS. O objetivo é entender como as margens afetam o espaçamento entre elementos na página.

## Enunciado

1. Crie um arquivo `index.html` com a estrutura básica de uma página HTML.
2. Adicione os seguintes elementos dentro do corpo (`<body>`) da página:
   - Um cabeçalho (`<h1>`) com o texto **"Bem-vindo ao Mundo do CSS"**.
   - Um parágrafo (`<p>`) explicativo com o texto **"Este é um exemplo para entender como as margens funcionam."**.
   - Um botão (`<button>`) com o texto **"Clique Aqui"**.
3. No arquivo CSS, adicione os seguintes estilos:
   - Defina uma margem de `20px` ao redor do cabeçalho (`<h1>`).
   - Aplique uma margem superior de `15px` e inferior de `30px` no parágrafo (`<p>`), deixando as margens laterais automáticas.
   - Configure margens diferentes em cada lado do botão: `10px` na parte superior, `20px` à direita, `30px` na parte inferior e `40px` à esquerda.

## Requisitos
- Utilize classes ou seletores diretamente para estilizar os elementos.
- Adicione um fundo ou borda nos elementos para visualizar melhor o efeito das margens.
- Teste a página em um navegador para verificar o espaçamento entre os elementos.



# Exercício: Explorando a Propriedade `padding`

Neste exercício, você irá aplicar o conceito de preenchimento interno (padding) nos elementos de uma página HTML. O objetivo é entender como o `padding` afeta o espaçamento interno e a apresentação visual de elementos.

## Enunciado

1. Crie um arquivo `index.html` com a estrutura básica de uma página HTML.
2. Adicione os seguintes elementos dentro do corpo (`<body>`) da página:
   - Uma `div` com a classe `caixa` contendo o texto **"Exemplo de Padding"**.
   - Um botão (`<button>`) com o texto **"Saiba Mais"** dentro da `div`.

3. No arquivo CSS, adicione os seguintes estilos:
   - Para a classe `.caixa`, aplique:
     - Um fundo (`background-color`) de cor clara.
     - Uma borda de 2px sólida com a cor que preferir.
     - Um `padding` de `30px`.
   - Para o botão dentro da `div`:
     - Um `padding` de `10px 20px` (10px verticalmente e 20px horizontalmente).
     - Um fundo (`background-color`) diferente da `div` para destacá-lo.
     - Uma borda arredondada usando a propriedade `border-radius`.ddiv.caixa




# Exercício: Explorando a Propriedade `border`

Neste exercício, você irá aplicar e configurar bordas em elementos HTML utilizando a propriedade `border` no CSS. O objetivo é entender como as bordas podem ser estilizadas e combinadas para criar designs personalizados.

## Enunciado

1. Crie um arquivo `index.html` com a estrutura básica de uma página HTML.
2. Adicione os seguintes elementos dentro do corpo (`<body>`) da página:
   - Uma `div` com a classe `caixa` contendo o texto **"Exemplo de Border"**.
   - Um botão (`<button>`) com o texto **"Explorar"** dentro da `div`.

3. No arquivo CSS, adicione os seguintes estilos:
   - Para a classe `.caixa`, configure:
     - Uma borda sólida de `5px` com cor personalizada.
     - Bordas arredondadas com `border-radius: 15px`.
     - Um fundo de cor clara e um `padding` interno de `20px`.
   - Para o botão dentro da `div`, aplique:
     - Uma borda pontilhada de `3px` e cor contrastante.
     - Um efeito de borda dupla ao passar o mouse (`hover`) sobre o botão.
     - Bordas arredondadas em `50%` para que o botão fique circular.

## Requisitos
- Utilize classes para estilizar os elementos.
- Inclua diferentes estilos de borda (`solid`, `dotted`, `double`) para explorar a flexibilidade da propriedade `border`.
- Teste o comportamento interativo com o efeito `hover` no botão.

# Exercícios de CSS
## Exercício 01
Criar uma página web para listar os itens do estoque, assim como, seu cadastro. Deve conter os seguintes itens
    - Listar os itens do estoque com as seguintes colunas
        - Código
        - Nome
        - Quantidade
        - Preço unitário
        - Coluna de ação (botão de desfazer entrada, botão de editar entrada)
    - Formulário para entrada de estoque do produto
        - Campo de seleção do produto
            - Preencher com 5 options, o value deve ser o código do produto
        - Campo de quantidade
        - Campo de preço unitário
        - Botão de cadastrar
Estilização da página:
    - A lista deve ficar a esquerda
        - As linhas da tabela devem ter hover
        - Os botões da tabela devem ser customizados na cor azul e laranja
    - O formulário deve ficar a direita
        - Os campos devem estar estlizados.