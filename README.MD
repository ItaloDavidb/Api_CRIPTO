# Api Rest CRIPTO
## Uma simples API DE Criptocurrenci no qual você pode visualizar sua carteira, suas moedas e suas transações

## Pré-requisitos
- Um gerenciador de pacotes como o NPM ou o YARN
- Nodejs
- Mysql
- Javascript
- Ideal ter uma IDE como Visual Studio Code ou Eclipse para melhor visualização do código
- Postman ou Insomnia para fazer suas requests na sua db
---
## Como rodar está Api
Abra o seu terminal e clone o projeto:
```
git clone https://github.com/ItaloDavidb/Api_CRIPTO.git
```
Entre na pasta do projeto e instale as dependências:
```
cd API_CRIPTO
npm install
```
Após todas as dependências tiverem sido instaladas você irá precisar criar uma Database no Mysql
```
create database cripto
```
Criada sua database você irá precisar ir na pasta config, no arquivo config.json configure relativo a seu username,password e os outros
o padrão é criada no caminho abaixo:
```
{
  "development": {
    "username": "root",
    "password": "admin",
    "database": "cripto",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
Basta substituir a configuração relativo a sua


Após todas essas etapas é so rodar este comando,dentro da raiz da api:
```
npm run dev 
```
---
## Feito isso o terminal irá lhe retornar 
```

API ON

```
## E com isso sua Api estará On apenas esperando Requests que esses são:
- POST para inserir algo na db
- GET  no qual irá precisar colocar o ID na Url para visualização de 1 ou sem ID no qual irá retornar todos os items
- PUT para atualização de itens na db no qual irá precisar colocar o ID na Url
- DELETE para excluir um item da db no qual irá precisar colocar o ID na Url
## Para fazer estas requests terá que passar um URL na plataforma que estiver utilizando como o postman ou insomnia ou outra.
## Por padrão a URL vai ser:
- POST localhost:3000/api/v1/wallet no qual o contéudo da requisição deverá ir no body como JSON, nesse exemplo:
```
{
"nome": "Fulano de tal",
"cpf": "445.681.655-45",
"birthdate": "05/01/2000"
}
```
### Name precisa ter mais de 7 caracteres , cpf precisa ser valido, birthdate precisa ser maior de 18 anos contando com atual, 

- GET localhost:3000/api/v1/wallet irá retornar todos os items
- GET localhost:3000/api/v1/wallet/:id  substitua :id por um id valido e ele irá retornar o item correspondente a o id colocado
- PUT localhost:3000/api/v1/wallet/:id substitua :id por um id valido e preencha o body, assim como no post e altere os campos desejados
- DELETE localhost:3000/api/v1/wallet/:id substitua :id por um id valido, e ele irá deletar o item com o id correspondente
- GET localhost:3000/api/v1/wallet/:id/transaction para checar o historico da transação
### Caso tenha alterado a porta no default terá que levar em conta de substituir o localhost:3000... pela sua porta ficando algo como localhost:portaescolhida.
---
