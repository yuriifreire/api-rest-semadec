const express = require("express");
const routers = express.Router();

routers.get("/",(req,res,next)=>{
    res.status(200).send({
        name : "API-Rest Semadec",
        version : "1.0.0"
    });
});

module.exports = routers;