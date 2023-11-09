import {describe,test, expect} from 'vitest'
import {BancoMongoDB} from './banco-mongodb'

describe('BancoMongoDB teste', () => {
    const bancoMongoDB = new BancoMongoDB()
    test('BancoMongoDB', () => {
        expect(bancoMongoDB).toBeDefined()
    })
    test('deve salvar um filme', async () => {
        const filme = {
            id: 1,
            titulo: 'O Poderoso Chefão',
            descricao: 'Filme de máfia',
            imagem: 'fotofilme.jpg'
        }
        const result = await bancoMongoDB.salvar(filme)
        expect(result).toEqual(filme)
    })
})