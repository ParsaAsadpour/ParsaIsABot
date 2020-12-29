const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
const deleteus = message.member.hasPermission("MANAGE_MESSAGES");
if (!deleteus){
  message.channel.send(new Discord.MessageEmbed().setTitle('You don\'t have permissions to delete messages').setColor(0xff0000))
}

message.delete().catch(O_o=>{}); 
if (deleteus){
const deleteCount = parseInt(args[0], 10);
if(!deleteCount || deleteCount < 2 || deleteCount > 100)
  return message.reply(new Discord.MessageEmbed().setTitle('Please pick a number between 2 and 100 to delete messagess').setColor(0xfc0303))

const fetched = await message.channel.messages.fetch({limit: deleteCount});
message.channel.bulkDelete(args.join(' '))
  .catch(error => message.reply(new Discord.MessageEmbed().setTitle(`Couldn't delete messages because of: ${error}`).setColor(0xfc0303)));
}
}
module.exports.help = {
    name:'purge'
}