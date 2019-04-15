const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Partida = sequelize.define('partida', { 
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    horario: Sequelize.TIME,
    data: Sequelize.DATE,
    observacao : Sequelize.STRING(100)
});

const Atleta = require('./atletas');
Modalidade.belongsToMany(Atleta,{through : 'modalidadeatleta'});
Atleta.belongsToMany(Modalidade,{through : 'modalidadeatleta'});

module.exports = Modalidade;
