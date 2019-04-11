const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Partida = sequelize.define('partida', { 
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    horario: { type: Sequelize.TIME, allowNull: false},
    data: Sequelize.DATA,
    observacao: Sequelize.STRING(100)
});


module.exports = Partida;
