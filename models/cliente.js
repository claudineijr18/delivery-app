const { ObjectId } = require("mongodb");
const { getDB } = require("../database/connection");
const { logError } = require("../utils/logger");

class Cliente {
  constructor(nome, email, endereco) {
    this.nome = nome;
    this.email = email;
    this.endereco = endereco;
  }

  validar() {
    if (!this.nome || !this.email) {
      throw new Error("Nome e email são obrigatórios");
    }
  }

  toJSON() {
    return {
      nome: this.nome,
      email: this.email,
      endereco: this.endereco
    };
  }

  async salvar() {
    try {
      this.validar();
      const db = getDB();
      return await db.collection("clientes").insertOne(this.toJSON());
    } catch (error) {
      logError(error);
      throw error;
    }
  }

  static async listar() {
    try {
      const db = getDB();
      return await db.collection("clientes").find().toArray();
    } catch (error) {
      logError(error);
      throw error;
    }
  }

  static async deletar(id) {
    try {
      const db = getDB();
      return await db.collection("clientes").deleteOne({
        _id: new ObjectId(id)
      });
    } catch (error) {
      logError(error);
      throw error;
    }
  }
}

module.exports = Cliente;