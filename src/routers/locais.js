const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/locais");

routers.get("/", controllers.listarLocais);
routers.post("/", controllers.criarLocal);

module.exports = routers;