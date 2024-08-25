const mongoose = require('mongoose');
//const config = require('../../config/config.json');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
module.exports= client =>{
    //conectar
    /*
    mongoose.set("strictQuery", false);
    mongoose.connect(config.mongodb,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log(`conexion a la base de datos exitosa`.blue);
    }).catch((err)=>{
        console.log('error al conectar'.red);
        console.log(err)
    })
    */
    console.log(`conectado, iniciando como: ${client.user.tag}`.green);
    client.user.setPresence({
        activities: [{ name: `Bot Disponible`, type: ActivityType.Watching }],
        status: 'ONLINE',
      });
    
    const slashcommands = client.slashcommands.map(x=>x)
    //client.guilds.cache.get("978405807295168522").commands.set(slashcommands)
}