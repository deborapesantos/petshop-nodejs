const tabelafornecedor = require('./tabelafornecedor')
class Fornecedor{
 
    
    constructor({id,email,empresa,categoria,dataCriacao,dataAtualizacao,versao}){
        this.id = id;
        this.empresa =empresa;
        this.email = email;
        this.categoria=categoria;
        this.dataCriacao = dataCriacao;
        this.dataAtualizacao=dataAtualizacao;
        this.versao =versao;
    }

    async criar(){
        const resultado = await tabelafornecedor.inserir({
            empresa: this.empresa,
            email:this.email,
            categoria:this.categoria
        })
        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao =resultado.versao
    }

    async carregar(){
        const resultado = await tabelafornecedor.pegarPorId(this.id)

        this.id = resultado.id
        this.empresa =resultado.empresa;
        this.email = resultado.email;
        this.categoria= resultado.categoria;
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
        this.versao =resultado.versao
    }

    async atualizar(){
       var resultado = await tabelafornecedor.pegarPorId(this.id)
       const campos=['empresa','email','categoria']
       const dadosparaatualizar = {}
       campos.forEach((campo)=>{
        const valor= this[campo]
        if(typeof valor === 'string' && valor.length>0){
            dadosparaatualizar[campo] = valor
        }
       })

       if(Object.keys(dadosparaatualizar).length===0){
        throw new Error('não foram fornecidos dados para atualizar')
       }

       await tabelafornecedor.atualizar(this.id,dadosparaatualizar)
    }

    async remover(){
      return await  tabelafornecedor.remover(this.id)
    }
}

module.exports = Fornecedor