const Sequelize = require("sequelize");
const sequelize = new Sequelize("semadec","root","",{
    host  : "localhost",
    dialect : "mysql",
    port : 3306,
    operatorsAliases: false
});

module.exports = sequelize;
