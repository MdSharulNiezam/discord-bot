const {Client, IntentsBitField } = req('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        
    ]
})