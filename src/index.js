const { Client, IntentsBitField } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
});

client.on('messageCreate', (message) => {
    console.log(message.content);
    console.log(message);
    if (message.content === 'Hello') {
        message.reply('Yes master, I am here');
    };
    if (message.content === 'Who are you to me') {
        message.reply('I am your slave, master')
    }
})

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login(token);