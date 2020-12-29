const Discord = require('discord.js');
const DIG = require('discord-image-generation')

module.exports.run = async(bot, message, args) => {
    let text = args.join(' ');
    if(!text){ 
        message.reply(`you must enter 300 characters or less.`)
        return;
}
    else{
    let image = await new DIG.LisaPresentation().getImage(text);
    let attach = new Discord.MessageAttachment(image, 'lisa.png');

    message.channel.send(attach)
    }
}

  module.exports.help = {
    name: "lisa"
  }