const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Atleta = sequelize.define('atleta',{
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: Sequelize.STRING(50), allowNull: false, validate: {
        len: [2, 50]
    }},
    matricula: { type: Sequelize.STRING(20)},
});

module.exports = Atleta;