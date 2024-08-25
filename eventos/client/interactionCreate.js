
const Discord = require('discord.js')
module.exports = async (client, interaction) => {
        if(!interaction.isCommand)return;

        const slashcom =client.slashcommands.get(interaction.commandName)

        if(!slashcom)return
        try{
            await slashcom.run(client,interaction)
        }catch(ex){
            console.error(ex)
        }
    }

