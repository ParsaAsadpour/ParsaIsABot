const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    if (!args[0]) return message.channel.send(`you need to mention someone`)
    if (!args[0]) return message.channel.send(`you need to mention someone else`)

    if(args[0] || args[1]){
        var firstUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        var secondUser = message.mentions.members.first(-1) || message.guild.members.cache.get(args[1])

        if(!firstUser) return message.reply(`Cannot find the first user`)
        if(!secondUser) return message.reply(`Cannot find the second user`)

        if(firstUser || secondUser){
            const firstUserSliced = firstUser.user.username.slice(0, firstUser.user.username.length / 2)
            const secondUserSliced = secondUser.map(user => {
                return user.user.username.slice(user.user.username.length / 2)
            })
            const secondUsername = secondUser.map(user => {
                return user.user.username
            })

            message.channel.send(`${firstUser.user.username} :revolving_hearts: ${secondUsername} = **${firstUserSliced}${secondUserSliced}**`)
        }
    }
}

  module.exports.help = {
    name: "ship"
  }