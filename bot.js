
const Discord = require('discord.js');

const client = new Discord.Client();
const PREFIX = '.';
var servers = {};
var version = '0.0.1'
const usedCommandRecently = new Set();
client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', async message => {



        let args = message.content.substring(PREFIX.length).split(" ");



        switch (args[0]) {
            case 'ping':
        message.channel.send('Pong!')
        break;
    }

});
client.login(process.env.BOT_TOKEN)

var activityDoing = [
    "Am I spooky yet?",
    "Carving pumpkins",
]
