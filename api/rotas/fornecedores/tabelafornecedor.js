const modelo = require('./modelo-tabela-fornecedor')
module.exports = {
    listar(){
        return modelo.findAll()
    },
    inserir(fornecedor){
        return modelo.create(fornecedor)
    },
    async pegarPorId(id){
        const resultado = await modelo.findOne({where:{
            id:id
        }})
        if(!resultado){
            throw new Error('Forncedor não encontrado')
        }

        return resultado;
    },
    async atualizar(id,dados){
        return modelo.update(dados,{
            where:{id:id}
        })
    },
    async remover(id){
        return modelo.destroy({where:{id:id}})
    }
}