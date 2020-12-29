const Discord = require('discord.js');
const author = require('discord.js');

module.exports.run = async(bot,message,args) => {
    try{
    var slaps = ['https://i.imgur.com/fm49srQ.gif','https://i.imgur.com/fm49srQ.gif','https://i.imgur.com/fm49srQ.gif','https://i.imgur.com/Agwwaj6.gif','https://i.imgur.com/YA7g7h7.gif','https://i.imgur.com/oRsaSyU.gif'];
    var slap = Math.floor(Math.random() * slaps.length);

    var saykiss;
    let member = message.mentions.members.first();
    
    let me = message.mentions.author;
    if(!member || me){
        message.reply('noooo. don\'t slap your self >:(');
    }
    if(member){
        saykiss = `${message.author} slapped ${member}! Oof.`;
        message.channel.send(new Discord.MessageEmbed()
    .setDescription(saykiss)
    .setImage(slaps[slap])
    .setColor(0xe1e1e1));
    }
}catch{
    message.reply(`there was an error executing the command.`)
}
}
module.exports.help = {
    name: "slap"
}