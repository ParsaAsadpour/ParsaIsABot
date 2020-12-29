const Discord = require('discord.js');

module.exports.run = async(bot,message,args) => {
    try{
    if(message.mentions.users.size){
        let member=message.mentions.users.first()
    if(member){
        const emb=new Discord.MessageEmbed()
        .setAuthor(`Author:`, message.author.displayAvatarURL())
        .setTimestamp()
        .setImage(member.displayAvatarURL({dynamic: true, format: "gif"}),'avtar.gif')
        .setTitle(`${member.username}'s Avatar`)
        .setDescription(`[Avatar URL](${member.displayAvatarURL()})`)
        .setColor(0xe1e1e1)
        
        message.channel.send(emb)
    }
    if(!member){
        const emb=new Discord.MessageEmbed()
        .setAuthor(`Author:`, message.author.displayAvatarURL())
        .setImage(message.author.displayAvatarURL())
        .setColor(0xe1e1e1)
        .setTitle(`${message.author.username}'s Avatar`)
        .setDescription(`[Avatar URL](${message.author.displayAvatarURL()})`)
        .setTimestamp(Date.now())
        message.channel.send(emb)
    }
}else{
        message.channel.send(new Discord.MessageEmbed().setColor(0xe1e1e1).setTitle('cannot find anyone with that username'))
    }
}catch{
    message.reply(`there was an error executing the command.`)
}
}
module.exports.help = {
    name:'avatar'
}