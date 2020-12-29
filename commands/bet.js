const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {

    var maxBet = 100000;
    let money = await db.fetch(`money_${message.author.id}`)

    if(!money || money <=0) return message.reply('you don\'t have money to bet.');
    if(!args.join(' ')) return message.reply('specify a bet');

    try{
        var bet = parseFloat(args[0])
    }
    catch{
        return message.reply('Enter number');
    }
    if(bet != Math.floor(bet)) return message.reply('you can only enter numbers.')

    if(money < bet) return message.reply('you don\'t have enough money to bet');

    if(bet > maxBet) return message.reply('you can\'t bet more than 100000');

    var chances = ['win', 'lose'];
    var pick = chances[Math.floor(Math.random() * chances.length)];

    if(pick === "lose"){
        db.subtract(`money_${message.author.id}`, args.join(' '))
        message.reply(`you lost ${args.join(' ')} money`);
    }
    else{
        db.add(`money_${message.author.id}`, bet)
        message.reply(`you won ${bet} money`);
    }
}

  module.exports.help = {
    name: "bet"
  }