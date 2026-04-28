# 🍔 Delivery App

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![License](https://img.shields.io/badge/License-ISC-blue)

---

## 📸 Preview do Projeto

> Backend de um sistema de delivery (sem interface gráfica)

---

## 📌 Sobre o Projeto

Este projeto consiste no desenvolvimento de um backend para um sistema de delivery, inspirado em aplicações como iFood.

A aplicação foi construída utilizando **Node.js puro**, com foco na compreensão dos conceitos fundamentais de servidores HTTP e integração com banco de dados.

---

## 🎯 Objetivos

- Aplicar conceitos de **Programação Orientada a Objetos (ES6 Classes)**
- Criar um servidor utilizando o módulo HTTP nativo
- Integrar com banco de dados **MongoDB**
- Trabalhar com **async/await**
- Implementar tratamento de erros e logs

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- MongoDB
- JavaScript (ES6+)
- HTTP Module (Node.js)

---
## 🧱 Arquitetura do Projeto
delivery-app
│
├── models
│ ├── Cliente.js
│ ├── Restaurante.js
│ └── Pedido.js
│
├── database
│ └── connection.js
│
├── utils
│ └── logger.js
│
├── logs
│ └── log.txt
│
├── server.js
└── package.json

---

## 🚀 Funcionalidades

### 👤 Cliente
- ✔ Criar cliente
- ✔ Listar clientes

### 🍽️ Restaurante
- ✔ Criar restaurante
- ✔ Listar restaurantes

### 🍕 Pedido
- ✔ Criar pedido
- ✔ Listar pedidos
- ✔ Atualizar status do pedido

---

## ▶️ Como executar

```bash
# Clonar repositório
git clone https://github.com/claudineijr18/delivery-app.git

# Entrar na pasta
cd delivery-app

# Instalar dependências
npm install

# Rodar servidor
node server.js

