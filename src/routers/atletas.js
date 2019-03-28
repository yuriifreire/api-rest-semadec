const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/atletas");
const autorizar = require("../services/auth-service");

routers.get("/", controllers.listarAtletas);
routers.post("/", autorizar.autorizar, controllers.criarAtleta);

module.exports = routers;