import mongoose from "mongoose";
import FilmeRepositorioInterface from "../aplicacao/filme-repositorio-interface";
require("dotenv").config();
export class BancoMongoDB implements  FilmeRepositorioInterface {
  public filmeModelo: any;
  constructor() {
    try{
      mongoose.connect(process.env.MONGODB_URL || "")
    }catch(error){
      console.log(error)
    }
    this.filmeModelo = mongoose.model("Filme", 
        new mongoose.Schema({
            _id: Number,
            titulo: String,
            descricao: String,
            imagem: String
        })
    )
  }
  async salvar(filme: Filme): Promise<Filme> {
   const FilmeDTO = {
    _id: filme.id,
    titulo: filme.titulo,
    descricao: filme.descricao,
    imagem: filme.imagem
   }
   const filmeModelo = new this.filmeModelo(FilmeDTO)
  const result = await filmeModelo.save()
  const filmeSalvo ={
    id: result._id,
    titulo: result.titulo,
    descricao: result.descricao,
    imagem: result.imagem

  }
  return filmeSalvo
  }
  async listar(): Promise<Filme[]> {
    return new Promise((resolve, reject) => {
      reject(new Error("Not implemented yet"));
    })
  }
  async buscarPorId(id:number): Promise<Filme> {
    return new Promise((resolve, reject) => {
      reject(new Error("Not implemented yet"));
    })
  }
}
type Filme = {
  id: number,
  titulo: string,
  descricao: string,
  imagem: string
};