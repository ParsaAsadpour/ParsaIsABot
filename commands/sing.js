const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
    try{
    var sings = ['https://media.tenor.com/images/99f96ee7c0e789c420c958af86716b91/tenor.gif','https://media.tenor.com/images/6c6b2fe4151d2f761b6c27bd7f7db7ac/tenor.gif','https://media.tenor.com/images/6c6b2fe4151d2f761b6c27bd7f7db7ac/tenor.gif'];
    var sing = Math.floor(Math.random() * sings.length);    

    var saycry;
    
    saycry = `${message.author} is singing!!`;
    
    message.channel.send(new Discord.MessageEmbed()
    .setDescription(saycry)
    .setImage(sings[sing])
    .setColor(0xe1e1e1));
    }catch{
        message.reply(`there was an error executing the command.`)
    }
}
module.exports.help = {
    name:'sing'
}