const Discord = require('discord.js');
const author = require('discord.js');

module.exports.run = async(bot,message,args) => {
    try{
    var kisses = ['https://media.tenor.com/images/924c9665eeb727e21a6e6a401e60183b/tenor.gif','https://media1.tenor.com/images/1306732d3351afe642c9a7f6d46f548e/tenor.gif?itemid=6155670','https://media.tenor.com/images/68d59bb29d7d8f7895ce385869989852/tenor.gif','https://media.tenor.com/images/02b3ad0fb1d6aa77daeee0ace21d5774/tenor.gif','https://media.tenor.com/images/a75800a31f350c6a29ef2343931492b2/tenor.gif'];
    var kiss = Math.floor(Math.random() * kisses.length);

    var saykiss;
    if(message.mentions.members.first()){
        saykiss = `${message.author} kissed ${message.mentions.members.first()} OwO`;
    }
    else{
        saykiss = `${message.author} just kissed him self lmao :3`;
    }
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(saykiss)
    .setImage(kisses[kiss])
    .setColor(0xe1e1e1));
}
catch{
    message.reply(`there was an error executing the command.`)
}
}
module.exports.help = {
    name: "kiss"
}