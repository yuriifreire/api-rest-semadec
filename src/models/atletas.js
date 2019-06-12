const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Atleta = sequelize.define('atleta',{
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: Sequelize.STRING(50), allowNull: false, validate: {
        len: [2, 50]
    }},
    matricula: { type: Sequelize.STRING(20)},
    },
    {
        timestamps: false,
        tableName: 'atleta'
    });

const Equipe = require('./equipes');
Atleta.belongsToMany(Equipe,{through : 'atletaequipe'});
Equipe.belongsToMany(Atleta,{through : 'atletaequipe'});

const Partida = require('./partidas');
Atleta.belongsToMany(Partida,{through : 'partidaatleta'});
Partida.belongsToMany(Atleta,{through : 'partidaatleta'});

module.exports = Atleta;