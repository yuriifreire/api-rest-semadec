const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/usuarios");

routers.post("/",controllers.autenticar);

module.exports = routers;