const fs = require('fs');
module.exports = (client)=>{
    try{
        let comandos = 0;
        fs.readdirSync("./slashcomands/").forEach((carpeta)=>{
            const slashcommands = fs.readdirSync(`./slashcomands/${carpeta}`).filter((archivo) => archivo.endsWith(".js"));
            for (let archivo of slashcommands){
                let comando = require(`../slashcomands/${carpeta}/${archivo}`);
                if(comando.name){
                    client.slashcommands.set(comando.name,comando);
                    comandos++
                }else{
                    console.log(`COMANDO [/${carpeta}/${archivo}]`, `error=> el comando no esta configurado`);
                    continue;
                }
                if(comando.aliases&& Array.isArray(comando.aliases)) comando.aliases.forEach((alias)=>client.aliases.set(alias,comando.name ));
            }
        });
        console.log(`${comandos} slash comands Cargados`.brightGreen);
        
    }catch(e){
        console.log(e);
    }
}