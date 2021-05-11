const Sequelize = require('sequelize')
const config = require('config')

const instancia = new Sequelize(
    'mysql://root:root@localhost:3306/petshop'
    // config.get('mysql.banco-de-dados'),
    // config.get('mysql.usuario'),
    // null,
    // {
    //     host: config.get('mysql.host'),
    //     dialect: 'mysql'
    // }
)

module.exports = instancia