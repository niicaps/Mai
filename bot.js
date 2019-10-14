
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
            case 'owo':
        message.channel.send('owo what's this?')
        break;   
    }

});
client.login(process.env.BOT_TOKEN)
