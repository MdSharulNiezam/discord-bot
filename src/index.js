const Discord = req('discord.js');
const {Client, IntentsBitField } = req('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildsMembers,
        IntentsBitField.Flags.GuildsMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

const config = req('./config.json')

client.on('ready', () => {
    console.log('I am ready');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
});

client.login(config.token);