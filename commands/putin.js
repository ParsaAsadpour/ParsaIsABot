const Discord = require('discord.js');
const DIG = require('discord-image-generation')

module.exports.run = async(bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let avatar =  user.displayAvatarURL({dynamic: false, format: 'png',})
    let image = await new DIG.Poutine().getImage(avatar);

    let attach = new Discord.MessageAttachment(image, 'Putin.png');

    message.channel.send(attach)
}

  module.exports.help = {
    name: "putin"
  }