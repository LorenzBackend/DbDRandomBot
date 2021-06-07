const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
})

client.on("ready", () => {
    client.user.setActivity('-help');
    setInterval(() => {
        let id = Math.floor(Math.random() * activites.length);
        client.user.setActivity(activites[id]);
    }, 20000);
}); 

var activites = [
    '-help',
    'Dead by Daylight'
]

client.login('ODUwNzg5MzYyNTQ2NzY5OTIw.YLu1Vg.MfhU6jAirbmFuSWY9ghU3pFahqo');