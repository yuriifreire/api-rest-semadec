const Local = require("../models/locais");
const Status = require("http-status");

exports.listarLocais = (req,res,next)=>{
    Local.findAll({attributes: ["id","nome"]}).then((locais)=>{
        res.status(Status.OK).send(locais);
    }).catch((erro)=>{
        next(erro);
    });
};

exports.criarLocal = (req,res,next)=>{
    let local = req.body;
    Local.create(local).then((novoLocal)=>{
        res.status(Status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};