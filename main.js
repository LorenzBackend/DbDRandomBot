const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
})

client.on("ready", () => {
    const channel = client.guild.channels.cache.find(channel => channel.name === 'general') || client.guild.channels.cache.first();
if (channel) {
    channel.send('DBD Randomizer Updateted by Developer');
} else {
    console.log('The server ' + guild.name + ' has no channels.');
}
   // client.user.setActivity('-help');
    setInterval(() => {
        let id = Math.floor(Math.random() * activites.length);
        client.user.setActivity(activites[id]);

    }, 30000);
}); 

var activites = [
    '-help',
    'Dead by Daylight',
    `with | ${client.guilds.cache.size} servers`
]
client.login(process.env.DJS_TOKEN);
