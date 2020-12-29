const Discord = require('discord.js');
const eco = require('discord-economy');
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
    var amount = args.join(' ');
    let money = await db.fetch(`money_${message.author.id}`)
    let bank = await db.fetch(`bank_${message.author.id}`)

    if (money === null) money = 0;
    if (amount > bank) return message.reply('You have fewer coins than the amount you want to Withdraw!')

    if(amount === 'max' ){
      amount = money;
      db.subtract(`bank_${message.author.id}`, amount)
      db.add(`money_${message.author.id}`, amount)
      message.reply(`${amount} deposited, your balance is ${money}`)
    } 
    else{
    db.add(`money_${message.author.id}`, amount)
    db.subtract(`bank_${message.author.id}`, amount)
    message.reply(`**${amount}** withdrawn.`)
    }
}

  module.exports.help = {
    name: "with"
  }