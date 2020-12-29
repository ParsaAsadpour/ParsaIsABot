const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
    try{
    var embed = new Discord.MessageEmbed()
    .setTitle('Invite Ririchiyo to your server!')
    .setTimestamp()
    .setAuthor(`Author: ${message.author.tag}`,message.author.displayAvatarURL())
    .setDescription(`[Use this link to invite me to your server!](https://discord.com/oauth2/authorize?client_id=714149186987229184&scope=bot&permissions=939846662)`)
    .setThumbnail(bot.user.displayAvatarURL())
    .setColor(0xe1e1e1)
    message.channel.send(embed);
    }catch{
        message.reply(`there was an error executing the command.`)
    }
}
module.exports.help = {
    name:'invite'
}