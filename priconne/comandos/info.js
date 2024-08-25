const Discord = require('discord.js');
const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton } = require('discord.js');
const library = require("../../config/rankjp.json")
const axios = require('axios');
module.exports = {
  name: "info",//Nombre del comando
  aliases: ["informacion", "datos","status"],//alternativas
  run: async (client, message, args, prefix) => {

    console.log("ENTRO AL COMANDO INFO");
    console.log(args);

    //#region botones
    let btn_info = new Discord.ButtonBuilder().setCustomId("b1").setStyle("Primary").setEmoji("📃");
    let btn_skills = new Discord.ButtonBuilder().setCustomId("b2").setStyle("Primary").setEmoji("⚔️");
    let btn_Patron = new Discord.ButtonBuilder().setCustomId("b3").setStyle("Primary").setEmoji("🏹");
    let btn_ue = new Discord.ButtonBuilder().setCustomId("b4").setStyle("Primary").setEmoji("💍");
    let btn_ue_2 = new Discord.ButtonBuilder().setCustomId("b8").setStyle("Primary").setEmoji("💎");
    let btn_6_stars = new Discord.ButtonBuilder().setCustomId("b5").setStyle("Success").setEmoji("⭐");
    let btn_valoracion = new Discord.ButtonBuilder().setCustomId("b6").setStyle("Danger").setEmoji("📈");
    let btn_UEplus = new Discord.ButtonBuilder().setCustomId("b7").setStyle("Danger").setEmoji("🗡️").setDisabled(true);
    //casos menu


    /*SIX STARS */
    //main
    const objA1 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron, btn_ue);
    const objA2 = new Discord.ActionRowBuilder().addComponents(btn_6_stars, btn_valoracion);
    //const objA2 = new Discord.ActionRowBuilder().addComponents(btn_6_stars, btn_UEplus, btn_valoracion);
    //info
    const objA3 = new Discord.ActionRowBuilder().addComponents(btn_skills, btn_Patron, btn_ue, btn_6_stars);
    const objA4 = new Discord.ActionRowBuilder().addComponents(btn_valoracion);
    //const objA4 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //habilidades
    const objA5 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_Patron, btn_ue, btn_6_stars);
    const objA6 = new Discord.ActionRowBuilder().addComponents( btn_valoracion);
    //const objA6 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //patron
    const objA7 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_ue, btn_6_stars);
    const objA8 = new Discord.ActionRowBuilder().addComponents(btn_valoracion);
    //const objA8 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //ue
    const objA9 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron,  btn_6_stars);
    const objA10 = new Discord.ActionRowBuilder().addComponents(btn_valoracion);
    //ue 2
    const objA15 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron, btn_ue, btn_6_stars);
    const objA16 = new Discord.ActionRowBuilder().addComponents(btn_valoracion);
    //const objA10 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //sixStar
    const objA11 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron,  btn_ue);
    const objA12 = new Discord.ActionRowBuilder().addComponents(btn_valoracion);
    //const objA12 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //valoracion
    const objA13 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron, btn_ue);
    const objA14 = new Discord.ActionRowBuilder().addComponents(btn_6_stars);
    //const objA14 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_6_stars);


    /*NORMAL WITH UE 2 */
    //main
    const objU1 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron);
    const objU2 = new Discord.ActionRowBuilder().addComponents(btn_ue, btn_ue_2, btn_valoracion);
    //const objB2 = new Discord.ActionRowBuilder().addComponents(btn_ue, btn_UEplus, btn_valoracion);
    //info
    const objU3 = new Discord.ActionRowBuilder().addComponents(btn_skills, btn_Patron, btn_ue);
    const objU4 = new Discord.ActionRowBuilder().addComponents(btn_ue_2, btn_valoracion);
    //const objB4 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //habilidades
    const objU5 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_Patron, btn_ue);
    const objU6 = new Discord.ActionRowBuilder().addComponents(btn_ue_2, btn_valoracion);
    //const objB6 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //patron
    const objU7 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_ue);
    const objU8 = new Discord.ActionRowBuilder().addComponents(btn_ue_2, btn_valoracion);
    //const objB8 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //ue
    const objU9 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron);
    const objU10 = new Discord.ActionRowBuilder().addComponents(btn_ue_2, btn_valoracion);
    //const objB10 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //ue 2
    const objU13 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron);
    const objU14 = new Discord.ActionRowBuilder().addComponents(btn_ue, btn_valoracion);
    //const objB10 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //valoracion
    const objU11 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron);
    const objU12 = new Discord.ActionRowBuilder().addComponents(btn_ue, btn_ue_2);
    //const objB12 = new Discord.ActionRowBuilder().addComponents(btn_ue, btn_UEplus);
    

    /*NORMAL WITH UE */
    //main
    const objB1 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron);
    const objB2 = new Discord.ActionRowBuilder().addComponents(btn_ue, btn_valoracion);
    //const objB2 = new Discord.ActionRowBuilder().addComponents(btn_ue, btn_UEplus, btn_valoracion);
    //info
    const objB3 = new Discord.ActionRowBuilder().addComponents(btn_skills, btn_Patron, btn_ue);
    const objB4 = new Discord.ActionRowBuilder().addComponents(btn_valoracion);
    //const objB4 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //habilidades
    const objB5 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_Patron, btn_ue);
    const objB6 = new Discord.ActionRowBuilder().addComponents(btn_valoracion);
    //const objB6 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //patron
    const objB7 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_ue);
    const objB8 = new Discord.ActionRowBuilder().addComponents( btn_valoracion);
    //const objB8 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //ue
    const objB9 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron);
    const objB10 = new Discord.ActionRowBuilder().addComponents(btn_valoracion);
    //const objB10 = new Discord.ActionRowBuilder().addComponents(btn_UEplus, btn_valoracion);
    //valoracion
    const objB11 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron);
    const objB12 = new Discord.ActionRowBuilder().addComponents(btn_ue);
    //const objB12 = new Discord.ActionRowBuilder().addComponents(btn_ue, btn_UEplus);
    
    
    
    
    
    /*NORMAL NOT UE */
    //main
    const objC1 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron, btn_valoracion);
    //info
    const objC2 = new Discord.ActionRowBuilder().addComponents(btn_skills, btn_Patron, btn_valoracion);
    //habilidades
    const objC3 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_Patron, btn_valoracion);
    //pattron
    const objC4 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_valoracion);
    //valoracion
    const objC5 = new Discord.ActionRowBuilder().addComponents(btn_info, btn_skills, btn_Patron);

    //#endregion

    //#region main
    let mainMenu = new Discord.EmbedBuilder()
      .setTitle("__**PERSONAJE ENCONTRADO**__")
      .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
      .setDescription("Bienvenido al nuevo modo de busqueda de Yuuki bot, por favor seleccione una opcion.\n")
      .addFields([
        { name: "Acerca de 📃", value: "Informacion basica del personaje", inline: true },
        { name: "Habilidades ⚔️", value: "informacion de habilidades", inline: true },
        { name: "Orden de ataque 🏹", value: "Patron de movimiento", inline: true },
        { name: "UE 💍", value: "informacion del Equipamiento Unico", inline: true },
        { name: "UE 2 💎", value: "informacion del Equipamiento Unico 2", inline: true },
        { name: "Asencion 6⭐", value: "Mejora de 6 estrellas", inline: true },
        { name: "Skill lvl261🗡️", value: "No disponible", inline: true },
        { name: "Valoracion 📈", value: "Ranking y clase del personaje", inline: true },
      ])
      .setColor("#a733ff")
      .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046548158638997670/INFO1.jpg?width=960&height=225")
      .setTimestamp()
      .setFooter({ text: 'Habilidades de Waifus', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
    //#endregion
    async function infoPriconne(personaje = '', version = '') {
      try {
        //conexion
        let payload = { accion: 'info_unidad', personaje: personaje, version: version };
        //console.log(payload);
        let res = await axios.post('https://www.priconne.helperplay.com/index.post.php', new URLSearchParams(payload));
        let data = res.data.obj;
        //console.log(data);
        //variables
        let colorUnidad;
        let valorBuscado = data.id_unidad;
        let uniqueData = data.ue;
        let uniqueData2 = data.ue_2;

        let skill = data.skills[1];
        let datos = res.data.obj.skills[0];
        let sixStar = data.skills[2];
        const colorHex = library.waifus.find(persona => persona.id === valorBuscado)
        if (colorHex != undefined) {
          colorUnidad = colorHex.color.trim();
        } else {
          colorUnidad = "#000000";
        }
        let loop = data.set_mov;
        mainMenu.setThumbnail(data.img_icon);
        //INFORMACION
        //console.log(`El color HEX es: ${colorUnidad}`);
        if (data.is_6 == "SI") {
          ////////////////////6 ESTRELLAS
          //info
          let info = new Discord.EmbedBuilder()
            .setTitle("__**INFORMACION GENERAL**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .addFields([{ name: "Nombre", value: data.unidad, inline: true }])
          if (data.cant_stars == 1) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★", inline: true }])
          } else if (data.cant_stars == 2) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★★", inline: true }])
          } else if (data.cant_stars == 3) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★★★", inline: true }])
          }
          if (data.posicion == "Vanguardia") {
            info.addFields([{ name: "Posicion", value: ":red_circle: " + data.posicion, inline: true }])
          } else if (data.posicion == "Medio") {
            info.addFields([{ name: "Posicion", value: ":yellow_circle: " + data.posicion, inline: true }])
          } else if (data.posicion == "Retaguardia") {
            info.addFields([{ name: "Posicion", value: ":blue_circle: " + data.posicion, inline: true }])
          }
          info.addFields([
            { name: "Rol", value: data.rol, inline: true },
            { name: "Tipo de Ataque", value: data.tipo_ataque, inline: true },
            { name: "¿Limitada?", value: data.is_limitada, inline: true },
            { name: "¿UE?", value: data.is_ue, inline: true },
            { name: "¿6 Estrellas?", value: data.is_6, inline: true },
            { name: "\u200B", value: "\u200B", inline: true },
          ])
          info.setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            info.setImage(randomElement.src)
          } else {
            info.setImage(data.img_card)
          }
          info.setFooter({ text: 'INFORMACION GENERAL', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
          //habilidades
          let habilidades = new Discord.EmbedBuilder()
            .setTitle("__**HABILIDADES TRADUCIDAS**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })

          var nombre = data.unidad.toUpperCase();
          if (data.version == "Default") {
            habilidades.setTitle("__**HABILIDADES DE " + nombre + "**__")
          }
          else {
            var variante = data.version.toUpperCase();
            habilidades.setTitle("__**HABILIDADES DE " + nombre + " " + variante + "**__")
          }
          /*UB*/
          habilidades.addFields([{ name: "__**UB: " + datos.skill_ub_name + "**__", value: datos.skill_ub_desc }])
          /*UB ALTER*/
          if (datos.skill_ub_name_alter != "" && datos.skill_ub_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_ub_name_alter, value: datos.skill_ub_desc_alter }])
          }
          /*S1*/
          habilidades.addFields([{ name: "__**S1: " + datos.skill_1_name + "**__", value: datos.skill_1_desc }])
          if (datos.skill_1_name_alter != "" && datos.skill_1_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_1_name_alter, value: datos.skill_1_desc_alter }])
          }
          /*S2*/
          habilidades.addFields([{ name: "__**S2: " + datos.skill_2_name + "**__", value: datos.skill_2_desc }])
          if (datos.skill_2_name_alter != "" && datos.skill_2_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_2_name_alter, value: datos.skill_2_desc_alter }])
          }
          /*EX*/
          habilidades.addFields([{ name: "__**EX: " + datos.skill_ex_name + "**__", value: datos.skill_ex_desc + "\n5★:" + datos.skill_ex_plus }])
          /*SP*/
          if (datos.skill_sp_name != "" && datos.skill_sp_desc != "") {
            habilidades.addFields([{ name: "__**SP: " + datos.skill_sp_name + "**__", value: datos.skill_sp_desc }])
          }
          habilidades.setColor(colorUnidad)
            .setThumbnail(data.img_icon)
            .setImage(data.img_card)
            .setTimestamp()
            .setFooter({ text: 'Habilidades Traducidas', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          //SET MOV
          let setMov = new Discord.EmbedBuilder()
            .setTitle("__**PATRON DE MOVIMIENTO**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .addFields([
              {
                name: "__**GLOSARIO GENERAL**__"
                , value: "**S1: Skill 1 o Habilidad 1**\n"
                  + "**S2: Skill 2 o  Habilidad 2**\n"
                  + "** A: Ataque basico o normal**\n"
                  + "** Ssp: Skill SP o habilidad especial(extra)**"
              }])
          if (loop[0] != undefined) {
            setMov.addFields([{ name: "__**" + loop[0].accion + "**__", value: loop[0].set, inline: false }])
          }
          if (loop[1] != undefined) {
            setMov.addFields([{ name: "__**" + loop[1].accion + "**__", value: loop[1].set, inline: false }])
          }
          if (loop[2] != undefined) {
            setMov.addFields([{ name: "__**" + loop[2].accion + "**__", value: loop[2].set, inline: false }])
          }
          if (loop[3] != undefined) {
            setMov.addFields([{ name: "__**" + loop[3].accion + "**__", value: loop[3].set, inline: false }])
          }
          setMov.setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            setMov.setImage(randomElement.src)
          } else {
            setMov.setImage(data.img_card)
          }
          setMov.setFooter({ text: 'PATRON DE ATAQUE', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          //ue
          let UniqueEq = new Discord.EmbedBuilder()
            .setTitle("__**" + uniqueData.nombre.toUpperCase() + "**__")
            .setDescription("Al recibir el Equipamiento Único, agrega las siguientes estadisticas:")
          for (var i = 0; i < uniqueData.mejoras.length; i++) {
            if (i == 0) {
              UniqueEq.addFields([{ name: "__Mejora de Atributo:__", value: "***" + uniqueData.mejoras[i] + "***" }])
            } else {
              UniqueEq.addFields([{ name: "════ ⋆★⋆ ════", value: "***" + uniqueData.mejoras[i] + "***" }])
            }
          }
          UniqueEq.addFields([{ name: "__**S1: " + skill.skill_1_name + "**__", value: skill.skill_1_desc }])
          UniqueEq.setThumbnail(uniqueData.img_ue)
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            UniqueEq.setImage(randomElement.src)
          } else {
            UniqueEq.setImage(data.img_card)
          }
          UniqueEq.setColor(colorUnidad)
            .setTimestamp()
            .setFooter({ text: 'EQUIPAMIENTO UNICO', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
          //6ta estrella
          let Unleash = new Discord.EmbedBuilder()
            .setTitle("__**MEJORA 6 ESTRELLAS**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .addFields([{ name: "__**" + sixStar.skill_ub_name + "**__", value: sixStar.skill_ub_desc }])
          if (sixStar.skill_1_name != "" && sixStar.skill_1_desc != "")
            Unleash.addFields([{ name: "__**" + sixStar.skill_1_name + "**__", value: sixStar.skill_1_desc }])
          if (sixStar.skill_2_name != "" && sixStar.skill_2_desc != "")
            Unleash.addFields([{ name: "__**" + sixStar.skill_2_name + "**__", value: sixStar.skill_2_desc }])
          if (sixStar.skill_ex_name != "" && sixStar.skill_ex_name != "")
            Unleash.addFields([{ name: "__**" + sixStar.skill_ex_name + "**__", value: sixStar.skill_ex_desc }])
          Unleash.setColor(colorUnidad)
            .setThumbnail(data.img_icon)
            .setImage(data.img_card)
            .setTimestamp()
            .setFooter({ text: '6TA ESTRELLA', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

       
          //RANKING
          let rankTier = new Discord.EmbedBuilder()
            .setTitle("__**Evaluacion de Personaje**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("Debido a las limitaciones en Discord, la evaluacion no esta disponible aqui, si no en la pagina principal, la cual te detalla la calificacion del personaje")
            .addFields({ name: "Evaluacion Lista", value: `[PARA VER CLICK AQUI](https://www.priconne.helperplay.com/unidad.php?id=${data.id_unidad})` })
            .setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            rankTier.setImage(randomElement.src)
          } else {
            rankTier.setImage(data.img_card)
          }
          rankTier.setTimestamp()
            .setFooter({ text: 'RANKING Y EVALUACION GENERAL', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          const m = await message.channel.send({ content: "cargando comando...", embeds: [mainMenu], components: [objA1, objA2] })
          const ifilter = i => i.user.id === message.author.id;
          const collector = m.createMessageComponentCollector({ filter: ifilter, time: 600000 })
          collector.on("collect", async i => {
            if (i.customId === "b1") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [info], components: [objA3, objA4] })
            }
            if (i.customId === "b2") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [habilidades], components: [objA5, objA6] })
            }
            if (i.customId === "b3") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [setMov], components: [objA7, objA8] })
            }
            if (i.customId === "b4") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [UniqueEq], components: [objA9, objA10] })
            }
            if (i.customId === "b5") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [Unleash], components: [objA11, objA12] })
            }
            if (i.customId === "b6") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [rankTier], components: [objA13, objA14] })
            }
          })
          //return message.reply({ content: "Tiene", embeds: [rankTier], components: [objA1, objA2] });

        } else if(data.is_ue_2 == "SI"){
          //info
          let info = new Discord.EmbedBuilder()
            .setTitle("__**INFORMACION GENERAL**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .addFields([{ name: "Nombre", value: data.unidad, inline: true }])
          if (data.cant_stars == 1) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★", inline: true }])
          } else if (data.cant_stars == 2) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★★", inline: true }])
          } else if (data.cant_stars == 3) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★★★", inline: true }])
          }
          if (data.posicion == "Vanguardia") {
            info.addFields([{ name: "Posicion", value: ":red_circle: " + data.posicion, inline: true }])
          } else if (data.posicion == "Medio") {
            info.addFields([{ name: "Posicion", value: ":yellow_circle: " + data.posicion, inline: true }])
          } else if (data.posicion == "Retaguardia") {
            info.addFields([{ name: "Posicion", value: ":blue_circle: " + data.posicion, inline: true }])
          }
          info.addFields([
            { name: "Rol", value: data.rol, inline: true },
            { name: "Tipo de Ataque", value: data.tipo_ataque, inline: true },
            { name: "¿Limitada?", value: data.is_limitada, inline: true },
            { name: "¿UE?", value: data.is_ue, inline: true },
            { name: "¿6 Estrellas?", value: data.is_6, inline: true },
            { name: "\u200B", value: "\u200B", inline: true },
          ])
          info.setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            info.setImage(randomElement.src)
          } else {
            info.setImage(data.img_card)
          }
          info.setFooter({ text: 'INFORMACION GENERAL', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
          //habilidades
          let habilidades = new Discord.EmbedBuilder()
            .setTitle("__**HABILIDADES TRADUCIDAS**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })

          var nombre = data.unidad.toUpperCase();
          if (data.version == "Default") {
            habilidades.setTitle("__**HABILIDADES DE " + nombre + "**__")
          }
          else {
            var variante = data.version.toUpperCase();
            habilidades.setTitle("__**HABILIDADES DE " + nombre + " " + variante + "**__")
          }
          /*UB*/
          habilidades.addFields([{ name: "__**UB: " + datos.skill_ub_name + "**__", value: datos.skill_ub_desc }])
          /*UB ALTER*/
          if (datos.skill_ub_name_alter != "" && datos.skill_ub_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_ub_name_alter, value: datos.skill_ub_desc_alter }])
          }
          /*S1*/
          habilidades.addFields([{ name: "__**S1: " + datos.skill_1_name + "**__", value: datos.skill_1_desc }])
          if (datos.skill_1_name_alter != "" && datos.skill_1_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_1_name_alter, value: datos.skill_1_desc_alter }])
          }
          /*S2*/
          habilidades.addFields([{ name: "__**S2: " + datos.skill_2_name + "**__", value: datos.skill_2_desc }])
          if (datos.skill_2_name_alter != "" && datos.skill_2_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_2_name_alter, value: datos.skill_2_desc_alter }])
          }
          /*EX*/
          habilidades.addFields([{ name: "__**EX: " + datos.skill_ex_name + "**__", value: datos.skill_ex_desc + "\n5★:" + datos.skill_ex_plus }])
          /*SP*/
          if (datos.skill_sp_name != "" && datos.skill_sp_desc != "") {
            habilidades.addFields([{ name: "__**SP: " + datos.skill_sp_name + "**__", value: datos.skill_sp_desc }])
          }
          habilidades.setColor(colorUnidad)
            .setThumbnail(data.img_icon)
            .setImage(data.img_card)
            .setTimestamp()
            .setFooter({ text: 'Habilidades Traducidas', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          //SET MOV
          let setMov = new Discord.EmbedBuilder()
            .setTitle("__**PATRON DE MOVIMIENTO**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .addFields([
              {
                name: "__**GLOSARIO GENERAL**__"
                , value: "**S1: Skill 1 o Habilidad 1**\n"
                  + "**S2: Skill 2 o  Habilidad 2**\n"
                  + "** A: Ataque basico o normal**\n"
                  + "** Ssp: Skill SP o habilidad especial(extra)**"
              }])
          if (loop[0] != undefined) {
            setMov.addFields([{ name: "__**" + loop[0].accion + "**__", value: loop[0].set, inline: false }])
          }
          if (loop[1] != undefined) {
            setMov.addFields([{ name: "__**" + loop[1].accion + "**__", value: loop[1].set, inline: false }])
          }
          if (loop[2] != undefined) {
            setMov.addFields([{ name: "__**" + loop[2].accion + "**__", value: loop[2].set, inline: false }])
          }
          if (loop[3] != undefined) {
            setMov.addFields([{ name: "__**" + loop[3].accion + "**__", value: loop[3].set, inline: false }])
          }
          setMov.setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            setMov.setImage(randomElement.src)
          } else {
            setMov.setImage(data.img_card)
          }
          setMov.setFooter({ text: 'PATRON DE ATAQUE', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          //ue
          let UniqueEq = new Discord.EmbedBuilder()
            .setTitle("__**" + uniqueData.nombre.toUpperCase() + "**__")
            .setDescription("Al recibir el Equipamiento Único, agrega las siguientes estadisticas:")
          for (var i = 0; i < uniqueData.mejoras.length; i++) {
            if (i == 0) {
              UniqueEq.addFields([{ name: "__Mejora de Atributo:__", value: "***" + uniqueData.mejoras[i] + "***" }])
            } else {
              UniqueEq.addFields([{ name: "════ ⋆★⋆ ════", value: "***" + uniqueData.mejoras[i] + "***" }])
            }
          }
          UniqueEq.addFields([{ name: "__**S1: " + skill.skill_1_name + "**__", value: skill.skill_1_desc }])
          if (UniqueEq.skill_1_name_alter != "" && datos.skill_1_desc_alter != "") {
            UniqueEq.addFields([{ name: skill.skill_1_name_alter, value: skill.skill_1_desc_alter }])
          }
          UniqueEq.setThumbnail(uniqueData.img_ue)
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            UniqueEq.setImage(randomElement.src)
          } else {
            UniqueEq.setImage(data.img_card)
          }
          UniqueEq.setColor(colorUnidad)
            .setTimestamp()
            .setFooter({ text: 'EQUIPAMIENTO UNICO', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          // UE 2
          let UniqueEq2 = new Discord.EmbedBuilder()
            .setTitle("__**" + uniqueData2.nombre.toUpperCase() + "**__")
            .setDescription("Al recibir el Equipamiento Único 2, agrega las siguientes estadisticas:")
          for (var i = 0; i < uniqueData2.mejoras.length; i++) {
            if (i == 0) {
              UniqueEq2.addFields([{ name: "__Mejora de Atributo:__", value: "***" + uniqueData2.mejoras[i] + "***" }])
            } else {
              UniqueEq2.addFields([{ name: "════ ⋆★⋆ ════", value: "***" + uniqueData2.mejoras[i] + "***" }])
            }
          }
          UniqueEq2.addFields([{ name: "__**S2: " + sixStar.skill_2_name + "**__", value: sixStar.skill_2_desc }])
          if (UniqueEq2.skill_2_name_alter != "" && datos.skill_2_desc_alter != "") {
            UniqueEq2.addFields([{ name: sixStar.skill_2_name_alter, value: sixStar.skill_2_desc_alter }])
          }
          UniqueEq2.setThumbnail(uniqueData2.img_ue)
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            UniqueEq2.setImage(randomElement.src)
          } else {
            UniqueEq2.setImage(data.img_card)
          }
          UniqueEq2.setColor(colorUnidad)
            .setTimestamp()
            .setFooter({ text: 'EQUIPAMIENTO UNICO 2', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });


       
          let rankTier = new Discord.EmbedBuilder()
            .setTitle("__**Evaluacion de Personaje**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("Debido a las limitaciones en Discord, la evaluacion no esta disponible aqui, si no en la pagina principal, la cual te detalla la calificacion del personaje")
            .addFields({ name: "Evaluacion Lista", value: `[PARA VER CLICK AQUI](https://www.priconne.helperplay.com/unidad.php?id=${data.id_unidad})` })
            .setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            rankTier.setImage(randomElement.src)
          } else {
            rankTier.setImage(data.img_card)
          }
          rankTier.setTimestamp()
            .setFooter({ text: 'RANK Y EVALUACION GENERAL', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          const m = await message.channel.send({ content: "cargando comando...", embeds: [mainMenu], components: [objU1, objU2] })
          const ifilter = i => i.user.id === message.author.id;
          const collector = m.createMessageComponentCollector({ filter: ifilter, time: 600000 })
          collector.on("collect", async i => {
            if (i.customId === "b1") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [info], components: [objU3, objU4] })
            }
            if (i.customId === "b2") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [habilidades], components: [objU5, objU6] })
            }
            if (i.customId === "b3") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [setMov], components: [objU7, objU8] })
            }
            if (i.customId === "b4") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [UniqueEq], components: [objU9, objU10] })
            }
            if (i.customId === "b6") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [rankTier], components: [objU11, objU12] })
            }
            if (i.customId === "b8") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [UniqueEq2], components: [objU13, objU14] })
            }
          })

        }else if (data.is_ue == "SI" ) {
          /////////////////////////5 STAR WITH UE
          //info
          let info = new Discord.EmbedBuilder()
            .setTitle("__**INFORMACION GENERAL**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .addFields([{ name: "Nombre", value: data.unidad, inline: true }])
          if (data.cant_stars == 1) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★", inline: true }])
          } else if (data.cant_stars == 2) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★★", inline: true }])
          } else if (data.cant_stars == 3) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★★★", inline: true }])
          }
          if (data.posicion == "Vanguardia") {
            info.addFields([{ name: "Posicion", value: ":red_circle: " + data.posicion, inline: true }])
          } else if (data.posicion == "Medio") {
            info.addFields([{ name: "Posicion", value: ":yellow_circle: " + data.posicion, inline: true }])
          } else if (data.posicion == "Retaguardia") {
            info.addFields([{ name: "Posicion", value: ":blue_circle: " + data.posicion, inline: true }])
          }
          info.addFields([
            { name: "Rol", value: data.rol, inline: true },
            { name: "Tipo de Ataque", value: data.tipo_ataque, inline: true },
            { name: "¿Limitada?", value: data.is_limitada, inline: true },
            { name: "¿UE?", value: data.is_ue, inline: true },
            { name: "¿6 Estrellas?", value: data.is_6, inline: true },
            { name: "\u200B", value: "\u200B", inline: true },
          ])
          info.setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            info.setImage(randomElement.src)
          } else {
            info.setImage(data.img_card)
          }
          info.setFooter({ text: 'INFORMACION GENERAL', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
          //habilidades
          let habilidades = new Discord.EmbedBuilder()
            .setTitle("__**HABILIDADES TRADUCIDAS**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })

          var nombre = data.unidad.toUpperCase();
          if (data.version == "Default") {
            habilidades.setTitle("__**HABILIDADES DE " + nombre + "**__")
          }
          else {
            var variante = data.version.toUpperCase();
            habilidades.setTitle("__**HABILIDADES DE " + nombre + " " + variante + "**__")
          }
          /*UB*/
          habilidades.addFields([{ name: "__**UB: " + datos.skill_ub_name + "**__", value: datos.skill_ub_desc }])
          /*UB ALTER*/
          if (datos.skill_ub_name_alter != "" && datos.skill_ub_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_ub_name_alter, value: datos.skill_ub_desc_alter }])
          }
          /*S1*/
          habilidades.addFields([{ name: "__**S1: " + datos.skill_1_name + "**__", value: datos.skill_1_desc }])
          if (datos.skill_1_name_alter != "" && datos.skill_1_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_1_name_alter, value: datos.skill_1_desc_alter }])
          }
          /*S2*/
          habilidades.addFields([{ name: "__**S2: " + datos.skill_2_name + "**__", value: datos.skill_2_desc }])
          if (datos.skill_2_name_alter != "" && datos.skill_2_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_2_name_alter, value: datos.skill_2_desc_alter }])
          }
          /*EX*/
          habilidades.addFields([{ name: "__**EX: " + datos.skill_ex_name + "**__", value: datos.skill_ex_desc + "\n5★:" + datos.skill_ex_plus }])
          /*SP*/
          if (datos.skill_sp_name != "" && datos.skill_sp_desc != "") {
            habilidades.addFields([{ name: "__**SP: " + datos.skill_sp_name + "**__", value: datos.skill_sp_desc }])
          }
          habilidades.setColor(colorUnidad)
            .setThumbnail(data.img_icon)
            .setImage(data.img_card)
            .setTimestamp()
            .setFooter({ text: 'Habilidades Traducidas', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          //SET MOV
          let setMov = new Discord.EmbedBuilder()
            .setTitle("__**PATRON DE MOVIMIENTO**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .addFields([
              {
                name: "__**GLOSARIO GENERAL**__"
                , value: "**S1: Skill 1 o Habilidad 1**\n"
                  + "**S2: Skill 2 o  Habilidad 2**\n"
                  + "** A: Ataque basico o normal**\n"
                  + "** Ssp: Skill SP o habilidad especial(extra)**"
              }])
          if (loop[0] != undefined) {
            setMov.addFields([{ name: "__**" + loop[0].accion + "**__", value: loop[0].set, inline: false }])
          }
          if (loop[1] != undefined) {
            setMov.addFields([{ name: "__**" + loop[1].accion + "**__", value: loop[1].set, inline: false }])
          }
          if (loop[2] != undefined) {
            setMov.addFields([{ name: "__**" + loop[2].accion + "**__", value: loop[2].set, inline: false }])
          }
          if (loop[3] != undefined) {
            setMov.addFields([{ name: "__**" + loop[3].accion + "**__", value: loop[3].set, inline: false }])
          }
          setMov.setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            setMov.setImage(randomElement.src)
          } else {
            setMov.setImage(data.img_card)
          }
          setMov.setFooter({ text: 'PATRON DE ATAQUE', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          //ue
          let UniqueEq = new Discord.EmbedBuilder()
            .setTitle("__**" + uniqueData.nombre.toUpperCase() + "**__")
            .setDescription("Al recibir el Equipamiento Único, agrega las siguientes estadisticas:")
          for (var i = 0; i < uniqueData.mejoras.length; i++) {
            if (i == 0) {
              UniqueEq.addFields([{ name: "__Mejora de Atributo:__", value: "***" + uniqueData.mejoras[i] + "***" }])
            } else {
              UniqueEq.addFields([{ name: "════ ⋆★⋆ ════", value: "***" + uniqueData.mejoras[i] + "***" }])
            }
          }
          UniqueEq.addFields([{ name: "__**S1: " + skill.skill_1_name + "**__", value: skill.skill_1_desc }])
          if (UniqueEq.skill_1_name_alter != "" && datos.skill_1_desc_alter != "") {
            UniqueEq.addFields([{ name: skill.skill_1_name_alter, value: skill.skill_1_desc_alter }])
          }
          UniqueEq.setThumbnail(uniqueData.img_ue)
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            UniqueEq.setImage(randomElement.src)
          } else {
            UniqueEq.setImage(data.img_card)
          }
          UniqueEq.setColor(colorUnidad)
            .setTimestamp()
            .setFooter({ text: 'EQUIPAMIENTO UNICO', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });


       
          let rankTier = new Discord.EmbedBuilder()
            .setTitle("__**Evaluacion de Personaje**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("Debido a las limitaciones en Discord, la evaluacion no esta disponible aqui, si no en la pagina principal, la cual te detalla la calificacion del personaje")
            .addFields({ name: "Evaluacion Lista", value: `[PARA VER CLICK AQUI](https://www.priconne.helperplay.com/unidad.php?id=${data.id_unidad})` })
            .setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            rankTier.setImage(randomElement.src)
          } else {
            rankTier.setImage(data.img_card)
          }
          rankTier.setTimestamp()
            .setFooter({ text: 'RANK Y EVALUACION GENERAL', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          const m = await message.channel.send({ content: "cargando comando...", embeds: [mainMenu], components: [objB1, objB2] })
          const ifilter = i => i.user.id === message.author.id;
          const collector = m.createMessageComponentCollector({ filter: ifilter, time: 600000 })
          collector.on("collect", async i => {
            if (i.customId === "b1") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [info], components: [objB3, objB4] })
            }
            if (i.customId === "b2") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [habilidades], components: [objB5, objB6] })
            }
            if (i.customId === "b3") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [setMov], components: [objB7, objB8] })
            }
            if (i.customId === "b4") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [UniqueEq], components: [objB9, objB10] })
            }
            if (i.customId === "b6") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [rankTier], components: [objB11, objB12] })
            }
          })

        } else {
          //////////////////5 STARS NO UE
          //info
          let info = new Discord.EmbedBuilder()
            .setTitle("__**INFORMACION GENERAL**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .addFields([{ name: "Nombre", value: data.unidad, inline: true }])
          if (data.cant_stars == 1) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★", inline: true }])
          } else if (data.cant_stars == 2) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★★", inline: true }])
          } else if (data.cant_stars == 3) {
            info.addFields([{ name: "Estrellas Iniciales", value: "★★★", inline: true }])
          }
          if (data.posicion == "Vanguardia") {
            info.addFields([{ name: "Posicion", value: ":red_circle: " + data.posicion, inline: true }])
          } else if (data.posicion == "Medio") {
            info.addFields([{ name: "Posicion", value: ":yellow_circle: " + data.posicion, inline: true }])
          } else if (data.posicion == "Retaguardia") {
            info.addFields([{ name: "Posicion", value: ":blue_circle: " + data.posicion, inline: true }])
          }
          info.addFields([
            { name: "Rol", value: data.rol, inline: true },
            { name: "Tipo de Ataque", value: data.tipo_ataque, inline: true },
            { name: "¿Limitada?", value: data.is_limitada, inline: true },
            { name: "¿UE?", value: data.is_ue, inline: true },
            { name: "¿6 Estrellas?", value: data.is_6, inline: true },
            { name: "\u200B", value: "\u200B", inline: true },
          ])
          info.setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            info.setImage(randomElement.src)
          } else {
            info.setImage(data.img_card)
          }
          info.setFooter({ text: 'INFORMACION GENERAL', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
          //habilidades
          let habilidades = new Discord.EmbedBuilder()
            .setTitle("__**HABILIDADES TRADUCIDAS**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })

          var nombre = data.unidad.toUpperCase();
          if (data.version == "Default") {
            habilidades.setTitle("__**HABILIDADES DE " + nombre + "**__")
          }
          else {
            var variante = data.version.toUpperCase();
            habilidades.setTitle("__**HABILIDADES DE " + nombre + " " + variante + "**__")
          }
          /*UB*/
          habilidades.addFields([{ name: "__**UB: " + datos.skill_ub_name + "**__", value: datos.skill_ub_desc }])
          /*UB ALTER*/
          if (datos.skill_ub_name_alter != "" && datos.skill_ub_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_ub_name_alter, value: datos.skill_ub_desc_alter }])
          }
          /*S1*/
          habilidades.addFields([{ name: "__**S1: " + datos.skill_1_name + "**__", value: datos.skill_1_desc }])
          if (datos.skill_1_name_alter != "" && datos.skill_1_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_1_name_alter, value: datos.skill_1_desc_alter }])
          }
          /*S2*/
          habilidades.addFields([{ name: "__**S2: " + datos.skill_2_name + "**__", value: datos.skill_2_desc }])
          if (datos.skill_2_name_alter != "" && datos.skill_2_desc_alter != "") {
            habilidades.addFields([{ name: datos.skill_2_name_alter, value: datos.skill_2_desc_alter }])
          }
          /*EX*/
          habilidades.addFields([{ name: "__**EX: " + datos.skill_ex_name + "**__", value: datos.skill_ex_desc + "\n5★:" + datos.skill_ex_plus }])
          /*SP*/
          if (datos.skill_sp_name != "" && datos.skill_sp_desc != "") {
            habilidades.addFields([{ name: "__**SP: " + datos.skill_sp_name + "**__", value: datos.skill_sp_desc }])
          }
          habilidades.setColor(colorUnidad)
            .setThumbnail(data.img_icon)
            .setImage(data.img_card)
            .setTimestamp()
            .setFooter({ text: 'Habilidades Traducidas', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          //SET MOV
          let setMov = new Discord.EmbedBuilder()
            .setTitle("__**PATRON DE MOVIMIENTO**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .addFields([
              {
                name: "__**GLOSARIO GENERAL**__"
                , value: "**S1: Skill 1 o Habilidad 1**\n"
                  + "**S2: Skill 2 o  Habilidad 2**\n"
                  + "** A: Ataque basico o normal**\n"
                  + "** Ssp: Skill SP o habilidad especial(extra)**"
              }])
          if (loop[0] != undefined) {
            setMov.addFields([{ name: "__**" + loop[0].accion + "**__", value: loop[0].set, inline: false }])
          }
          if (loop[1] != undefined) {
            setMov.addFields([{ name: "__**" + loop[1].accion + "**__", value: loop[1].set, inline: false }])
          }
          if (loop[2] != undefined) {
            setMov.addFields([{ name: "__**" + loop[2].accion + "**__", value: loop[2].set, inline: false }])
          }
          if (loop[3] != undefined) {
            setMov.addFields([{ name: "__**" + loop[3].accion + "**__", value: loop[3].set, inline: false }])
          }
          setMov.setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            setMov.setImage(randomElement.src)
          } else {
            setMov.setImage(data.img_card)
          }
          setMov.setFooter({ text: 'PATRON DE ATAQUE', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });



          //RANKING
          let rankTier = new Discord.EmbedBuilder()
            .setTitle("__**Evaluacion de Personaje**__")
            .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
            .setDescription("Debido a las limitaciones en Discord, la evaluacion no esta disponible aqui, si no en la pagina principal, la cual te detalla la calificacion del personaje")
            .addFields({ name: "Evaluacion Lista", value: `[PARA VER CLICK AQUI](https://www.priconne.helperplay.com/unidad.php?id=${data.id_unidad})` })
            .setColor(colorUnidad)
            .setThumbnail(data.img_victory)
            .setTimestamp()
          if (data.galeria.length > 0) {
            const randomElement = data.galeria[Math.floor(Math.random() * data.galeria.length)];
            rankTier.setImage(randomElement.src)
          } else {
            rankTier.setImage(data.img_card)
          }
          rankTier.setTimestamp()
            .setFooter({ text: 'RANKING Y EVALUACION GENERAL', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });

          const m = await message.channel.send({ content: "cargando comando...", embeds: [mainMenu], components: [objC1] })
          const ifilter = i => i.user.id === message.author.id;
          const collector = m.createMessageComponentCollector({ filter: ifilter, time: 900000 })
          collector.on("collect", async i => {
            if (i.customId === "b1") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [info], components: [objC2] })
            }
            if (i.customId === "b2") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [habilidades], components: [objC3] })
            }
            if (i.customId === "b3") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [setMov], components: [objC4] })
            }
            if (i.customId === "b6") {
              await i.deferUpdate()
              i.editReply({ content: "cargando comando...", embeds: [rankTier], components: [objC5] })
            }
          })
        }
      } catch (error) {
        console.log(error);
        //
        let nobusqueda = new Discord.EmbedBuilder()
          .setTitle("__**NO SE ENCONTRÓ NADA**__")
          .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
          .setDescription("parece que no encontramos nada, puede deberse a 3 cosas:")
          .addFields([
          { name: "ERROR DE SINTAXIS", value: "Escribiste mal el nombre de la waifu, sugerimos que observe en **>>guild** para saber como consultar a la waifu deseada" },
          { name: "PERSONAJE NO EXISTE", value: "Escribiste el nombre de un personaje que no existe." },
          { name: "NO DISPONIBLE", value: "Es posible que aun no esté disponible la info en la pagina" },
          { name: "ERROR DE SISTEMA", value: "Si ninguna de las anteriores es verdad, contacta a soporte tecnico" }
          ])
          .setColor("#9132a8")
          .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046548158408294530/INFO2.jpg?width=960&height=225")
          .setTimestamp()
          .setFooter({ text: 'Habilidades de Waifus', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
        return message.reply({ content: "oh no...", embeds: [nobusqueda] });
      }
    }
    //#region Main
    const personaje = args[0];
    const version = args[1];
    if (!personaje) {
      let nobusqueda = new Discord.EmbedBuilder()
        .setTitle("__**IMPORTANTE**__")
        .setAuthor({ name: 'Yuuki Bot', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png', url: 'https://www.priconne.helperplay.com' })
        .setDescription("Para poder usar el comando debes nombrar a la waifu que deseas buscar, por ejemplo:\n>>info neneka o >>info kyaru summer")
        .setColor("#9132a8")
        .setImage("https://media.discordapp.net/attachments/1045758832854437968/1046548157762371704/INFO_3.jpg?width=960&height=225")
        .setTimestamp()
        .setFooter({ text: 'Habilidades de Waifus', iconURL: 'https://cdn.discordapp.com/attachments/995446875538853918/1000161685966946384/icon_unit_100011.png' });
      return message.reply({ content: "oh no...", embeds: [nobusqueda] });
    } else if (personaje =="ark"){
        infoPriconne("rei",version);
          
      }else {

      infoPriconne(personaje, version);
    }
    //#endregion 
  }
}