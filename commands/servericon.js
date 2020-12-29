const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    try{
message.channel.send(new Discord.MessageEmbed()
.setTitle('Server Icon')
.setImage(message.guild.iconURL())
.addField('Icon URL',message.guild.iconURL())
.setColor(0xe1e1e1)
.setThumbnail(message.author.displayAvatarURL()))
    }catch{
        message.reply(`there was an error executing the command.`)
    }
}
module.exports.help = {
    name: "servericon"
}