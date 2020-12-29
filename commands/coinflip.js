const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
    try{
    var coins = ['Heads','Tails'];
    var coin = Math.floor(Math.random() * coins.length);


    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`${message.author.username} Flipped a Coin`)
    .addField(`**__Result__**`,coins[coin])
    .setThumbnail('https://st2.depositphotos.com/1734074/5187/v/950/depositphotos_51875125-stock-illustration-gold-coin-flat-icon.jpg')
    .setFooter(`author: ${message.author.tag}`)
    .setTimestamp()
    .setColor(0xe1e1e1))
    }catch{
        message.reply(`there was an error executing the command.`)
    }
}
module.exports.help = {
    name:'coinflip'
}