const Discord = require('discord.js')
module.exports = {
    name: ":___menu",
    aliases: ["sala", "novedades", "update", "actualizacion", "help"],
    desc: "datos de waifus",
    run: async (client, message, args, prefix) => {

        //#region botones
        let btnNovedad = new Discord.ButtonBuilder().setCustomId("b1").setStyle("Success").setEmoji("🧰");
        let btnGuild = new Discord.ButtonBuilder().setCustomId("b2").setStyle("Primary").setEmoji("📒");
        let btnInfo = new Discord.ButtonBuilder().setCustomId("b3").setStyle("Primary").setEmoji("🪪");
        let btnPj = new Discord.ButtonBuilder().setCustomId("b4").setStyle("Primary").setEmoji("🔰");
        let btnWiki = new Discord.ButtonBuilder().setLabel("HelperPlay").setStyle("Link").setURL("https://www.priconne.helperplay.com").setEmoji("🔗");
        let btnMafia = new Discord.ButtonBuilder().setLabel("EL Shiirou").setStyle("Link").setURL("https://www.facebook.com/ElShiirou").setEmoji("📱");
        let btnHelper = new Discord.ButtonBuilder().setLabel("HelperPlayFB").setStyle("Link").setURL("https://www.facebook.com/profile.php?id=100088348201355").setEmoji("📱");
        //btn paginas
        let btnRegresar = new Discord.ButtonBuilder().setCustomId("b5").setStyle("Primary").setEmoji("⬅️");

        //parametros
        //interfaz normal menu
        const a1 = new Discord.ActionRowBuilder().addComponents(btnNovedad, btnGuild, btnInfo, btnPj);
        //interfaz  novedad
        const a2 = new Discord.ActionRowBuilder().addComponents(btnRegresar);
        //interfaz guild
        const a3 = new Discord.ActionRowBuilder().addComponents(btnRegresar,btnHelper,btnWiki,btnMafia);
        //#endregion
        //embeds
        let embedMenu = new Discord.EmbedBuilder()
            .setColor(0x00c26b)
            .setTitle("__**Menu Principal**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("Bienvenido a la nueva actualizacion del bot, por favor seleccione una opcion:")
            .addFields([{name:"🧰 ➢ Parches",value:"Resumen de las actualizaciones del bot",inline:true},
                {name:"📒 ➢ Comandos",value:"Lista de comandos",inline:true},
                {name:"🪪 ➢  Acerca de",value:"Conoce la informacion de los creadores",inline:true},
                {name:"🔰 ➢  Paginas",value:"Deseas apoyar a los creadores? es gratis",inline:true},
            ])
            .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046533577384415333/prueab2.jpg?width=843&height=395")
            .setTimestamp()
            .setFooter({ text: 'Yuuki Bot 9.x', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
        let embedNov = new Discord.EmbedBuilder()
            .setColor(0x00c26b)
            .setTitle("__**Parches del Bot **__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("**Bienvenidos a la version 7 de Yuuki Bot**")
            .addFields([
                {
                    name: "Cambios", value: "1.- EL bot vuelve a estar disponible, para todos. Recomendamos unirse a la mafia para poder arrastrar el canal de notificaciones.\n"
                        + "2.- Se cambiaron los diseños del bot\n"
                        +"3.- Se reemplazaron algunas partes que afectaban el uso del bot"
                        +"4.- Ahora el bot se debera pedir a el shiirou"
                        +"5.- El proyecto pricards podria ser libre el año entrante, por ahora se está reworkeando\n*(Este apartado por ahora es Exclusivo de la mafia)*"

                }
                , {
                    name: "Novedades", value: "1.- Se agrego una nueva interfaz para ordenar la informacion deseada\n"
                        + "2.- Se agrego el apartdado de Valoracion y ranking.\n"
                        + "3.- Se agrego un nuevo menu al bot\n."
                        + "4.- Se actualizo la imagen de todas las waifus de Priconne JP."
                }
                , {
                    name: "Comandos eliminados",
                    value: "3.- Aventura\n"
                }, 
                
            ])
            .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046541015676371054/parches.jpg?width=960&height=225")
            .setTimestamp()
            .setFooter({ text: 'Parches del Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
        //comandos
        let embedGuild = new Discord.EmbedBuilder()
            .setColor(0x00c26b)
            .setTitle("__**COMANDOS DISPONIBLES**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .addFields([
                { name: "guild", value: "lista de las waifus" ,inline:true},
                { name: "info", value: "informacion detallada de waifus" ,inline:true},
                { name: "waifu", value: "Info Extra de Waifus" ,inline:true},
                { name: "rank", value: "Ranks de GB & JP" ,inline:true},
                { name: "menu", value: "menu principal" ,inline:true},
                { name: "pricards", value: "Exclusivo en la mafia" ,inline:true},
                { name: "/kill", value: "interaccion Slash" ,inline:true},
        ])
            .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046541015449882634/COMANDOS.jpg?width=960&height=225")
            .setTimestamp()
            .setFooter({ text: 'Comandos Disponibles', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
        //acerca de
        let embedInfo = new Discord.EmbedBuilder()
            .setColor(0x00c26b)
            .setTitle("__**Acerca de **__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("Yuuki Bot es un bot de uso libre para Discord, el cual contiene informacion actualizada de las waifus, asi como valoracion o pequeños detalles extra que te pueden interesar.\nEste bot no recibe apoyo de nada por lo que si te cobran por el uso reportalo en las paginas principales.\nEste bot lleva funcionando desde hace 4 meses y esperamos siga funcionando un largo tiempo.")
            .addFields([
                
                { name: "Creador & Colaborador", value: "El Shiirou & Helper Play" },
                { name: "¿Hay errores en el bot?", value: "[Aqui podras reportar esos errores del bot](https://discord.gg/fZneMXgEx2)" }
        ])
            .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046541015219175434/aCERCA_DE.jpg?width=960&height=225")
            .setTimestamp()
            .setFooter({ text: 'Acerca de', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
        //paginas
        let embedPj = new Discord.EmbedBuilder()
            .setColor(0x00c26b)
            .setTitle("__**Paginas que requieren tu apoyo**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("Si quieren apoyarnos compartiendo el bot o la pagina seria de mucha ayuda, por lo que les dejamos los enlaces de las paginas")
            .setTimestamp()
            .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046541015873487009/PAGINA.jpg?width=960&height=225")
            .setFooter({ text: 'Paginas', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

        //parametros
        //#region return
        const m = await message.channel.send({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a1], embeds: [embedMenu] })

        const ifilter = i => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: ifilter, time: 9000000 })
        collector.on("collect", async i => {
            if (i.customId === "b1") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a2], embeds: [embedNov] })
            }
            if (i.customId === "b2") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a2], embeds: [embedGuild] })
            }
            if (i.customId === "b3") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a2], embeds: [embedInfo] })
            }
            if (i.customId === "b4") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a3], embeds: [embedPj] })
            }
            if (i.customId === "b5") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a1], embeds: [embedMenu] })
            }
        })
        //#endregion

    }
}




//return message.reply({content: "<@" + message.author.id + "> __**Gracias por usar nuestro bot**__", embeds: [embed] });
