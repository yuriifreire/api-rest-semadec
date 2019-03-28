const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Usuario = sequelize.define('usuario', { 
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    email: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    senha: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
},{tableName : 'usuario'});

module.exports = Usuario;
