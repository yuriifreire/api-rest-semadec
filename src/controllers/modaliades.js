const Modalidade = require("../models/modalidades");
const Status = require("http-status");




exports.listarModalidade = (req,res,next)=>{
    Modalidade.findAll({attributes: ['id', 'nome','descricao', 'resultado'],
        include:[{
            model: require("../models/atletas"),
            required: true
        }]
    }).then((modalidades)=>{
        res.status(Status.OK).send(modalidades);
    }).catch((erro)=>{
        next(erro);
    });
};

exports.criarModalidade = (req,res,next)=>{    
    const modalidade = req.body;
    const idsAtletas = modalidade.atletas;
    Modalidade.create(modalidade).then((novaModalidade)=>{
        novaModalidade.setAtletas(idsAtletas).then().catch();
        res.status(Status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};

exports.buscarUmaModalidade = (req,res,next)=>{
    let id = parseInt(req.params.id);
    Modalidade.findById(id).then((modalidade)=>{
        if (modalidade){
            res.status(Status.OK).send(modalidade);
        }else{
            res.status(Status.NOT_FOUND).send();     
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.excluirModalidade = (req,res,next) => {
    let id = parseInt(req.params.id);
    Modalidade.findById(id).then((modaliade)=>{        
        if (modalidade){
            Modalidade.destroy({ where: {id : id}}).then(()=>{
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

exports.atualizarModalidade = (req,res,next)=>{
    let id = parseInt(req.params.id);    
    let modalidadeBody = req.body;    
    if (!modalidadeBody || !id){
        res.status(Status.NO_CONTENT).send();
    }else{
        Modalidade.findById(id).then((modalidade)=>{
            if (modalidade){
                Modalidade.update({nome: modalidadeBody.nome, descricao : modalidadeBody.descricao, resultado : modalidadeBody.resultado},{where : {id : id}}).then(()=>{
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