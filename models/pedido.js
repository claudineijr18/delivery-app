const { getDB } = require("../database/connection");
const { logError } = require("../utils/logger");

class Pedido {
  constructor(clienteId, restauranteId, itens) {
    this.clienteId = clienteId;
    this.restauranteId = restauranteId;
    this.itens = itens;
    this.status = "pendente";
  }

  validar() {
    if (!this.clienteId || !this.restauranteId || !this.itens) {
      throw new Error("Dados do pedido incompletos");
    }
  }

  toJSON() {
    return {
      clienteId: this.clienteId,
      restauranteId: this.restauranteId,
      itens: this.itens,
      status: this.status
    };
  }

  async salvar() {
    try {
      this.validar();
      const db = getDB();
      return await db.collection("pedidos").insertOne(this.toJSON());
    } catch (error) {
      logError(error);
      throw error;
    }
  }

  static async listar() {
    try {
      const db = getDB();
      return await db.collection("pedidos").find().toArray();
    } catch (error) {
      logError(error);
      throw error;
    }
  }

  static async atualizarStatus(id, status) {
    try {
      const db = getDB();
      return await db.collection("pedidos").updateOne(
        { _id: id },
        { $set: { status } }
      );
    } catch (error) {
      logError(error);
      throw error;
    }
  }

  static async deletar(id) {
    try {
      const db = getDB();
      return await db.collection("pedidos").deleteOne({ _id: id });
    } catch (error) {
      logError(error);
      throw error;
    }
  }
}

module.exports = Pedido;