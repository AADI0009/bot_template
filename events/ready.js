const client = require("../bot");
const app.prefix = require("../config.js");

console.log(`${client.user.username} ready!`);
client.on("ready", async () => {
  client.user.setActivity(
    `${prefix}help`,
    { type: "PLAYING" }
  );
}
