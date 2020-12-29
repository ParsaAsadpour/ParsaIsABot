const Discord = require('discord.js');

module.exports.run = async(bot,message,args) =>{
    // try{
    var gays = ['smol pp','big pp','kontol','retard','yessir','boomrt','oldie','clown','dinb','goofy','itty bitty','hottie','sugar lips','twinkle','fatty','gey','nerd','coockie','juicy','veggie','cutie cake','condom','lil simp'];
    var gay = Math.floor(Math.random() * gays.length);

    if(!message.member.hasPermission('CHANGE_NICKNAME')){
        message.channel.send(new Discord.MessageEmbed() .setDescription('You need CHANGE_NICKNAME permission to do this.').setColor('RED'))
    }
    if(!message.guild.me.hasPermission('MANAGE_NICKNAMES')){
        message.channel.send(new Discord.MessageEmbed() .setDescription('Bot needs MANAGE_NICKNAMES permission to do this.').setColor('RED'))
    }

    else{
        message.channel.send(`Successfully changed your nickname to ${gays[gay]}.`)
        message.member.setNickname(gays[gay])
    }
    // }catch{
    //     message.reply('i was unable to change your nickname')
    // }
}
module.exports.help = {
    name:'nameme',
    description: 'Changes user username to a random thing from a specified list'
}