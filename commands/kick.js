const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kicked = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${kicked.tag} Has been kicked :no_entry:.`)
      .setAuthor(`Author: ${message.author.tag}`, message.author.displayAvatarURL())
      .addField(`Username`, kicked.tag)
      .addField(`User ID`, kicked.id)
      .setColor('GREEN')
      .setTimestamp()
      if(reason){
          successfullyembed.addField(`Reason`,reason)
      }
  
    // MESSAGES
  
    if (!kicked) {
      let kickinfoembed = new Discord.MessageEmbed()
        .setDescription('Mention a user to kick')
        .setColor('GREEN');
      message.channel.send(kickinfoembed);
  
      return;
    }
  
    if (message.author === kicked) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`You cannot kick yourself`)
        .setColor('RED');
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
      message.guild.member(kicked).kick();
        message.channel.send(successfullyembed)
      return;
    }
  
    if (!message.member.permissions.has("kick_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have `kick MEMBERS` permission"
        )
        .setColor('RED');
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("kick_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have `kick MEMBERS` permission"
        )
        .setColor('RED');
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.member(kicked).kick(reason);
    message.channel.send(successfullyembed);
  }

module.exports.help = {
    name: "kick"
}