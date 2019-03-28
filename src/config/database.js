
//npm i sequelize mysql2

const Sequelize = require("sequelize");
const sequelize = new Sequelize("semadec","root","gela9914",{
    host  : "localhost",
    dialect : "mysql",
    port : 3306,
    operatorsAliases: false
});

/*
sequelize.authenticate().then(()=>{
    console.log("Conectado");
}).catch((erro)=>{
    console.log("Não conectado");
});
*/

module.exports = sequelize;