const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton } = require('discord.js')
const libraryjp = require("../../config/rankjp.json")
module.exports = {
    name: "rank",//Nombre del comando
    aliases: ["rango"],//alternativas
    run: async (client, message, args, prefix) => {

        console.log("ENTRO AL COMANDO RANK");
        console.log(args);
        //#region servicio info
        const axios = require('axios');

        async function infoPriconne(personaje = '', version = '') {
            let payload = { accion: 'info_unidad', personaje: personaje, version: version };
            //console.log(payload);
            let res = await axios.post('https://www.priconne.helperplay.com/index.post.php', new URLSearchParams(payload));
            const Embed = new Discord.EmbedBuilder();
            let data = res.data.obj;
            if (data != undefined) {
                let data = res.data.obj;
                let valorBuscado = data.id_unidad;
                //const resultadojp = libraryjp.waifus.find(persona => persona.id === valorBuscado)
                //console.log(data);



                Embed.setTitle("__**RANKS RECOMENDADOS**__")
                        .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
                        .setDescription("Estas son las recomendaciones generales de " + data.unidad + " (" + data.version + ") "+ "\nRecuerden que todos personajes comunmente se suben a 5.")
                        .setColor("#f7b05a")

                    let value_ue = "Desde lvl 30 a Lvl Max";
                    if (data.is_ue == "SI") {

                        if(data.is_ue_max == '1') value_ue = "Lvl Max";

                        Embed.addFields([{ name: "UE lvl recomendado: ", value: value_ue },])

                        if(data.is_ue_max != '1')
                        Embed.addFields([{ name: "Observacion", value: "Si usas la unidad en CB o PvP,  se recomienda tener el Lvl de la UE al máximo más si son DPS o Tanques."},])

                    }
                   
                    if (data.is_ue_2 == "SI") {
                        Embed.addFields([{ name: "UE 2 lvl recomendado: 5 ⭐", value: "Recomendado para ella por la gran cantidad de stats ganados"},])
                    }                   

                    /*
                    if (resultadojp.rank_1 == "" && resultadojp.rank_2 == "") {
                        Embed.addFields([
                            { name: "O:", value: resultadojp.restriccion },
                        ])
                    }
                    */

                    Embed.addFields([
                        { name: "Rank: __**34-4**__" , value:"Rank sugerido en el meta actual" }
                    ])

                    Embed.addFields([
                        { name: "Rank:  __**34-3**__", value: "Segunda Opcion posible." }
                    ])
                

                    Embed.setThumbnail(data.img_victory)
                    Embed.setTimestamp()
                    if (data.galeria.length > 0) {
                        const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
                        Embed.setImage(randomElement.src)
                    } else {
                        Embed.setImage(data.img_card)
                    }
                    Embed.setTimestamp()
                        .setFooter({ text: 'Ranks recomendados', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

                    return message.channel.send({ embeds: [Embed] })
             
            } else {
                Embed.setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
                    .setDescription("Error inesperado, el personaje que deseas buscar no existe o aun no se encuentra disponible en Helper Play")
                    .setTimestamp()
                    .setTimestamp()
                    .setFooter({ text: 'Ranks recomendados', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
                return message.channel.send({ embeds: [Embed] })
            }
        }
        const personaje = args[0];
        const version = args[1];
        if (personaje == 'besto' && version == 'waifu') {
            return message.channel.send("tu sabes quien es la besto waifu");
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

            infoPriconne(personaje, version);
        }
    }
}