const { token, GUILD_ID, CLIENT_ID } = require('./config.json');
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'hello',
        description: 'This is saying hello to Bot',
    },
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Registering slash commands...')
        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands }
        );
        console.log('Slash commands were registered succesfully!')
    } catch (error) {
        console.log(`there was an error: ${error}`);
    }
})();
