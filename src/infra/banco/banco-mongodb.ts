import mongoose from "mongoose";
import FilmeRepositorioInterface from "../../aplicacao/filme-repositorio-interface";
require("dotenv").config();

// Interface para representar um documento do MongoDB Filme
interface FilmeDocument extends mongoose.Document {
  _id: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

// Modelo Mongoose para o documento Filme
const FilmeModelo = mongoose.model<FilmeDocument>(
  "Filme",
  new mongoose.Schema({
    _id: Number,
    titulo: String,
    descricao: String,
    imagem: String,
  })
);

// Definição do tipo Filme
type Filme = {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
};

export default class BancoMongoDB implements FilmeRepositorioInterface {
  public filmeModelo: mongoose.Model<FilmeDocument>;

  constructor() {
    try {
      mongoose.connect(process.env.MONGODB_URL || "");
      this.filmeModelo = FilmeModelo;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao conectar com o MongoDB");
    }
  }

  async salvar(filme: Filme): Promise<Filme> {
    const filmeDTO = {
      _id: filme.id,
      titulo: filme.titulo,
      descricao: filme.descricao,
      imagem: filme.imagem,
    };

    const filmeModelo = new this.filmeModelo(filmeDTO);
    const result = await filmeModelo.save();

    const filmeSalvo: Filme = {
      id: result._id,
      titulo: result.titulo,
      descricao: result.descricao,
      imagem: result.imagem,
    };
    return filmeSalvo;
  }

  async listar(): Promise<Filme[]> {
    try {
      const listarFilme = await this.filmeModelo.find().lean(); // Utilize .lean() para obter objetos JavaScript puros

      const filmes: Filme[] = listarFilme.map((filme: FilmeDocument) => ({
        id: filme._id,
        titulo: filme.titulo,
        descricao: filme.descricao,
        imagem: filme.imagem,
      }));

      return filmes;
    } catch (error) {
      console.error("Erro ao listar filmes:", error);
      throw error;
    }
  }

  async buscarPorId(id: number): Promise<Filme> {
    return new Promise((resolve, reject) => {
      reject(new Error("Not implemented yet"));
    });
  }
}
