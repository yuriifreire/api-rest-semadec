const Partida = require("../models/partidas");
const Status = require("http-status");




exports.listarPartida = (req,res,next)=>{
    Partida.findAll({attributes: ['id', 'horario','data', 'observacao'],
        include:[{
            model: require("../models/atletas"),
            required: true,
            model: require("../models/modalidades"),
            required: true
        }]
    }).then((partidas)=>{
        res.status(Status.OK).send(partidas);
    }).catch((erro)=>{
        next(erro);
    });
};

exports.criarPartida = (req,res,next)=>{    
    const partida = req.body;
    const idsAtletas = partida.atletas;
    Partida.create(partida).then((novaPartida)=>{
        novaPartida.setAtletas(idsAtletas).then().catch();
        res.status(Status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};

exports.buscarUmaPartida = (req,res,next)=>{
    let id = parseInt(req.params.id);
    Partida.findById(id).then((partida)=>{
        if (partida){
            res.status(Status.OK).send(partida);
        }else{
            res.status(Status.NOT_FOUND).send();     
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.excluirPartida = (req,res,next) => {
    let id = parseInt(req.params.id);
    Partida.findById(id).then((partida)=>{        
        if (partida){
            Partida.destroy({ where: {id : id}}).then(()=>{
                res.status(Status.OK).send();
            }).catch((erro)=>{
                next(erro);
            });
        }else{
            res.status(Status.NOT_FOUND).send();
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.atualizarPartida = (req,res,next)=>{
    let id = parseInt(req.params.id);    
    let partidaBody = req.body;    
    if (!partidaBody || !id){
        res.status(Status.NO_CONTENT).send();
    }else{
        Partida.findById(id).then((partida)=>{
            if (partida){
                Partida.update({horario: partidaBody.horario, horario : partidaBody.horario, observacao : partidaBody.observacao},{where : {id : id}}).then(()=>{
                    res.status(Status.OK).send();
                }).catch((erro)=>{
                    next(erro);
                });
            }else{
                res.status(Status.NOT_FOUND).send();
            }
        }).catch((erro)=>{
            next(erro);
        });
    }
};