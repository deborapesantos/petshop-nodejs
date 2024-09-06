const roteador = require('express').Router()
const tabelafornecedor = require('./tabelafornecedor')
const Fornecedor =require('./Fornecedor')
roteador.get('/', async(requisicao, resposta)=>{
    const  resultados = await tabelafornecedor.listar()
    resposta.send(
        JSON.stringify(resultados)
    )
});

roteador.post('/', async(requisicao, resposta)=>{
    const dados = requisicao.body;
    const fornecedor = new Fornecedor(dados);
    await fornecedor.criar()
    resposta.send(JSON.stringify(fornecedor))
})

roteador.get('/:id', async(requisicao, resposta)=>{
    try{
        const id = requisicao.params.id
        const fornecedor = new Fornecedor({id:id})
        await fornecedor.carregar()
        resposta.send(JSON.stringify(fornecedor))
    }
    catch(error){
        resposta.send(JSON.stringify({mensagem: error.message}))
    }
})

roteador.put('/:id', async(requisicao, resposta)=>{
    try{
        const id = requisicao.params.id
        const dados = requisicao.body
        const mdados = Object.assign({}, dados,{id:id})
        const fornecedor = new Fornecedor(mdados)
        await fornecedor.atualizar()
        resposta.end()
    }
    catch(error){
        resposta.send(JSON.stringify({mensagem: error.message}))
    }
})
roteador.delete('/:id',async(requisicao, resposta)=>{
   
    try{
        const id = requisicao.params.id
        const fornecedor= new Fornecedor({id:id})
        await fornecedor.carregar()
        await fornecedor.remover()
        resposta.end()
    }
    catch(error){
        resposta.send(JSON.stringify({mensagem: error.message}))
    }
})

module.exports =  roteador