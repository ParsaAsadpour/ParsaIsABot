const Discord = require('discord.js');
const eco = require('discord-economy')
const db = require('quick.db')
const talkedRecently = new Set();

module.exports.run = async(bot, message, args) => {
    if (talkedRecently.has(message.author.id)) {
        message.channel.send('You can beg again in 2 minutes');
} else {

    var amounts = [0, 100 , 150 , 124, 230, 236, 64, 129, 143, 83, 149, 183, 130, 159, 175, 153, 133, 210, 209, 140, 50, 16, 54, 85, 35, 79, 92, 43, 1, 112, 43, 26, 64, 46];
    var amount = Math.floor(Math.random() * amounts.length);
    let given =  db.fetch(`money_${message.author.id}`)
    if (given === null) given = 0;
    
    if(amounts[amount] === 0) amount = 'Nothing';
    message.reply(`You begged and earned **${amounts[amount]}**`)
    db.add(`money_${message.author.id}`, amounts[amount])

    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 120000);
}
  }

  module.exports.help = {
    name: "beg"
  }