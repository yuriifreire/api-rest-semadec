
const Modalidade = require("../models/usuarios");
const Status = require("http-status");
const authService = require("../services/auth-service");

exports.autenticar = (req,res,next)=>{
    const dados = req.body;
    Modalidade.findAll({
        where : {
            email: dados.email,
            senha: dados.senha
        }
    }).then((usuario)=>{
        let token = authService.geraToken({id: usuario[0].id, email: usuario[0].email});
        console.log(token);
        res.status(Status.OK).send(token);
    }).catch((erro)=>{
        res.status(Status.UNAUTHORIZED).send({mensagem : "Usuário e senha inválidos"});        
    });
};
