const Atleta = require("../models/atletas");
const Status = require("http-status");

exports.listarAtletas = (req,res,next)=>{
    Atleta.findAll({attributes: ["id","nome"]}).then((atletas)=>{
        res.status(Status.OK).send(atletas);
    }).catch((erro)=>{
        next(erro);
    });
};

exports.criarAtleta = (req,res,next)=>{
    let atleta = req.body;
    Atleta.create(atleta).then((novoAtleta)=>{
        res.status(Status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};