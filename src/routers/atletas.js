const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/atletas");

routers.get("/", controllers.listarAtletas);
routers.post("/", controllers.criarAtleta);

module.exports = routers;