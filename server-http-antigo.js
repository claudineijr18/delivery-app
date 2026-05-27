const http = require("http");
const { connect } = require("./database/connection");
const Cliente = require("./models/Cliente");

const PORT = 3000;

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/clientes") {
    Cliente.listar().then(clientes => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(clientes));
    });
    return;
  }

  if (req.method === "POST" && req.url === "/clientes") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const dados = JSON.parse(body);

        const cliente = new Cliente(
          dados.nome,
          dados.email,
          dados.endereco
        );

        await cliente.salvar();

        res.writeHead(201);
        res.end("Cliente criado");

      } catch (error) {
        res.writeHead(400);
        res.end(error.message);
      }
    });

    return;
  }

  res.writeHead(404);
  res.end("Rota não encontrada");
});

connect().then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});