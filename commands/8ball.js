const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
    try{
    var balls = ['No','Yes','Absolutely','I dunno','Nope','i don\'t wanna answer that question :p','Better not tell you now.','Theories prove it.','I\'m so lazy to reply it'];
    var answ = Math.floor(Math.random() * balls.length);

    const ball = args.join(" ");
    message.channel.send(new Discord.MessageEmbed()
    .setAuthor(`Author: ${message.author.tag}`)
    .setThumbnail('https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict000307426521.jpg')
    .setTitle('8Ball')
    .addField('Question',ball)
    .addField('8ball',balls[answ])
    .setTimestamp()
    .setColor(0xe1e1e1));
    }catch{
        message.reply(`there was an error executing the command.`)
    }
}
module.exports.help = {
    name:'8ball'
}