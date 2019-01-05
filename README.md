# API RESTFUL de playlists
### Tecnologias:
* MongoDB
* NodeJS
* Express
* JWT

### Para executar a API:

1. Baixe todas depedências do projeto com o comando: **npm install**
2. Banco online hospedado no MLab, mas caso queira usar seu próprio banco de bancos, configure no arquivo **app.js**.
3. Execute o sistema no nodemon com o comando: **npm start**.

### Endpoints REST:

**Autenticar- Gerar token**
>POST: /login

1. Usuario com perfil de admin: **login: admin, senha: admin**
2. Coloque o token no header 'Authorization' das requisições.


**Buscar:**
>GET:  /playlists

>GET: /users

**Buscar por id:**
>GET:  /playlists/id

>GET:  /playlists/id

**Cadastro :**
>POST: /playlists

    {  
            "nome": "playlist teste",
            "descricao": "playlist teste",
            "musicas": ["musica teste"]
        } 
        
>POST: /users

    {  
            "nome": "teste",
            "username":"admin"
            "password": "admin",
            "roles": ["admin"]
        } 
        

**Edição:**
>PUT: /playlists/id

>PUT: /users/id

**Exemplo do body no endpoint de POST**

**Remoção:**
>DELETE: /playlists/id

>DELETE: /users/id









        
