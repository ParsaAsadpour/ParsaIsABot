const Discord = require('discord.js');
const DIG = require('discord-image-generation')

module.exports.run = async(bot, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let avatar =  user.displayAvatarURL({dynamic: false, format: 'png',})
    let image = await new DIG.Beautiful().getImage(avatar);

    let attach = new Discord.MessageAttachment(image, 'beautiful.js.png');

    message.channel.send(attach)
}

  module.exports.help = {
    name: "beautiful"
  }