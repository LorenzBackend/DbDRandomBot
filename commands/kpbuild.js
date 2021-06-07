const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const Canvas = require('canvas');
const fs = require('fs');


module.exports = {
    name: 'kpbuild',
    async execute(client, message, args){

        let temp1 = "temp";
        let temp2 = "temp";
        var files = fs.readdirSync('./img/killer/')
        let slot1 = files[Math.floor(Math.random() * files.length)]
        let slot2 = files[Math.floor(Math.random() * files.length)]
        let slot3 = files[Math.floor(Math.random() * files.length)]
        let slot4 = files[Math.floor(Math.random() * files.length)]
      
        const canvas = Canvas.createCanvas(667, 187);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('./img/background.jpg');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const perkBG = await Canvas.loadImage('./img/perk_bg.png');
        const perk1 = await Canvas.loadImage('./img/killer/' + slot1);
        const perk2 = await Canvas.loadImage('./img/killer/' + slot2);
        const perk3 = await Canvas.loadImage('./img/killer/' + slot3);
        const perk4 = await Canvas.loadImage('./img/killer/' + slot4);
        ctx.drawImage(perkBG, 50, 50, 125, 125);
        ctx.drawImage(perk1, 55, 50, 125, 125);

        ctx.drawImage(perkBG, 220, 50, 125, 125);
        ctx.drawImage(perk2, 215, 50, 125, 125);

        ctx.drawImage(perkBG, 380, 50, 125, 125);
        ctx.drawImage(perk3, 375, 50, 125, 125);

        ctx.drawImage(perkBG, 540, 50, 125, 125);
        ctx.drawImage(perk4, 535, 50, 125, 125);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), '');
        message.channel.send( "**" + message.author.username + "i have sent a perk build in your DM**")
        message.author.send(attachment).catch(() => message.reply(":warning: Can't send DM you accept not Direct Messages"));
    }
}


