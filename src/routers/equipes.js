const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/equipes");
const autorizar = require("../services/auth-service");

routers.get("/", controllers.criarEquipe);
routers.post("/", autorizar.autorizar, controllers.listarEquipes);

module.exports = routers;