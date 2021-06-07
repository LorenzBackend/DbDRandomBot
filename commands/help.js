const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
      },
    async execute(client, message, args){
        let Embed = new MessageEmbed()
        .setTitle("Command list")
            .setColor("RED")
            .addField("-s", "Random Survivor :new_moon_with_face: ", true)
            .addField("-k", "Random Killer :knife:", true)
            .addField("-item", "Random Survivor item  *clicky clicky*  ", false)
            .addField("-sbuild", "Random Survivor Perk Build", false)
            .addField("-kbuild", "Random Killer Perk Build", false)
            .addField("-spbuild", "Random Survivor Perk Build (Private DM)", false)
            .addField("-kpbuild", "Random Killer Perk Build (Private DM)", false)
            .setFooter("Developer: LorenzFresh");

            message.channel.send(Embed);
    }
} 
   


