const Sequelize =  require('sequelize')
const instancia = require('../../banco-de-dados')
const colunas = {
    empresa:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    categoria:{
        type:Sequelize.ENUM('ração','brinquedos'),
        allowNull:false
    }
}
const opcoes ={
    freezeTableName:true,
    tableName:'fornecedor',
    timestamps:true,
    createAt:'dataCriacao',
    updateAt:'dataAtualizacao',
    version:'versao'
}

module.exports = instancia.define('fornecedor', colunas, opcoes)