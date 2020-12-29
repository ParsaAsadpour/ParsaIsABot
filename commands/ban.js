const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${banned.tag} Has been banned :no_entry:.`)
      .setAuthor(`Author: ${message.author.tag}`, message.author.displayAvatarURL())
      .addField(`Username`, banned.tag)
      .addField(`User ID`, banned.id)
      .setColor('GREEN')
      .setTimestamp()
      if(reason){
          successfullyembed.addField(`Reason`,reason)
      }
  
    // MESSAGES
  
    if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
        .setDescription('Mention a user to ban')
        .setColor('GREEN');
      message.channel.send(baninfoembed);
  
      return;
    }
  
    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`You cannot ban yourself`)
        .setColor('RED');
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
        message.guild.members.ban(banned)
        message.channel.send(successfullyembed)
      return;
    }
  
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have `BAN MEMBERS` permission"
        )
        .setColor('RED');
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have `BAN MEMBERS` permission"
        )
        .setColor('RED');
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.members.ban(banned, { reason: reason });
    message.channel.send(successfullyembed);
  }

module.exports.help = {
    name: "ban"
}