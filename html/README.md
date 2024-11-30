# Exerícios 

# Exercício 01

Cria uma página que contanha as seguintes listas:
- Lista de Frutas Ordenada (6 itens)
- Lista de Carnes Não ordenada (3 itens)
- Lista de Comidas não saudáveis ordenada (8 itens)


# Exercício 02

Criar 3 páginas de cidades para promover pontos turísticos

Cada página deve conter:
- Título e subtítulo
- 3 imagens por página
- 2 parágrafos por página
- Lista ordenada ou não ordeanda do que tem para fazer na cidade

Obs.: Cria um menu de navegação entre elas com tag a

# Exerício 03

Criar uma página de cadastro de jogo com os seguintes campos:
- Nome *
- Idade mínima (number) *
- Preço (number) *
- Imagem do jogo

Enviar os dados para https://localhost:4000/jogo/registrar 

Método GET

Criar uma página de cadastro de paciente com os seguitens campos:
- Nome *
- Sobrenome *
- Apelido
- Peso *
- Altura *
- Idade *
- Observação (campo multilinha)

Enviar os dados para https://meusite.com.br/paciente/entrada

Método POST

Criar uma página de cadastro de usuário
- Nome
- E-mail
- Senha
- Confirmação de Senha
- Data de Nascimento (datetime-local)

https://dontpad.com/faulas/superdev


### Exercício 04
Criar uma página com os seguintes campos:
- Nome do pet (mínimo de 3 caracteres, máximo de 20 caracteteres)
- Raça do pet (select, colocar 10 raças de cachorros)
- Castrado ou não (radio)
- Data de nascimento (valor mínimo 17 anos para trás, valor máximo hoje)

### Exercício 05
Criar uma página de cadastro de colaborador com os seguintes campos:
- Nome (mínimo de 5 caracteres, máximo de 30 caracteteres)
- Sobrenome (mínimo de 5 caracteres, máximo de 30 caracteteres)
- CPF (mínimo de 14 caracteres, máximo de 14 caracteteres, com pattern para validar o formato do cpf)
- CNPJ (mínimo de 18 caracteres, máximo de 18 caracteteres, com pattern para validar o formato do cnpj)
- Quantidade de horas (mínimo de 40, máximo de 300)
- Valor hora (mínimo de R$ 15,00, máximo de R$ 45,00)
- Data de entrada na empresa (data n pode ser maior que data atual)
- Tipo de colaborador select (PJ/PF)

### Exercício 06: Cadastro de Livro
Crie uma página HTML para cadastro de um livro com os seguintes campos:
- Título do livro (mínimo de 3 caracteres, máximo de 100 caracteres)
- Autor (mínimo de 3 caracteres, máximo de 50 caracteres)
- Ano de publicação (campo de data, com valor mínimo de 1900 e máximo de 2024)
- Gênero (select com pelo menos 5 opções de gêneros literários como: Romance, Ficção Científica, Fantasia, História, Biografia)
- Número de páginas (mínimo de 50, máximo de 2000)

---

### Exercício 07: Cadastro de Produto
Crie uma página HTML para cadastro de um produto em uma loja online com os seguintes campos:
- Nome do produto (mínimo de 3 caracteres, máximo de 50 caracteres)
- Categoria (select, com pelo menos 5 categorias, como: Eletrônicos, Roupas, Alimentos, Cosméticos, Brinquedos)
- Preço (campo numérico, mínimo R$ 5,00, máximo R$ 5000,00)
- Quantidade em estoque (mínimo 1, máximo 1000)
- Data de validade (campo de data, não podendo ser uma data anterior ao dia atual)

---

### Exercício 08: Cadastro de Evento
Crie uma página HTML para cadastro de um evento com os seguintes campos:
- Nome do evento (mínimo de 5 caracteres, máximo de 50 caracteres)
- Data do evento (campo de data, não podendo ser uma data anterior ao dia atual)
- Local do evento (mínimo de 3 caracteres, máximo de 100 caracteres)
- Número de participantes esperados (mínimo 10, máximo 1000)
- Tipo de evento (select com 3 opções: Online, Presencial, Híbrido)

---

### Exercício 09: Cadastro de Estudante
Crie uma página HTML para cadastro de um estudante com os seguintes campos:
- Nome do estudante (mínimo de 5 caracteres, máximo de 50 caracteres)
- Idade (campo numérico, mínimo 5 anos, máximo 100 anos)
- Curso (select com pelo menos 5 opções de cursos, como: Engenharia, Medicina, Direito, Administração, Ciências da Computação)
- Matrícula (mínimo de 10 caracteres, máximo de 20 caracteres)
- Data de nascimento (campo de data, com valor mínimo de 18 anos atrás, e valor máximo de hoje)

---

### Exercício 10: Cadastro de Veículo
Crie uma página HTML para cadastro de um veículo com os seguintes campos:
- Marca (mínimo de 3 caracteres, máximo de 50 caracteres)
- Modelo (mínimo de 3 caracteres, máximo de 50 caracteres)
- Ano de fabricação (campo de data, com valor mínimo de 1950 e máximo de 2024)
- Cor (mínimo de 3 caracteres, máximo de 20 caracteres)
- Placa (campo de texto, mínimo de 7 caracteres, com pattern para validar o formato da placa)


## Outros exercícios
1. Sistema de Biblioteca Online
Página principal (biblioteca.html):

Deve conter links para as páginas:
Cadastro de Livros (livro-cadastro.html)
Lista de Livros (livros.html)
Cadastro de Cliente(cliente-cadastro.html)
Lista de Clientes(clientes.html)

Página de Cadastro de Livros (livro-cadastro.html)
- Título do livro
- Autor
- Categoria (select colocar 6 categorias como options)
- ISBN
- Data de publicação
- Preço
[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-[0-9][0-9]

Página de Lista de Livros (livros.html) / Preencher com 4 livros existentes

Deve exibir uma tabela com:
- Nome do livro
- Nome do autor
- ISBN

Página de Cadastro de Cliente (cliente-cadastro.html)
- Nome
- Sobrenome
- CPF
- Data de Nascimento
- Foto de perfil
Lembrar de colocar name, id e required para campos obrigatórios


Página de Lista de Clientes (clientes.html) / Preencher com 6 clientes (utilizar http://www.4devs.com.br)

Utilizar uma tabela
- Nome Completo
- CPF
- Idade

Página de Lista das Reservas dos Livros


Página de Cadastro de Reservas de Livro
Cliente (select)
Livro (select)
Data de Entrada
Data de Término