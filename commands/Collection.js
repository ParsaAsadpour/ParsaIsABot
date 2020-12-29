const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
    let money = await db.fetch(`money_${message.author.id}`)
    let items = db.fetch(`items_${message.author.id}`)
    if(items === null) items = nothing;
    let emb = new Discord.MessageEmbed()
    .setTitle('Your Collection')
    .setDescription(`Wallet: ${money}`)
    .addField(`Items`, items)
    .setColor(0xe1e1e1)
    message.channel.send(emb)
}

  module.exports.help = {
    name: "collecion"
  }