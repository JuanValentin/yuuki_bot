const fs = require('fs');
module.exports = (client)=>{
    try{
        let comandos = 0;
        fs.readdirSync("./priconne/").forEach((carpeta)=>{
            const commands = fs.readdirSync(`./priconne/${carpeta}`).filter((archivo) => archivo.endsWith(".js"));
            for (let archivo of commands){
                let comando = require(`../priconne/${carpeta}/${archivo}`);
                if(comando.name){
                    client.commands.set(comando.name,comando);
                    comandos++
                }else{
                    console.log(`COMANDO [/${carpeta}/${archivo}]`, `error=> el comando no esta configurado`);
                    continue;
                }
                if(comando.aliases&& Array.isArray(comando.aliases)) comando.aliases.forEach((alias)=>client.aliases.set(alias,comando.name ));
            }
        });
        console.log(`${comandos} waifus listas`.brightMagenta);
        
    }catch(e){
        console.log(e);
    }
}