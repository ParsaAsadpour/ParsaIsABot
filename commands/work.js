const Discord = require('discord.js');
const eco = require('discord-economy')
const db = require('quick.db')
const talkedRecently = new Set();
module.exports.run = async(bot, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    message.channel.send('You can work again in 30 minutes');
} else {

    var amounts = [0, 100 , 150 , 124, 450, 230, 463, 236, 64, 129, 143, 83, 342, 348, 355, 149, 183, 294, 300, 340, 325, 435, 130, 159, 175, 153, 133, 210, 209, 500, 140];
    var amount = Math.floor(Math.random() * amounts.length);
    let given =  db.fetch(`money_${message.author.id}`)
    var jobs = ['cashier', 'shop keeper', 'police officer', 'youtuber' ,'cosplayer' , 'Teacher', 'Developer', 'Scientist']
    var job = Math.floor(Math.random() * jobs.length);

    if (given === null) given = 0;
    
    if(amounts[amount] === 0) amount = 'Nothing';
    message.reply(`You worked as a **${jobs[job]}** and earned **${amounts[amount]}**`)
    db.add(`money_${message.author.id}`, amounts[amount])
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 1800000);
  }
  }

  module.exports.help = {
    name: "work"
  }