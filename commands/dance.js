const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
    try{
    var dances = ["https://i.imgur.com/GKHY47d.gif","https://i.imgur.com/5ULGhAn.gif","https://i.imgur.com/YbdJb5Z.gif","https://i.imgur.com/VV8f9TC.gif","https://i.imgur.com/P3pdnij.gif"];
    var dance = Math.floor(Math.random() * dances.length);
    
    var saycry;
    
    saycry = `${message.author} is just dancing OwO :)`;
    
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(saycry)
    .setImage(dances[dance])
    .setColor(0xe1e1e1));
    }catch{
        message.reply(`there was an error executing the command.`)
    }
}
module.exports.help = {
    name:'dance'
}