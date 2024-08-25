require('dotenv').config();

//const config = require(`${process.cwd()}/config/config.json`)
const prefix = process.env.PREFIX;
//const serverSchema = require(`${process.cwd()}/modelos/servidor.js`)
//const {asegurar} =require(`${process.cwd()}/utils/funciones.js`)
const Discord = require('discord.js')
//const cooldowns = new Map();
module.exports = async (client, message) => {
    if(!message.guild||!message.channel||message.author.bot)return;
    /*
    let data = await asegurar(serverSchema,message.guild.id,{
        guildID : message.guild.id,
        prefijo : config.prefix
    });
    */
    if(!message.content.startsWith(prefix))return;
    const args = message.content.slice(2).trim().split(/ +/g);
    const cmd = args.shift()?.toLowerCase();
    const command = client.commands.get(cmd)|| client.commands.find(c=> c.aliases && c.aliases.includes(cmd));
    if(command){
        //message.reply("Proximamente mantenimiento");
        command.run(client,message,args,null);
        let fecha = new Date();
        let menu = new Discord.EmbedBuilder()
        .setDescription(`${message.author.tag} a usado el comando "${command.name}" en el server: ${message.guild.name}\nregistro a las: ${fecha}`)
        .addFields({name:"id del server:",value:message.guild.id,inline:true},
        {name:"id de usuario",value:message.author.id,inline:true});
        const canal = client.channels.cache.get('1127771625127936020');
        canal.send({ content: "cargando", embeds: [menu] });
        
    }
    else{
        let error = new Discord.EmbedBuilder()
            .setColor(0x206be3)
            .setDescription("La peticion que hiciste creo que no existe, revisa si está mal escrito.")
            .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046548156978036746/ERROR_BUSQUEDA.jpg?width=960&height=225")
        return message.reply({content: "disculpe pero..", embeds: [error] });
    }
}