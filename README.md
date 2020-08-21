# Simple Social Media App

Aplicação simples de posts e comentários

## Instalação de Dependências

Antes de rodar o servidor e a aplicação, é necessário baixar os arquivos de dependências da pasta node_modules para dentro de seus respectivos diretórios, logo, para baixar as dependências do servidor, entre na pasta "server" e rode o comando abaixo no terminal:

```console
npm install
```

E no caso da aplicação, entre na pasta "web" e rode o seguinte comando no terminal:

```console
yarn install
```

## Como Rodar o Servidor da Aplicação?

Antes de efetivamente rodar o servidor da aplicação, é necessário criar o banco de dados do sistema. Assim, basta acessar a pasta "server", e dentro desse diretório rodar no terminal o seguinte comando:

```console
npm run knex:migrate
```

Ou então caso esteja utilizando yarn:

```console
yarn knex:migrate
```

Após a criação do banco de dados, para rodar o servidor, ainda dentro da pasta "server", é só rodar o seguinte comando no terminal:

```console
npm run start
```

Ou no caso do yarn:

```console
yarn start
```

## Como Rodar a Aplicação?

No caso da aplicação não existe a necessidade de configurações adicionais, é só entrar dentro da pasta "web", e rodar o seguinte comando:

```console
npm start
```

Ou no caso do yarn

```console
yarn start
```
