const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
    if(message.author.id === '584049285163646987'){
    var user = message.mentions.users.first();
    var amount = parseInt(args[1]);
    if(!user) return message.reply(`Who do you want to give money to?`)
    let bal =  db.fetch(`money_${message.author.id}`)

    if (bal === null) bal = 0;
    
    message.reply(`${amount} has been added to user's balance`)
    db.add(`money_${user.id}`, amount)
    }
    else{
        message.reply('Bot owner only :no_entry:')
    }
}

  module.exports.help = {
    name: "addmoney"
  }