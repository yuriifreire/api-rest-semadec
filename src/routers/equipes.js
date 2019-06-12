const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/equipes");

routers.get("/", controllers.criarEquipe);
routers.post("/", controllers.listarEquipes);

module.exports = routers;