git: Controle de versão de arquivos


git init - Inicializar o repositório
git clone "<link-repo.git>" - Fazer o download do código para sua máquina

git config --global user.name "<seu nome aqui>" - Definir qual será o nome do usuário para os commits
git config --global user.email "<seu email aqui>" - Definir qual será o e-mail do usuário para os commits
git add <nome-arquivo> - Adicionar um arquivo para posteriormente fechar um pacote e enviar para o GitHub
git add . - Adicionar todos os arquivos para posteriormente fechar um pacote(commit) e enviar para o GitHub

git status - Obter o status dos arquivos adicionados e não adicionados para um futuro commit
git commit --message "<sua mensagem aqui>" - Fechar o pacote com as modificações
git remote add origin "<link-repo.git>" - Adicionar o lugar que os pacotes serão enviados (no caso GitHub, GitLab)
git push origin main - Enviar os pacotes fechados para o GitHub
git pull origin main - Obter os pacotes fechados do GitHub para sua máquina
git log - Verificar os pacotes fechados
git fetch - Descobrir novas atualizações do repositório no GitHub
