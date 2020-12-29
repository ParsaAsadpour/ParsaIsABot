const Discord = require('discord.js');
const canva = require('canvacord');

module.exports.run = async (bot, message, args) => {
        let member = message.mentions.users.first()
        let avatar = message.author.displayAvatarURL({dynamic: false, format: "png"});
        
        // if(args.length = 0) return message.channel.send('provide me a text')

        if(!member){
            let image = await canva.Canvas.phub({
                image: avatar,
                username: message.author.username,
                message: args[1]
            });
            message.channel.send(new Discord.MessageAttachment(image, "pornhub.png"))
        }
        if(member){
            let avatarM = member.displayAvatarURL({dynamic: false, format: "png"});
            let image = await canva.Canvas.phub({
                image: avatarM,
                username: member.username,
                message: args.slice(1).join(' ')
            });
            message.channel.send(new Discord.MessageAttachment(image, "pornhub.png"))
        }   
        }
module.exports.help = {
    name:"pornhub"
}