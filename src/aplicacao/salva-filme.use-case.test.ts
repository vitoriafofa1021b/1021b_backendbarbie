import {test,expect,describe} from 'vitest'

import SalvaFilme from './salva-filme.use-case'
import BancoEmMemoria from '../infra/banco/banco-em-memoria'

describe("Testando salva filme use case",()=>{
    test("Deve salvar um filme",async ()=>{
        const bancoEmMemoria = new BancoEmMemoria()
        const salvaFilme = new SalvaFilme(bancoEmMemoria)
        const input = {
            id:1,
            titulo:"test",
            descricao:"test",
            imagem:"test"
        }
        const resultado = await salvaFilme.execute(input)
        expect(resultado).toEqual(input)
    })
})

