const Discord = require('discord.js');

module.exports.run = async(bot,message,args) =>{
    try{
    var pollTopic = args.join(" ");

    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag,message.author.displayAvatarURL())
    .setTitle(`:ballot_box:  ${message.author.username} started a vote! React to my next message to vote on it. :ballot_box: `)
    .addField(`Question:`, pollTopic)
    .setTimestamp()
    .setThumbnail(`https://images-na.ssl-images-amazon.com/images/I/51cOM2ZPaoL.png`)
    .setColor(0xe1e1e1)


    if (!args) return message.reply("You must have something to vote for!")

const poll = await message.channel.send(embed)
await poll.react(`✅`);
await poll.react(`⛔`);

// Create a reaction collector
const filter = (reaction) => reaction.emoji.name === '✅';
const collector = poll.createReactionCollector(filter, { time: 15000 });
collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    }catch{
        message.reply(`there was an error executing the command.`)
    }
}
module.exports.help = {
    name:'poll'
}