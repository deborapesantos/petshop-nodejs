const modeloTabela = require('../rotas/fornecedores/modelo-tabela-fornecedor')

modeloTabela
.sync()
.then(()=>console.log('tabela criada com sucesso'))
.catch(console.log)
