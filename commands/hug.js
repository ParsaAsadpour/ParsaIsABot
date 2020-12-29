const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
    try{
    var hug = ["https://media.tenor.com/images/9fe95432f2d10d7de2e279d5c10b9b51/tenor.gif","https://media.tenor.com/images/8f44c083c55620c02f59c6bea378dca4/tenor.gif","https://media.tenor.com/images/778282e02d511fbc061e1439a5105c6f/tenor.gif", "https://i.imgur.com/r9aU2xv.gif", "https://media.tenor.com/images/ca88f916b116711c60bb23b8eb608694/tenor.gif"];
    var hugs = Math.floor(Math.random() * hug.length);
    let member = message.mentions.members.first();
    var hugsay;
    if(message.mentions.members.first()){
        hugsay = `${message.author.username} sent a hug to ${member.username} OwO`;
    }
    else{
        hugsay = `${message.author} just hugged him self lmao :3`;
    }
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(hugsay)
    .setImage(hug[hugs])
    .setColor(0xe1e1e1));
}catch{
    message.reply(`there was an error executing the command.`)
}
}
module.exports.help = {
    name:'hug'
}