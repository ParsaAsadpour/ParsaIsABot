const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
    if(message.author.id === '584049285163646987'){
    var user = message.mentions.users.first();
    var amount = parseInt(args[1]);
    if(!user) return message.reply(`Mention someone to subtract`)
    let bal =  db.fetch(`money_${message.author.id}`)

    if (bal === null) bal = 0;
    
    message.reply(`${amount} was subtracted from user balance`)
    db.subtract(`money_${user.id}`, amount)
    }
    else{
        message.reply('Bot owner only :no_entry:')
    }
}

  module.exports.help = {
    name: "submoney"
  }