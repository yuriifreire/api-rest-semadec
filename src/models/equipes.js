const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Equipe = sequelize.define('equipe', { 
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: Sequelize.STRING(50), allowNull: false, validate: {
        len: [2, 50]
    }}
});


module.exports = Equipe;
