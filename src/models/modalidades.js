const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Modalidade = sequelize.define('modalidade', { 
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: Sequelize.STRING(50), allowNull: false, validate: {
        len: [2, 50]
    }},
    descricao: Sequelize.TEXT,
    resultado : Sequelize.STRING(100)
});

const Atleta = require('./atletas');
Modalidade.belongsToMany(Atleta,{through : 'modalidadeatleta'});
Atleta.belongsToMany(Modalidade,{through : 'modalidadeatleta'});

module.exports = Modalidade;
