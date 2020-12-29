const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
  try{
    var member = message.mentions.members.first();

    var covids = ['Positive :mask:','Negative :slight_smile:'];
    var covid = Math.floor(Math.random() * covids.length);

    if (!member){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`${message.author.username}'s Covid Test`)
    .addField(`Doctor:`,`I did some covid test on you`)
    .setThumbnail('https://advancetitan.com/wp-content/uploads/2020/05/CoronavirusSARS-CoV-2_without_background-896x900.png')
    .addField('**__Your Result__**',covids[covid])
    .setColor(0xe1e1e1)
    .setFooter(`Author: ${message.author.tag}`))
  }
  if(member){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`${member.displayName}'s Covid Test`)
    .addField(`Doctor:`,`I did some covid test on you`)
    .setThumbnail('https://advancetitan.com/wp-content/uploads/2020/05/CoronavirusSARS-CoV-2_without_background-896x900.png')
    .addField('**__Result__**',covids[covid])
    .setColor(0xe1e1e1)
    .setFooter(`Author: ${message.author.tag}`))
  }
}catch{
  message.reply(`there was an error executing the command.`)
}
}
module.exports.help = {
    name:'covidtest'
}