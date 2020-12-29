const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    try{
    const m = await message.channel.send(new Discord.MessageEmbed()
    .setDescription('pinging...')
    .setColor(0xe1e1e1));

    m.edit(new Discord.MessageEmbed().
    setTitle('Pong! :ping_pong:')
    .addField(`Latency is `,`${m.createdTimestamp - message.createdTimestamp}ms.`)
    .addField(`API Latency is `,`${Math.round(bot.ws.ping)}ms`)
    .setColor(0xe1e1e1) );  
    }catch{
        message.reply(`there was an error executing the command.`)
    }
};

module.exports.help = {
    name: "ping"
}