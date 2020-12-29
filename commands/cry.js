    const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
    try{
    var crys = ["https://media.tenor.com/images/c8f6d1972f6051cf40fec17da7b18a53/tenor.gif","https://media.tenor.com/images/19089cd2b4970740debff2cdfc43329a/tenor.gif","https://media.tenor.com/images/eda88aaad47aaab5d861c19a03d73e27/tenor.gif","https://media.tenor.com/images/eda88aaad47aaab5d861c19a03d73e27/tenor.gif","https://media.tenor.com/images/a901f319531c79f6115e270ef510fdb3/tenor.gif"];
    var cry = Math.floor(Math.random() * crys.length);
    
    var saycry;
    
    saycry = `${message.author} is crying on the corner :(`;
    
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(saycry)
    .setImage(crys[cry])
    .setColor(0xe1e1e1));
    }catch{
        message.reply(`there was an error executing the command.`)
    }
}
module.exports.help = {
    name:'cry'
}