const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
    let money = await db.fetch(`money_${message.author.id}`)
    let page1 = new Discord.MessageEmbed()
    .setTitle('Shop Item List')
    .setDescription(`your wallet: ${money}`)
    .addField(`Dildo`, `Price: 100 \n $buy dildo`)
    .addField(`Laptop`,'Price: 2000 \n buy laptop')
    .addField(`Cellphone`,'Price: 1200 \n $buy cellphone')
    .addField(`Golden ring`,'Price: 22000 \n $buy ring')
    .addField(`HiT's Used condom`,'Price: 1000 \n $buy condom')
    .addField(`Clown Medal`,`Price: 6000 \n $buy medal`)
    .addField(`Clown Trophy`,`Price: 10000 \n $buy trophy`)
    .setFooter('Page 1/2')
    .setTimestamp()
    .setColor(0xe1e1e1);
    let page2 = new Discord.MessageEmbed()
    .setTitle('Shop Item List')
    .setDescription(`Your wallet ${money}`)
    .addField(`Bike`, `Pice: 8000 \n $buy bike`)
    .addField(`Car`, 'Price: 18000 \n $buy car')
    .addField(`Hunting Rifle`,'Price: 5000 \n $buy rifle')
    .setFooter('Page 2/2')
    .setTimestamp()
    .setColor(0xe1e1e1);

    if(args[0] === '1' || !args[0])return message.channel.send(page1);

    if(args[0] === '2') return message.channel.send(page2);
}

  module.exports.help = {
    name: "shop"
  }