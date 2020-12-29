const Discord = require('discord.js');
const moment = require('moment')

module.exports.run = async(bot,message,args) =>{
  try{
    var member = message.mentions.members.first();
    if(member){
      const joinDiscord = moment(message.author.createdAt).format('llll');
      const joinServer = moment(message.author.joinedAt).format('llll');

      message.channel.send(new Discord.MessageEmbed()
      .setTitle('User Informations')
      .setThumbnail(member.user.displayAvatarURL())
      .addField('Username',member.user.tag)
      .addField('User ID',member.id)
      .addField('Joined at',`${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
      .addField('Account Created At', `${moment.utc(member.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
      .addField("Game", `${member.presence.game ? member.presence.game.name : 'None'}`)
      .addField('Status', member.presence.status)
      .setColor('0xe1e1e1'))
    }
    if(!member){
      const joinDiscord = moment(message.author.createdAt).format('llll');
      const joinServer = moment(message.author.joinedAt).format('llll');

      message.channel.send(new Discord.MessageEmbed()
      .setTitle('User Informations')
      .addField('Username',message.author.tag)
      .addField('User ID',message.author.id)
      .addField('Joined at:', `${moment.utc(message.author.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
      .addField('Account Created At:', `${moment.utc(message.author.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
      .addField("Game:", `${message.author.presence.game ? message.author.presence.game.name : 'None'}`)
      .addField('Status:', message.author.presence.status)
      .setThumbnail(message.author.displayAvatarURL())
      .setColor('0xe1e1e1'))
    }
  }catch{
      message.reply(`there was an error executing the command.`)
  }
}
module.exports.help = {
    name: "whois"
}