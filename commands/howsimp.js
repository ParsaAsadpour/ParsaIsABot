const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
  try{
    var member = message.mentions.members.first();

    var simps = ['0','5','9','13','15','2','21','23','26','33','42','40','38','48','50','52','56','59','63','69','71','75','79','83','80','85','88','94','99,9999','100'];
    var simp = Math.floor(Math.random() * simps.length);

    if (!member){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Simp Rate Machine')
    .setDescription(`You are ${simps[simp]}% simp :bouquet: `)
    .setFooter(`author: ${message.author.tag}`)
    .setTimestamp()
    .setColor(0xe1e1e1))
  }
  if(member){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Simp Rate Machine')
    .setDescription(`${member.displayName} is ${simps[simp]}% simp :bouquet: `)
    .setFooter(`author: ${message.author.tag}`)
    .setTimestamp()
    .setColor(0xe1e1e1))
  }
}catch{
  message.reply(`there was an error executing the command.`)
}
}
module.exports.help = {
    name:'howsimp'
}