const { Client, IntentsBitField } = require('discord.js');
const { DISCORD_BOT_TOKEN } = require('./config.json');

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
    if (message.author.bot) {
        return;
    };

    if (message.content === 'hey') {
        message.reply('Yes, This is me');
    }

    // if (message.content === 'You good?') {
    //     message.reply('Nope')
    // };

    // if (message.content === 'Hello') {
    //     message.reply('Testing 123');
    // };
    // if (message.content === 'Who are you to me') {
    //     message.reply('I am your discord bot')
    // };
})

client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand()) 

    if (interaction.commandName === 'hello') {
        interaction.reply('I am here');
    }
    return;
});

// client.on('message', msg => {
//     if (msg.content === 'ping') {
//         msg.reply('pong');
//     }
// });

client.login(DISCORD_BOT_TOKEN);