
const config = require('config')
const { Sequelize } = require('sequelize');

const instancia = new Sequelize(
  config.get('mysql.banco-de-dados'),
  config.get('mysql.usuario'),
  config.get('mysql.senha'),
  {
      host: config.get('mysql.host'),
      dialect: 'mysql'
  }
)

// Teste a conexão
instancia.authenticate()
  .then(() => {
    console.log('Conexão com MSQL estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao MSQL:', err);
  });

module.exports = instancia;