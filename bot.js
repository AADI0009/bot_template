const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 32767 });
module.exports = client;

client.commands = new Collection();
client.config = require("./config.json");
require("./handler")(client);

const token = process.env["token"] || client.config.token;
if(token === ""){
   console.log("Invalid Token");
  } else {
   client.login(token);
}
