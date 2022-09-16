const { Client, Intents } = require('discord.js');

const allIntents = new Intents(32767);
const client = new Client({ intents: allIntents });

client.config = require('./config');
require('./colors.json');
require('./src/loader');

client.login(client.config.token);
