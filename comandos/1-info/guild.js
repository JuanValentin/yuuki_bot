const Discord = require('discord.js')
module.exports = {
    name: "guild",
    aliases: ["gremio", "casas", "personaje", "tabla"],
    desc: "datos de waifus",
    run: async (client, message, args, prefix) => {

        //#region botones
        let btnJP = new Discord.ButtonBuilder()
            .setCustomId("b1")
            .setLabel("JP")
            .setStyle("Primary")
            .setEmoji("🇯🇵");
        let btnGB = new Discord.ButtonBuilder()
            .setCustomId("b2")
            .setLabel("GB")
            .setStyle("Success")
            .setEmoji("🌍");
        let btnInfo = new Discord.ButtonBuilder()
            .setCustomId("b3")
            .setLabel("COMO USAR")
            .setStyle("Danger")
            .setEmoji("📘");
        let btnRank = new Discord.ButtonBuilder()
            .setLabel("RANKS SUGERIDOS")
            .setStyle("Link")
            .setURL("https://docs.google.com/spreadsheets/d/18VjvDwBrTinuWtqbxUxo0BNOvFpmztFO2p2D03tUxdA/htmlview?pru=AAABgQD4LOk*SuL0_tx0TG_aTX3Lktl8Qw#")
            .setEmoji("⚔️");
        let btnWiki = new Discord.ButtonBuilder()
            .setLabel("HELPER PLAY")
            .setStyle("Link")
            .setURL("https://www.priconne.helperplay.com")
            .setEmoji("🔗");
        let btnImg = new Discord.ButtonBuilder()
            .setLabel("VER IMAGEN")
            .setStyle("Link")
            .setURL("https://drive.google.com/file/d/1eFasA30PWzmeVNpKPSmgT8RzMWtHGyCQ/view?usp=sharing")
            .setEmoji("📱");
        //btn paginas
        let btnRegresar = new Discord.ButtonBuilder()
            .setCustomId("b4")
            .setLabel("REGRESAR")
            .setStyle("Danger")
        let btnOne = new Discord.ButtonBuilder()
            .setCustomId("b5")
            .setStyle("Primary")
            .setEmoji("⏪");
        let btnOne2 = new Discord.ButtonBuilder()
            .setCustomId("b5")
            .setStyle("Primary")
            .setEmoji("◀");
        let btnTwo = new Discord.ButtonBuilder()
            .setCustomId("b6")
            .setStyle("Primary")
            .setEmoji("▶");
        let btnTwo2 = new Discord.ButtonBuilder()
            .setCustomId("b6")
            .setStyle("Primary")
            .setEmoji("◀");
        let btnTree = new Discord.ButtonBuilder()
            .setCustomId("b7")
            .setStyle("Primary")
            .setEmoji("▶");

        //parametros
        //interfaz normal JP
        const a1 = new Discord.ActionRowBuilder().addComponents( btnInfo, btnImg);
        //interfaz gb
        const a2 = new Discord.ActionRowBuilder().addComponents( btnInfo, btnRank);
        //interfaz uso
        //pag1
        const a3 = new Discord.ActionRowBuilder().addComponents(btnRegresar, btnTwo,btnWiki);
        //pag2
        const a4 = new Discord.ActionRowBuilder().addComponents(btnRegresar,btnOne2,btnWiki, btnTree);
        //pag3
        const a5 = new Discord.ActionRowBuilder().addComponents(btnRegresar, btnOne,btnWiki, btnTwo2);
        //#endregion
        //embeds
        let embedJP = new Discord.EmbedBuilder()
            .setColor(0x00c26b)
            .setTitle("__**WAIFUS PRICONNE **__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("Estas son todas las waifus existentes para __**LA VERSION JAPONESA**__\n" +
                "\n" +
                "1️⃣  Los iconos con un ❔ son para futuras waifus que saldran\n" +
                "2️⃣  Los iconos en tono gris, no estan disponibles en el bot, pero se sabe que llegaran pronto.")
            .setImage("https://cdn.discordapp.com/attachments/995446875538853918/1001259587418198136/ROSTER_JP.jpg")
            .setTimestamp()
            .setFooter({ text: 'Guild', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
        let embedGB = new Discord.EmbedBuilder()
            .setColor(0x00c26b)
            .setTitle("__**WAIFUS PRICONNE GB **__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("Estas son todas las waifus existentes y que llegaran a __**LA VERSION GLOBAL**__ (las new year, pueden variar dependiendo de los cambios que realize crunchyroll en los tiempos que asigne)")
            .setImage("https://cdn.discordapp.com/attachments/995446875538853918/996900471333715988/ROSTER_locked.jpg")
            .setTimestamp()
            .setFooter({ text: 'Guild', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
        let embedInfo = new Discord.EmbedBuilder()
            .setColor(0x00c26b)
            .setTitle("__**Como usar el bot **__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("Con la ultima actualizacion, __se cambio la forma en la que se consulta la informacion__ **(info <<persoanje>> <<version>>)**, por la cual aqui unos __ejemplos__ para cada situacion:\n" +
                "__**PAGINA 1**__")
            .addFields([
                { name: 'Normal', value: '>>info pecorine', inline: true },
                { name: 'Summer', value: '>>info pecorine summer', inline: true },
                { name: 'Halloween', value: '>>info pecorine halloween', inline: true },
                { name: 'Christmas', value: '>>info pecorine christmas', inline: true },
                { name: 'New Year', value: '>>info pecorine new year', inline: true },
                { name: 'Ooedo', value: '>>info pecorine ooedo', inline: true },
                { name: 'Valentine', value: '>>info pecorine valentine', inline: true },
                { name: 'Angel', value: '>>info pecorine angel', inline: true },
                { name: 'Cinderella', value: '>>info pecorine cinderella', inline: true },
                { name: 'Princess Form', value: '>>info pecorine princess', inline: true },
                { name: 'Worker', value: '>>info pecorine work', inline: true },
                { name: 'School Festival', value: '>>info pecorine festival', inline: true },
            ])
            .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046576283812888737/GUILD3.jpg?width=960&height=225")
            .setTimestamp()
            .setFooter({ text: 'Pagina 1', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
        let embedInfoOne = new Discord.EmbedBuilder()
            .setColor(0x00c26b)
            .setTitle("__**Como usar el bot **__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("__**PAGINA 2**__")
            .addFields([
                { name: 'Noir', value: '>>info pecorine noir', inline: true },//normal
                { name: 'Magical Girl', value: '>>info pecorine magical', inline: true },//summer
                { name: 'Overload', value: '>>info pecorine overload', inline: true },//hallowen
                { name: 'Wonderland', value: '>>info pecorine wonderland', inline: true },//xmas
                { name: 'Ceremonial', value: '>>info pecorine ceremonial', inline: true },//ny
                { name: 'Stage', value: '>>info pecorine stage', inline: true },//oedo
                { name: 'Pirate', value: '>>info pecorine pirate', inline: true },//valentine
                { name: 'Ranger', value: '>>info pecorine ranger', inline: true },//angel
                { name: 'Time Travel', value: '>>info pecorine travel', inline: true },//cinderella
                { name: 'Phantom Tief', value: '>>info pecorine phantom', inline: true },//princes
                { name: 'Camp', value: '>>info pecorine camp', inline: true },//work
                { name: 'Wild', value: '>>info pecorine wild', inline: true },//work
            ])
            .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046576284186189954/GUILD2.jpg?width=960&height=225")
            .setTimestamp()
            .setFooter({ text: 'Pagina 2', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

        let embedInfoTwo = new Discord.EmbedBuilder()
            .setColor(0x00c26b)
            .setTitle("__**CASOS ESPECIALES**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("Estos son los siguientes casos que debes tomar en cuenta\n__**PAGINA 3**__")
            .addFields([
                { name: 'Akino & Saren', value: 'Para llamar a esta unidad el comando es:\n>>info akisaren' },//normal
                { name: 'Hatusne & Shiori', value: 'Para llamar a esta unidad el comando es:\n>>info hatsushiori' },//normal
                { name: 'Mimi & Misogi & Kyoka', value: 'Para llamar a esta unidad el comando es:\n>>info trio lolis' },//normal
                {
                    name: 'Rin shibuya', value: 'Esta unidad tiene un nombre similar a Rin Morichika(Priconne), la unidad pertenece a las Idolmaster\n' +
                        'Para llamar a esta unidad el comando es:\n>>info rin idol, rin shibuya'
                },//normal
            ])
            .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046576284605612062/GUILD1.jpg?width=960&height=225")
            .setTimestamp()
            .setFooter({ text: 'Pagina 3', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });






        //parametros
        //#region return
        const m = await message.channel.send({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a1], embeds: [embedJP] })

        const ifilter = i => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter: ifilter, time: 9000000 })
        collector.on("collect", async i => {
            if (i.customId === "b1") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a1], embeds: [embedJP] })
            }
            /*
            if (i.customId === "b2") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a2], embeds: [embedGB] })
            }
            */
            if (i.customId === "b3") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a3], embeds: [embedInfo] })
            }
            if (i.customId === "b4") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a1], embeds: [embedJP] })
            }
            if (i.customId === "b5") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a3], embeds: [embedInfo] })
            }
            if (i.customId === "b6") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a4], embeds: [embedInfoOne] })
            }
            if (i.customId === "b7") {
                await i.deferUpdate()
                i.editReply({ content: "<@" + message.author.id + "> ,__**Cargando...**__", components: [a5], embeds: [embedInfoTwo] })
            }
        })
        //#endregion

    }
}
