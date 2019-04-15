const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/locais");
const autorizar = require("../services/auth-service");

routers.get("/", controllers.listarLocais);
routers.post("/", autorizar.autorizar, controllers.criarLocal);

module.exports = routers;