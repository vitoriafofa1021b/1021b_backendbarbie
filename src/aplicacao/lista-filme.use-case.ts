import FilmeRepositorioInterface from "./filme-repositorio-interface";

export default class ListaFilme{
    //construtor
    constructor
    (readonly filmeRepositorio:FilmeRepositorioInterface
    ){}
    // executar
    public async executar(){
     return this.filmeRepositorio.listar()
    }
}