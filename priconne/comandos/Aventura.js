const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "aventura",//Nombre del comando
    aliases: ["adventure", "equipoEX"],//alternativas
    run: async (client, message, args, prefix) => {
        let embed = new Discord.EmbedBuilder()
            .setTitle("__**AVENTURA MODE PRICONNE RE:DIVE**__")
            .setColor('#0c1ff0')
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("dejamos un enlace para que puedas conocer un poco acerca del modo nuevo **AVENTURA** para los jugadores del japo.\nSi te interesa que items son mejores para las waifus, recomendamos esperar un poco más.")
            .addFields({name:"MINI GUIA", value:"[CLICK AQUI](https://docs.google.com/spreadsheets/d/e/2PACX-1vTACIhfnSLYEZ5PDgTBmYu5YqAWooupUyHC6fO_Y9qaphIig9WhjgF2B9jiX83iR_O5eO1Tm-astUVs/pubhtml#)"})
            .setImage("https://media.discordapp.net/attachments/1005151310494048367/1005968530501533696/unknown.png?width=704&height=396")
            .setTimestamp()
            .setFooter({ text: 'mini guias', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

        return message.reply({ content: "cargando comando...", embeds: [embed] });

    }
}

