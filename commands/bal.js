const Discord = require('discord.js');
const eco = require('discord-economy');
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
  let user = message.mentions.members.first() || message.author;
    let money = await db.fetch(`money_${user.id}`)
    let bank = await db.fetch(`bank_${user.id}`)

    if (money === null) money = 0;
    if (bank === null) bank = 0;

    message.channel.send(new Discord.MessageEmbed()
    .addField('Balace of', user)
    .addField(`Wallet`,money)
    .addField(`Bank`, bank)
    .addField(`Net Worth` , money + bank)
    .setFooter(`Author: ${message.author.tag}`, message.author.displayAvatarURL())
    .setColor(0xe1e1e1)
    )
    // message.channel.send(`Hey ${message.author.tag}! You own ${money} coins.`);
}

  module.exports.help = {
    name: "bal"
  }