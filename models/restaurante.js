const { getDB } = require("../database/connection");
const { logError } = require("../utils/logger");

class Restaurante {
  constructor(nome, categoria) {
    this.nome = nome;
    this.categoria = categoria;
  }

  validar() {
    if (!this.nome || !this.categoria) {
      throw new Error("Nome e categoria são obrigatórios");
    }
  }

  toJSON() {
    return {
      nome: this.nome,
      categoria: this.categoria
    };
  }

  async salvar() {
    try {
      this.validar();
      const db = getDB();
      return await db.collection("restaurantes").insertOne(this.toJSON());
    } catch (error) {
      logError(error);
      throw error;
    }
  }

  static async listar() {
    try {
      const db = getDB();
      return await db.collection("restaurantes").find().toArray();
    } catch (error) {
      logError(error);
      throw error;
    }
  }

  static async buscarPorCategoria(categoria) {
    try {
      const db = getDB();
      return await db.collection("restaurantes")
        .find({ categoria })
        .toArray();
    } catch (error) {
      logError(error);
      throw error;
    }
  }

  static async deletar(id) {
    try {
      const db = getDB();
      return await db.collection("restaurantes").deleteOne({ _id: id });
    } catch (error) {
      logError(error);
      throw error;
    }
  }
}

module.exports = Restaurante;