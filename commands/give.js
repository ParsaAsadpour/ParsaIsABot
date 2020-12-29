const Discord = require('discord.js');
const eco = require('discord-economy')
const db = require('quick.db')
module.exports.run = async(bot, message, args) => {
    var user = message.mentions.users.first()
    var amount = args[1]
    let given =  db.fetch(`money_${message.author.id}`)

    if (!user) return message.reply('Reply the user you want to send money to!')
    if (!amount) return message.reply('Specify the amount you want to pay!')
    if (given === null) given = 0;

    if (given < amount) return message.reply('You have fewer coins than the amount you want to transfer!')
    
    message.reply(`Transfering money successfully done!`)
    db.add(`money_${user.id}`, amount)
    db.subtract(`money_${message.author.id}`, amount)
  }

  module.exports.help = {
    name: "give"
  }