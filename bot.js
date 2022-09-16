const { Client, Intents } = require('discord.js');
//const QuickDB = require("quick.db");
//const db = new QuickDB({ filePath: "/root/bot_template/database.sqlite" });

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');
require('./colors.json');
require('./src/loader');

client.login(client.config.token);
