const auth = require("../services/auth-service");

console.log(auth.geraToken({id: "1", senha: "tsi5v@ifrn.edu.br"}));