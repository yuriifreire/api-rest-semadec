const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Partida = sequelize.define('partida', { 
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    horario: Sequelize.TIME,
    data: Sequelize.DATE,
    observacao : Sequelize.STRING(100)
});

module.exports = Partida;
