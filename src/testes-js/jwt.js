const {sign, verify} = require("jsonwebtoken");
const secret = "semadec-manager";
const token = sign({id: 1,nome: "tsi5v"},secret);
console.log(token);

verify(token,secret,(error,payload)=>{
    console.log(payload);
});