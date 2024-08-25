const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton } = require('discord.js')

module.exports = {
    name: "waifu",//Nombre del comando
    aliases: ["pj", "stalk", "simpear", "midiosa", "crush"],//alternativas
    run: async (client, message, args, prefix) => {

        console.log("ENTRO AL COMANDO WAIFU");
        console.log(args);
        //#region servicio info
        const axios = require('axios');

        async function infoPriconne(personaje = '') {
            let payload = { accion: 'info_pj', personaje: personaje };
            //console.log(payload);
            let res = await axios.post('https://www.priconne.helperplay.com/index.post.php', new URLSearchParams(payload));
            let data = res.data.obj;

            //console.log(data);
            const info = new Discord.EmbedBuilder()
                .setTitle("__**INFORMACION GENERAL**__")
                .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            try {
                info.setDescription("Por si no lo sabias, estos son algunos datos de " + data.nombre)
                    .addFields([
                        { name: "__Nombre__", value: data.nombre, inline: true },
                        { name: "__Gremio__", value: data.gremio, inline: true },
                        { name: "__Raza__", value: data.raza, inline: true },
                        { name: "__Altura__", value: data.altura, inline: true },
                        { name: "__Peso__", value: data.peso, inline: true },
                        { name: "__Cumpleaños__", value: data.cumple, inline: true },
                        { name: "__Edad__", value: data.edad, inline: true },
                        { name: "__Tipo de Sangre__", value: data.tipo_sangre, inline: true },
                        { name: "__Hobbies__", value: data.hobbies, inline: true },
                        { name: "__Seiyuu__", value: data.seiyuu, inline: true },
                    ])
                    .setThumbnail(data.url_gremio)
                    .setImage(data.url_imagen)
                    .setTimestamp()
                    .setFooter({ text: 'INFORMACION GENERAL', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
                


                return message.channel.send({ content: "cargando comando...", embeds: [info] })
            } catch {
                let nobusqueda = new Discord.EmbedBuilder()
                    .setTitle("__**NO SE ENCONTRÓ NADA**__")
                    .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
                    .setDescription("parece que no encontramos nada, puede deberse a 3 cosas:")
                    .addFields([{ name: "ERROR DE SINTAXIS", value: "Escribiste mal el nombre de la waifu, sugerimos que observe en **>>guild** para saber como consultar a la waifu deseada" },
                    { name: "PERSONAJE NO EXISTE", value: "Escribiste el nombre de un personaje que no existe." },
                    { name: "NO DISPONIBLE", value: "Es posible que aun no esté disponible la info en la pagina" },
                    { name: "ERROR DE SISTEMA", value: "Si ninguna de las anteriores es verdad, contacta a soporte tecnico" }
                    ])
                    .setColor("#9132a8")
                    .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046548158206971924/WAIFU1.jpg?width=960&height=225")
                    .setTimestamp()
                    .setFooter({ text: 'Habilidades de Waifus', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
                return message.reply({ content: "oh no...", embeds: [nobusqueda] });

            }






        }
        const personaje = args[0];
        if (personaje == 'besto' && version == 'waifu') {
            return message.channel.send("tu sabes quien  es la besto waifu");
        } else if (!personaje) {

            let nobusqueda = new Discord.EmbedBuilder()
                .setTitle("__**IMPORTANTE**__")
                .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
                .setDescription("Para poder usar el comando debes nombrar a la waifu que deseas buscar, por ejemplo:\n>>waifu neneka (este muestra la info de las waifus, por lo que no sirve poner variantes)")
                .setColor("#9132a8")
                .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046548157535883404/WAIFU2.jpg?width=960&height=225")
                .setTimestamp()
                .setFooter({ text: 'Habilidades de Waifus', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
            return message.reply({ content: "oh no...", embeds: [nobusqueda] });
        } else {
            infoPriconne(personaje);
        }
        //#endregion
    }
    //

    //

}