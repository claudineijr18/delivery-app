const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let db;

async function connect() {
  try {
    await client.connect();
    db = client.db("deliveryDB");
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("Erro ao conectar:", error);
  }
}

function getDB() {
  return db;
}

module.exports = { connect, getDB };