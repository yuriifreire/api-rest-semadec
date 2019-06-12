const Equipe = require("../models/equipes");
const Status = require("http-status");

exports.listarEquipes = (req,res,next)=>{
    Equipe.findAll({attributes: ["id","nome"]}).then((equipes)=>{
        res.status(Status.OK).send(equipes);
    }).catch((erro)=>{
        next(erro);
    });
};

exports.criarEquipe = (req,res,next)=>{
    let equipe = req.body;
    Equipe.create(equipe).then((novaEquipe)=>{
        res.status(Status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};