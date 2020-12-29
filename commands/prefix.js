const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
    let person = message.member.hasPermission('MANAGE_GUILD');

    if(!person) return message.channel.send('you do not have permission to change the prefix');
    if (person){
         if(!args.join(' ')) return message.channel.send('specify a prefix')
    if(args.join(' ').length > 5) return message.channel.send('the prefix cannot have more than 5 digits')
    if(args.join(' ') == db.get(`prefix_${message.guild.id}`)) return message.channel.send('this guild already have that preifx')
    if(args.join(' ') == '$'){
       db.delete(`prefix_${message.guild.id}`);
        message.reply('prefix was reset!')
        return;
    }
 
    db.set(`prefix_${message.guild.id}`,args.join(' '))
    return message.channel.send(`prefix has been set to **${args.join(' ')}**`)
    } 
}

  module.exports.help = {
    name: "prefix"
  }