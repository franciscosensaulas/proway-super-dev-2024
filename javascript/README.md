# Exercícios Férias sobre `document.createElement` e manipulção de elementos

## Exercício 1: Criando um Parágrafo Simples
**Nível de Dificuldade: Fácil**

Crie um parágrafo (`<p>`) em JavaScript utilizando `document.createElement`. O parágrafo deve conter o texto "Olá, este é um parágrafo criado dinamicamente!". Adicione esse parágrafo ao final do corpo da página.

## Exercício 2: Criando uma Lista de Itens
**Nível de Dificuldade: Médio**

Crie uma lista ordenada (`<ol>`) em JavaScript, com três itens (`<li>`) dentro dela. Cada item da lista deve conter um texto representando uma tarefa, como: "Estudar JavaScript", "Praticar CSS", "Fazer exercícios". Adicione essa lista ao corpo da página.


## Exercício 3: Criando uma Tabela com Cabeçalho
**Nível de Dificuldade: Médio**

Crie uma tabela (`<table>`) em JavaScript com 3 colunas e 2 linhas de dados. A primeira linha deve ser um cabeçalho, com os títulos das colunas sendo "Nome", "Idade", "Profissão". A segunda linha deve conter valores fictícios, como: "João", "25", "Desenvolvedor". Adicione a tabela ao corpo da página.

## Exercício 4: Criando um Formulário com Inputs
**Nível de Dificuldade: Difícil**

Crie um formulário (`<form>`) em JavaScript com os seguintes campos:
- Um campo de texto para "Nome"
- Um campo de e-mail para "E-mail"
- Um botão para enviar

Adicione esse formulário ao corpo da página. O formulário não precisa ser funcional, apenas crie os elementos e adicione ao DOM. Certifique-se de usar `document.createElement` para criar cada um desses elementos.

## Exercício 5: Criando um Card com Imagem, Título e Descrição
**Nível de Dificuldade: Difícil**

Crie um "card" com os seguintes elementos:
- Uma imagem (`<img>`) com o atributo `src` apontando para uma URL qualquer de imagem
- Um título (`<h3>`) com o texto "Título do Card"
- Uma descrição (`<p>`) com o texto "Este é um exemplo de card criado dinamicamente com JavaScript."

Adicione esses elementos a uma `div` (a qual você também deve criar dinamicamente) e depois adicione a `div` ao corpo da página.

## Exercício 6: Adicionar e Modificar Texto de um Parágrafo
**Nível de Dificuldade: Médio**

Crie um parágrafo (`<p>`) dinamicamente com o texto "Clique no botão abaixo para mudar este texto!". Adicione o parágrafo ao corpo da página. Em seguida, crie um botão que, ao ser clicado, altera o texto do parágrafo para "Texto alterado com sucesso!".

## Exercício 7: Adicionar Itens à Lista
**Nível de Dificuldade: Médio**

Crie uma lista não ordenada (`<ul>`) e adicione três itens (`<li>`) com textos iniciais, como "Item 1", "Item 2", "Item 3". Depois, crie um botão que, ao ser clicado, adicione um novo item à lista com o texto "Novo Item".

## Exercício 8: Adicionar Imagem e Modificar com Clique
**Nível de Dificuldade: Difícil**

Crie uma imagem (`<img>`) e adicione-a ao corpo da página. O `src` da imagem pode ser qualquer URL de uma imagem. Em seguida, crie um botão que, ao ser clicado, altere o `src` da imagem para uma nova URL, fazendo com que a imagem seja substituída por uma nova.

## Exercício 9: Mostrar e Esconder um Elemento
**Nível de Dificuldade: Médio**

Crie um parágrafo (`<p>`) com o texto "Este é um parágrafo que será mostrado e escondido". Adicione esse parágrafo ao corpo da página. Em seguida, crie dois botões: um para mostrar o parágrafo e outro para escondê-lo.

## Exercício 10: Alterar Estilo de um Elemento
**Nível de Dificuldade: Difícil**

Crie um `div` com uma classe `box` e defina um fundo colorido e um tamanho. Adicione esse `div` ao corpo da página. Em seguida, crie um botão que, ao ser clicado, altere o fundo da `div` para uma nova cor (por exemplo, "blue").

---

## Dicas:

**Dica Exercício 1**: 
1. Use `document.createElement('p')` para criar o parágrafo.
2. Utilize `elemento.innerText` para definir o texto dentro do parágrafo.
3. Para adicionar o parágrafo ao corpo da página, use `document.body.appendChild(paragrafo)`.

**Dica Exercício 2**: 
1. Use `document.createElement('ol')` para criar a lista ordenada.
2. Para cada item da lista, use `document.createElement('li')` e defina o texto usando `li.innerText`.
3. Após adicionar os itens, adicione a lista ordenada ao corpo da página com `document.body.appendChild(lista)`.

**Dica Exercício 3**: 
1. Use `document.createElement('table')` para criar a tabela.
2. Crie a primeira linha (cabeçalho) com `document.createElement('tr')` e adicione as colunas (`<th>`) com `document.createElement('th')`.
3. Para a segunda linha, crie uma `<tr>` e adicione as células de dados (`<td>`) com `document.createElement('td')`.
4. Para adicionar as linhas à tabela, use `table.appendChild(tr)`.
5. Finalmente, adicione a tabela ao corpo da página com `document.body.appendChild(table)`.

**Dica Exercício 4**:
1. Use `document.createElement('form')` para criar o formulário.
2. Para o campo "Nome", crie um `input` com `type="text"` usando `document.createElement('input')`.
3. Para o campo "E-mail", crie outro `input` com `type="email"`.
4. Crie um botão com `document.createElement('button')` e defina seu tipo como "submit".
5. Não se esqueça de adicionar todos esses elementos ao formulário usando `form.appendChild()`.
6. Finalmente, adicione o formulário ao corpo da página com `document.body.appendChild(form)`.

**Dica Exercício 5**:
1. Crie uma `div` para servir como o contêiner do card com `document.createElement('div')`.
2. Crie a imagem com `document.createElement('img')`, e adicione o atributo `src` com `img.setAttribute('src', 'url-da-imagem')`.
3. Crie o título com `document.createElement('h3')` e defina o texto com `h3.innerText`.
4. Crie a descrição com `document.createElement('p')` e defina o texto com `p.innerText`.
5. Adicione a imagem, o título e a descrição à `div` com `div.appendChild()`.
6. Por fim, adicione a `div` ao corpo da página com `document.body.appendChild(div)`.

**Dica Exercício 6**:
1. Crie o parágrafo com `document.createElement('p')` e defina o texto com `innerText`.
2. Crie o botão com `document.createElement('button')` e defina seu texto.
3. Adicione um evento de clique no botão que altere o texto do parágrafo usando `innerText` novamente.

**Dica Exercício 7**:
1. Crie a lista não ordenada (`<ul>`) e os itens (`<li>`) com `document.createElement('li')`.
2. Adicione os itens à lista com `appendChild()`.
3. Adicione um botão com `document.createElement('button')` e um evento de clique que adicione um novo item à lista.

**Dica Exercício 8**:
1. Crie a imagem com `document.createElement('img')` e defina o atributo `src` com `setAttribute()`.
2. Crie o botão e adicione um evento de clique para alterar o atributo `src` da imagem usando `setAttribute('src', 'nova-url')`.

**Dica Exercício 9**:
1. Crie o parágrafo com `document.createElement('p')` e defina o texto com `innerText`.
2. Crie dois botões com `document.createElement('button')` e defina o texto dos botões.
3. Adicione eventos de clique para ambos os botões, um para exibir o parágrafo (`paragrafo.style.display = 'block'`) e outro para escondê-lo (`paragrafo.style.display = 'none'`).

**Dica Exercício 10**:
1. Crie a `div` com `document.createElement('div')` e adicione uma classe com `classList.add('box')`.
2. Defina o estilo da `div` usando `div.style`.
3. Crie o botão e adicione um evento de clique para alterar o estilo da `div` com `div.style.backgroundColor = 'blue'`.
