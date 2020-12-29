const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
    if(message.author.id === '584049285163646987'){
    var user = message.mentions.users.first();
    let amount = parseInt(args[1]);
    let bal =  db.fetch(`money_${message.author.id}`)
    if(!user) return message.reply(`Invalid Arguement.`)
    if (bal === null) bal = 0;
    
    message.reply(`User balance was set to ${amount}`)
    db.set(`money_${user.id}`, amount)
    }
    else{
        message.reply('Bot owner only  :no_entry:')
    }
}

  module.exports.help = {
    name: "setbal"
  }