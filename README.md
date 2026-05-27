# 🍔 Delivery App

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express.js](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![License](https://img.shields.io/badge/License-ISC-blue)

---

# 🍟 Delivery App - Sistema de Delivery

Backend desenvolvido em Node.js inspirado em plataformas de delivery como iFood.

O projeto foi criado com foco no aprendizado de:

- Node.js
- Express.js
- MongoDB
- Programação Orientada a Objetos
- Sessões
- APIs REST
- Integração Frontend + Backend

---

## 📸 Preview do Projeto

### 🔹 Interface Web
- Login
- Cadastro de clientes
- Listagem de clientes

### 🔹 API REST
- CRUD de clientes
- CRUD de restaurantes
- CRUD de pedidos
- Sessões de autenticação

---

# 📌 Sobre o Projeto

O Delivery App é uma aplicação web backend desenvolvida utilizando Node.js puro inicialmente e posteriormente evoluída com Express.js.

O sistema simula uma plataforma de delivery permitindo:

- gerenciamento de clientes
- gerenciamento de restaurantes
- criação de pedidos
- atualização de status dos pedidos
- autenticação com sessões

---

# 🎯 Objetivos do Projeto

- Aplicar conceitos de Programação Orientada a Objetos (ES6 Classes)
- Trabalhar com Express.js
- Integrar MongoDB com Node.js
- Criar APIs REST
- Implementar autenticação com sessões
- Trabalhar com rotas e parâmetros
- Utilizar async/await
- Implementar persistência de dados

---

# ⚙️ Tecnologias Utilizadas

## Backend
- Node.js
- Express.js
- MongoDB
- express-session

## Banco de Dados
- MongoDB Community Server

## Frontend
- HTML5
- JavaScript
- Fetch API

## Versionamento
- Git
- GitHub

---

# 🧱 Arquitetura do Projeto

```txt
delivery-app
│
├── database
│   └── connection.js
│
├── logs
│   └── log.txt
│
├── models
│   ├── Cliente.js
│   ├── Pedido.js
│   └── Restaurante.js
│
├── public
│   └── index.html
│
├── utils
│   └── logger.js
│
├── server-http-antigo.js
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Funcionalidades

## 👤 Clientes
- ✔ Cadastrar cliente
- ✔ Listar clientes
- ✔ Deletar cliente

---

## 🍽️ Restaurantes
- ✔ Cadastrar restaurante
- ✔ Listar restaurantes
- ✔ Filtrar por categoria
- ✔ Deletar restaurante

---

## 🍕 Pedidos
- ✔ Criar pedido
- ✔ Listar pedidos
- ✔ Atualizar status
- ✔ Deletar pedido

---

## 🔐 Autenticação
- ✔ Login com sessão
- ✔ Middleware de proteção
- ✔ Logout

---

# 🌐 Rotas da API

## 🔐 Login

### POST `/login`

```json
{
  "email": "admin@email.com",
  "senha": "123456"
}
```

---

## 👤 Clientes

### GET `/clientes`

### POST `/clientes`

```json
{
  "nome": "João",
  "email": "joao@email.com",
  "endereco": "Rua A"
}
```

### DELETE `/clientes/:id`

---

## 🍽️ Restaurantes

### GET `/restaurantes`

### GET `/restaurantes?categoria=Pizza`

### POST `/restaurantes`

```json
{
  "nome": "Pizza Top",
  "categoria": "Pizza"
}
```

### DELETE `/restaurantes/:id`

---

## 🍕 Pedidos

### GET `/pedidos`

### POST `/pedidos`

```json
{
  "clienteId": "ID_CLIENTE",
  "restauranteId": "ID_RESTAURANTE",
  "itens": [
    "Pizza",
    "Refrigerante"
  ]
}
```

### PUT `/pedidos/:id/status`

```json
{
  "status": "entregue"
}
```

### DELETE `/pedidos/:id`

---

# ▶️ Como executar o projeto

## 🔹 Clonar o repositório

```bash
git clone https://github.com/claudineijr18/delivery-app.git
```

---

## 🔹 Entrar na pasta do projeto

```bash
cd delivery-app
```

---

## 🔹 Instalar dependências

```bash
npm install
```

---

## 🔹 Executar o servidor

```bash
node server.js
```

---

# 💻 Acessar aplicação

## Interface Web

```txt
http://localhost:3000
```

---

# 📦 Dependências Utilizadas

```bash
npm install express
npm install express-session
npm install mongodb
```

---

# 🔥 Conceitos Trabalhados

- Node.js
- Express.js
- MongoDB Driver
- ES6 Classes
- Async/Await
- Middleware
- Sessões
- CRUD
- API REST
- Fetch API
- JSON
- Programação Orientada a Objetos

---

# 👨‍💻 Autor

## Claudinei Jr

GitHub:
https://github.com/claudineijr18

---

# 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.
