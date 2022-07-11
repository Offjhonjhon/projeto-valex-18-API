<p align="center">
  <a href="https://github.com/$username-github/$nome-repositorio">
    <img src="./readme.png" alt="readme-logo" width="80" height="80">
  </a>

  <h3 align="center">
    $nome-repositorio
  </h3>
</p>

## Usage

```bash
$ git clone https://github.com/$username-github/$nome-repositorio

$ cd $nome-repositorio

$ npm install

$ npm run dev
```

API:

```
- POST /card/create
    - Rota para cadastrar um novo cartão para o empregado
    - headers: {x-api-key}
    - body: {
        "employeeId" : 0,
        "cardType" : "restaurant"
    }
- PUT /card/activate
    - Rota para fazer a ativação do cartão, ou seja adicionar uma senha de uso.
    - headers: {}
    - body: {
    "id": 1,
    "securityCode": "413",
    "password": "4123
    }
- GET /usuarios (autenticada)
    - Rota para listar todos os usuários
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
- GET /usuarios/:id (autenticada)
    - Rota para listar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
- PUT /usuarios/:id (autenticada)
    - Rota para atualizar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {
        "nome": "Lorem ipsum2",
        "email": "lorem2@gmail.com",
        "senha": "loremipsum2"
    }
- DELETE /usuarios/:id (autenticada)
    - Rota para deletar um usuário pelo id
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```