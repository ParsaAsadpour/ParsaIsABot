const Discord = require('discord.js');

module.exports.run = async(bot,message,args) => {
  try{
    var member = message.mentions.members.first();

    var pps = ['8D','8=D','8==D','8===D','8====D','8=====D','8======D','8=======D','8========D','8=========D','8==========D','8===========D','8===========D','8=============D','8================D','Wow! This penis is bigger than your screen'];
    var pp = Math.floor(Math.random() * pps.length);

    if (!member){
    message.channel.send(new Discord.MessageEmbed()
    .setAuthor(`Author: ${message.author.tag}`,message.author.displayAvatarURL())
    .addField(`${message.author.username}'s penis size`,pps[pp])
    .setTimestamp()
    .setColor(0xe1e1e1))
  }
  if(member){
    message.channel.send(new Discord.MessageEmbed()
    .setAuthor(`Author: ${message.author.tag}`,message.author.displayAvatarURL())
    .addField(`${member.displayName}'s penis size`,pps[pp])
    .setTimestamp()
    .setColor(0xe1e1e1))
  }
  }catch{
    message.reply(`there was an error executing the command.`)
}
}

module.exports.help = {
    name:'penis'
}