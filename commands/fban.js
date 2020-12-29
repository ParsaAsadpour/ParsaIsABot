    const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
    try{
    if(message.mentions.users.size){
        var member = message.mentions.members.first();
      
      if(member){
          const embfban=new Discord.MessageEmbed()
          .setTitle(':no_entry: User Banned')
          .setColor(0x5CD800)
          .addField('Username',member.user.tag)
          .setTimestamp(Date.now())
          .setFooter(`Moderator: ${message.author.tag}`)
          .addField("User ID",member.user.id);
          message.channel.send(embfban)
      }
      else{
          message.channel.send(new Discord.MessageEmbed().setDescription("Cannot find user with that name.").setColor(0xff1100))
      }
      }else{
          const embifban=new Discord.MessageEmbed().setTitle("Mention a valid user c:").setColor(0xff1100)
          message.channel.send(embifban)
      }          
    }catch{
        message.reply(`there was an error executing the command.`)
    }
}
module.exports.help = {
    name:'fban'
}