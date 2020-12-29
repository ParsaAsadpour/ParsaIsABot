const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
  try{
    const snp = bot.snipes.get(message.channel.id);
    if(!snp) return message.reply("there's nothing to snipe");

    const embed = new Discord.MessageEmbed()
    .setTitle('Message Sniped!')
    .setTimestamp()
    .setColor(0xe1e1e1)
    .setThumbnail(snp.author.displayAvatarURL())
    .addField('Member',snp.author.tag)
    .addField('Message Content',snp.content)
    .setFooter(`Sniped By ${message.author.tag} | Deleted by ${snp.author.tag}`, message.author.displayAvatarURL());

    if(snp.image) embed.addField('Message attachment',snp.image);

    message.channel.send(embed)
  }catch{
    message.reply(`there was an error executing the command.`)
}
}

  module.exports.help = {
    name: "snipe"
  }