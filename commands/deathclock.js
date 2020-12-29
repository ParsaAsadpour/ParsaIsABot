const Discord = require('discord.js');

module.exports.run = async(bot,message,args) => {
  try{
    var member = message.mentions.members.first();

    var dies = ['5 Seconds','1 Hour','30 Minutes','4 Hours','14 Years','9 Hours','1 Day','2 Days','5 Years','1 Week','3 Weeks','1 Month','8 Months','6 Years','12 Years','9 Years','21 Years','29 Years','32 Years','37 Years','40 Years','30 Years','45 Years','49 Years','53 Years','57 Years','68 Years','60 Years','61 Years','71 Years','78 Years'];
    var die = Math.floor(Math.random() * dies.length);

    if (member){
      return;
      }
  if(!member){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Death Clock')
    .setThumbnail('https://image.freepik.com/free-vector/human-skull-illustration_72843-86.jpg')
    .setDescription(`You will die in **${dies[die]}** :skull:`)
    .setColor(0xe1e1e1)
    .setFooter(`Author: ${message.author.tag}`))
  }
}catch{
  message.reply(`there was an error executing the command.`)
}
}

module.exports.help = {
    name: 'deathclock'
}