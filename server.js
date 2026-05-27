const express = require("express");
const session = require("express-session");

const { connect } = require("./database/connection");

const Cliente = require("./models/Cliente");
const Restaurante = require("./models/Restaurante");
const Pedido = require("./models/Pedido");

const app = express();
app.use(express.static("public"));
const PORT = 3000;

app.use(express.json());

app.use(session({
  secret: "delivery-app-secret",
  resave: false,
  saveUninitialized: false
}));

function verificarLogin(req, res, next) {
  if (req.session.usuario) {
    next();
  } else {
    res.status(401).json({ erro: "Acesso negado. Faça login primeiro." });
  }
}

app.get("/", (req, res) => {
  res.json({
    mensagem: "API Delivery App com Express.js"
  });
});

app.post("/login", (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      erro: "Email e senha são obrigatórios"
    });
  }

  if (email === "admin@email.com" && senha === "123456") {
    req.session.usuario = {
      email: email
    };

    return res.json({
      mensagem: "Login realizado com sucesso"
    });
  }

  res.status(401).json({
    erro: "Email ou senha inválidos"
  });
});

app.post("/logout", (req, res) => {
  req.session.destroy();

  res.json({
    mensagem: "Logout realizado com sucesso"
  });
});

app.get("/clientes", verificarLogin, async (req, res) => {
  try {
    const clientes = await Cliente.listar();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.post("/clientes", verificarLogin, async (req, res) => {
  try {
    const { nome, email, endereco } = req.body;

    const cliente = new Cliente(nome, email, endereco);
    await cliente.salvar();

    res.status(201).json({
      mensagem: "Cliente cadastrado com sucesso"
    });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.delete("/clientes/:id", verificarLogin, async (req, res) => {
  try {
    await Cliente.deletar(req.params.id);

    res.json({
      mensagem: "Cliente deletado com sucesso"
    });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.get("/restaurantes", verificarLogin, async (req, res) => {
  try {
    const categoria = req.query.categoria;

    let restaurantes;

    if (categoria) {
      restaurantes = await Restaurante.buscarPorCategoria(categoria);
    } else {
      restaurantes = await Restaurante.listar();
    }

    res.json(restaurantes);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.post("/restaurantes", verificarLogin, async (req, res) => {
  try {
    const { nome, categoria } = req.body;

    const restaurante = new Restaurante(nome, categoria);
    await restaurante.salvar();

    res.status(201).json({
      mensagem: "Restaurante cadastrado com sucesso"
    });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.delete("/restaurantes/:id", verificarLogin, async (req, res) => {
  try {
    await Restaurante.deletar(req.params.id);

    res.json({
      mensagem: "Restaurante deletado com sucesso"
    });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.get("/pedidos", verificarLogin, async (req, res) => {
  try {
    const pedidos = await Pedido.listar();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.post("/pedidos", verificarLogin, async (req, res) => {
  try {
    const { clienteId, restauranteId, itens } = req.body;

    const pedido = new Pedido(clienteId, restauranteId, itens);
    await pedido.salvar();

    res.status(201).json({
      mensagem: "Pedido criado com sucesso"
    });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.put("/pedidos/:id/status", verificarLogin, async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        erro: "Status é obrigatório"
      });
    }

    await Pedido.atualizarStatus(req.params.id, status);

    res.json({
      mensagem: "Status do pedido atualizado com sucesso"
    });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.delete("/pedidos/:id", verificarLogin, async (req, res) => {
  try {
    await Pedido.deletar(req.params.id);

    res.json({
      mensagem: "Pedido deletado com sucesso"
    });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
  });
});