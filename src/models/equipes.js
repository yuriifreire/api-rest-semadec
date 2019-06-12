const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Equipe = sequelize.define('equipe', { 
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: Sequelize.STRING(50), allowNull: false, validate: {
        len: [1, 50]
    }}
    },
    {timestamps: false,
    tableName: 'equipe'}
);


module.exports = Equipe;
