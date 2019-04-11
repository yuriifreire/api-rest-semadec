const Livro = require("../models/usuarios");
const Usuario = require("../models/usuarios");
const Status = require("http-status");
const authService = require("../services/auth-service");
const bcrypt = require('bcrypt');


exports.criarUsuario = (req, res, next) => {
    bcrypt.hash(req.body.senha, 10, function (err, hash) {
        Usuario.create({
            email: req.body.email,
            senha: hash
        }).then(() => {
            res.status(Status.CREATED).send();
        }).catch((error) => {
            next(error);
        });
    });
};

exports.listarUsuario = (req, res, next) => {
    Usuario.findAll().then((usuarios) => {
        res.status(Status.OK).send(usuarios);
    }).catch((error) => {
        next(error);
    });

};

exports.autenticar = (req, res, next) => {

    const dados = req.body;
    Livro.findAll({
        where: {
            email: dados.email,
            senha: dados.senha
        }
    }).then((usuario) => {
        let token = authService.geraToken({ id: usuario[0].id, email: usuario[0].email });
        console.log(token);
        res.status(Status.OK).send(token);
    }).catch((erro) => {
        res.status(Status.UNAUTHORIZED).send({ mensagem: "Usuário e senha inválidos" });
    })
};