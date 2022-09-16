const client = require("../index");
const { prefix } = require("../config.json");

console.log(`${client.user.username} ready!`);
client.on("ready", async () => {
  client.user.setActivity(
    `${prefix}help`,
    { type: "PLAYING" }
  );
}
