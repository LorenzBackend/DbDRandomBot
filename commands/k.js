const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const Canvas = require('canvas');
const fs = require('fs');

module.exports = {
    name: 'k',
    async execute(client, message, args){
        var files = fs.readdirSync('./img/killer/avatar/')
        let chooseItem = files[Math.floor(Math.random() * files.length)]
 
        const canvas = Canvas.createCanvas(100, 100);
        const ctx = canvas.getContext('2d');
        const item = await Canvas.loadImage('./img/killer/avatar/' + chooseItem);
        ctx.drawImage(item, 0, 0, canvas.width, canvas.height);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), '');

        message.channel.send( "**" + message.author.username + " your random Killer is**")
        message.channel.send(attachment)
    }

}
