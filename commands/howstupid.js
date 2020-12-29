const Discord = require('discord.js');
const author = require('discord.js');
const randomString = require('random-string');

module.exports.run = async(bot,message,args) =>{
  try{
    var member = message.mentions.members.first();

    var stupid = randomString({
      length: 2,
      numeric: true,
      letters: false,
      special: false
    });

    if (!member){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Stupid Rate Machine')
    .setDescription(`You are ${stupids[stupid]}% stupid :man_shrugging: `)
    .setFooter(`author: ${message.author.tag}`)
    .setTimestamp()
    .setColor(0xe1e1e1))
  }
  if(member){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Stupid Rate Machine')
    .setDescription(`${member.displayName} is ${stupids[stupid]}% stupid :man_shrugging:`)
    .setFooter(`author: ${message.author.tag}`)
    .setTimestamp()
    .setColor(0xe1e1e1))
  }
  }catch{
    message.reply(`there was an error executing the command.`)
}
}
module.exports.help = {
    name:'howstupid'
}