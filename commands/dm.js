const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let mention = message.mentions.members.first() ||  message.guild.members.cache.get(args[0])
    let admin = message.member.hasPermission('ADMINISTRATOR');
if (!mention) return message.channel.send('Invalid Mention someone first.');
if(admin || message.author.id === '584049285163646987'){
    message.channel.send(`Successfully sent dm to ${mention}`)
mention.send(new Discord.MessageEmbed()
.setAuthor(`Author: ${message.author.tag}`,message.author.displayAvatarURL())
.setTitle(`${message.author.tag} Sent you a DM`)
.addField(`Content`,args.slice(1).join(' '))
.setFooter(`Server: ${message.guild.name}`)
.setTimestamp()
.setColor(0xe1e1e1)
);
}
else{
    message.reply(`only people with Administrator permission can do this`)
}
}

  module.exports.help = {
    name: "dm"
  }