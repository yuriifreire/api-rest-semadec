# Api Rest for semadec

## Para usar a API sem problemas, crie em seu banco o *schema/database*: *semadec* 
## Verifique no arquivo *database.js* se as credenciais de acesso ao banco estão corretas
  * Você pode localizar esse arquivo em *api-res/src/config/database.js*

### Dentro da pasta *src* você irá encontrar o arquivo *app.js*, no final desse arquivo onde tem

> const sequelize = require("./config/database");
>
> sequelize.sync({force : true}).then(()=>{
>
>     app.listen(3000,()=>{
>
>        console.log("Servidor iniciado!");
>
>     });




### Na linha onde você encontra *sequelize.sync({force : true}).then(()=>* deixe o *force : true* apenas na primeira vez que rodar, nas outras mude para *false* ou o seu banco será zerado. 


