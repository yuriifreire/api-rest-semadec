const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/partidas");

routers.get("/",controllers.listarPartida);
routers.get("/:id",controllers.buscarUmaPartida);
routers.delete("/:id",controllers.excluirPartida);
routers.post("/",controllers.criarPartida);
routers.put("/:id",controllers.atualizarPartida);

module.exports = routers;