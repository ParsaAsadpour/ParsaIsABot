const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
    try{
    if(args == null)
    {
        message.reply('please provide me a text to reverse.')
    }
        let strng = args.join(' ');
        let reverse = strng.split("").reverse().join("");
      
        
        message.channel.send(reverse)
}catch{
    message.reply(`there was an error executing the command.`)
}
}
module.exports.help = {
    name:'reverse'
}