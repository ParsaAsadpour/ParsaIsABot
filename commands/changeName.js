const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    if(!args.join(' ')){
        message.reply('specify a name to set.')
    }
    if(message.author.id === '584049285163646987'){
        bot.user.setUsername(args.join(' '));
        message.channel.send(`successfully changed name to ${args.join(' `')}`)
    }
    else{
        message.reply('bot owner only :no_entry_sign:')
    }
}

  module.exports.help = {
    name: "changename"
  }