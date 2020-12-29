const Discord = require("discord.js");  //Discord Client

module.exports.run = async (bot,message,args) => {
    let totalSeconds = (bot.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);


message.channel.send(new Discord.MessageEmbed()
.setTitle('Uptime')
.setDescription(`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`))
}
module.exports.help = {
    name:"uptime"
}