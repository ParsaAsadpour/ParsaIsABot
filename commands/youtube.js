const Discord = require('discord.js');
const canva = require('canvacord');

module.exports.run = async (bot, message, args) => {
        let member = message.mentions.users.first()
        let avatar = message.author.displayAvatarURL({dynamic: false, format: "png"});
        
        // if(args.length = 0) return message.channel.send('provide me a text')

        if(!member){
            let image = await canva.Canvas.youtube({
                avatar: avatar,
                username: message.author.username,
                content: args.join(' '),
                dark: false
            });
            message.channel.send(new Discord.MessageAttachment(image, "youtube.png"))
        }
        if(member){
            let avatarM = member.displayAvatarURL({dynamic: false, format: "png"});
            let image = await canva.Canvas.youtube({
                avatar: avatarM,
                username: member.username,
                content: args.slice(1).join(' '),
                dark: false
            });
            message.channel.send(new Discord.MessageAttachment(image, "youtube.png"))
        }   
        }
module.exports.help = {
    name:"youtube"
}