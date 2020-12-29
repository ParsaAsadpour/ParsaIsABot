const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('ms')

module.exports.run = async(bot, message, args) => {
    let cooldown = 8.64e+7,
    amount = 1000;

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`)

    if(lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
      let timeObj = ms(cooldown - (Date.now() - lastDaily));

      message.reply(`You already claimed your daily reward.`)
    }
    else{
      message.reply(`Successfully claimed ${amount}`)
      db.set(`lastDaily_${message.author.id}`, Date.now())
      db.add(`money_${message.author.id}`, amount);
    }
}

  module.exports.help = {
    name: "daily"
  }