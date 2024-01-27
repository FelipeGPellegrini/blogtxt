const Sequelize = require("sequelize")

const connection = new Sequelize('guiapress', 'root', '22112004', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;