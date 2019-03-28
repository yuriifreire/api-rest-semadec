const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/modalidades");

routers.get("/",controllers.listarModalidade);
routers.get("/:id",controllers.buscarUmaModalidade);
routers.delete("/:id",controllers.excluirModalidade);
routers.post("/",controllers.criarModalidade);
routers.put("/:id",controllers.atualizarModalidade);

module.exports = routers;