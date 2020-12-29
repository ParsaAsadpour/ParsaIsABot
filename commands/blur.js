const Discord = require('discord.js');
const DIG = require('discord-image-generation')

module.exports.run = async(bot, message, args) => {
    let level = args[1]
    let user = message.mentions.users.first() || message.author;
    let avatar =  user.displayAvatarURL({dynamic: false, format: 'png',})
    let image = await new DIG.Blur().getImage(avatar, level);

    let attach = new Discord.MessageAttachment(image, 'Blur.png');

    message.channel.send(attach)
}

  module.exports.help = {
    name: "blur"
  }