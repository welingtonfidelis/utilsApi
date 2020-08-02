
# UtilsAPI

Conjunto de métodos/ferramentas genéricas pra uso geral para atender a necessidade de outras APIs ou sistemas/aplicativos web, como disparo de email.

## Requisitos

* [NodeJs] - Nodejs 10 ou superior;
* [Sendgrid] - Uma conta (gratuita ou não) na API sendgrid, para uso da chave de autenticação neste projeto;
* Gmail/Hotmail - Uma conta gmail ou hotmail configurada para acesso de aplicativos externos, utilizada para envio de email através do [nodemailer];

## Instalação

Clonar este repositório, dentro da pasta criada, criar um arquivo **.env** contendo informações de acesso e autenticação para APIs/serviços de terceiros (observer o .env.example para mais detalhes). Em seguida, execute o comando ``npm install`` para que as dependências necessárias sejam instaladas. Por fim, execute `npm start` para que o projeto seja executado na porta 3001 (esta porta pode ser alterada através do */src/server.js*).

## Utilizando a aplicação

### Login
Visando um mínimo de segurança no acesso das rotas disponíveis desta API, é necessário o envio de um [token] obtido atraveś da rota de login. Para conseguir um token válido, faça uma requisição para a rota *http://localhost:3001/login* contendo no body o usuário e senha incluidos no **.env** criado na raiz do projeto. Mais detalhes abaixo.

```
{
    "user": "validUser",
    "password": "validPassword"
}
```

### Disparo de emails
**Sendgrid**: Para enviar emails através da API [sendgrid], execute uma requisição http para a rota *http://localhost:3001/sendmail/sendgrid* contendo no body o email remetente, email destinatário [um array de emails ou um email único], o email de cópia (um array de emails ou um email único. Variável **opcional** ), a mensagem (pode ser um html) e o assunto, no header inclua o token (Authorization) obtido no login. Mais de detalhes abaixo.

```
ROUTE 
http://localhost:3001/sendmail/sendgrid

HEADER
Authorization R5cCI6IkpXVCJ9.TYzNjU2NTZ9.1deHHEMRy1GJ0

BODY
{
    "mailFrom": "from@email.com",
    "mailTo": ["to1@email.com", "to2@email,com"],
    "message": "<h1>Email test</h1>",
    "subject": "Email test",
    "mailCc": ["cc@email.com"]
}
```

**Nodemailer**: Para enviar emails através da biblioteca [nodemailer] utilizando uma conta de email válida, execute uma requisição http para a rota *http://localhost:3001/sendmail/nodemailer* contendo no body o email remetente, email destinatário [um array de emails ou um email único], o email de cópia (um array de emails ou um email único. Variável **opcional** ), a mensagem (pode ser um html) e o assunto, no header inclua o token (Authorization) obtido no login. Mais de detalhes abaixo.

```
ROUTE 
http://localhost:3001/sendmail/nodemailer

HEADER
Authorization R5cCI6IkpXVCJ9.TYzNjU2NTZ9.1deHHEMRy1GJ0

BODY
{
    "mailFrom": "welington.fidelis@hotmail.com",
    "mailTo": ["welingtonfidelis@gmail.com", "welington.fidelis@tech4h.com.br"],
    "message": "<h1>Teste de email</h1>",
    "subject": "Teste de email",
    "mailCc": ["cc@email.com"]
}
```

### Postman Collection
Caso deseje importar as requisições citadas acima para o [postman], faça o download e importação [deste arquivo].  

## Contato

welingtonfidelis@gmail.com

Sugestões e pull requests são sempre bem vindos =)

  

License

----

  

MIT

  

**Free Software, Hell Yeah!**

  

[//]:  #  (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

  
[token]: <https://jwt.io/>
[sendgrid]: <https://sendgrid.com/docs/>
[nodemailer]: <https://nodemailer.com/about/>
[NodeJs]: <https://nodejs.org/en/>
[postman]: <https://www.postman.com/>
[deste arquivo]: <https://drive.google.com/file/d/1uqX-4GRDolYe1CaL6XipjRjXwwwTmWWL/view?usp=sharing>
