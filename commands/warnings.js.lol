const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { emerald } = require("../colors.json");

module.exports = {
    name: 'warnings',

    execute(client, message, args) {
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Please Mention A User!`);

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );

    let embed = new MessageEmbed()
      .setColor(emerald)
      .setTitle(`Member Warnings!`)
      .setDescription(`${Member.user.username} Has ${Warnings || "0"} Warnings!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);
  }
};
