const Discord = require("discord.js");  //Discord Client
const canva = require('canvacord');
const urban = require('urban');

module.exports.run = async (bot,message,args) => {
    if(!args) {
        message.reply('You need to specify something to search')
        return
    }
    let str = args.join(' ')

    urban(str).first(json => {
        if(!json) return message.channel.send('no results found')
        console.log(json);

        const embed = new Discord.MessageEmbed()
        .setColor('e1e1e1')
        .setTitle(json.word)
        .addField(`Definition`,json.definition)
        .addField(`Example`, json.example)
        .addField(`Rating`,`Upvotes: ${json.thumbs_up} | Downvotes: ${json.thumbs_down}`)
        .setFooter(`Written on: ${json.written_on} | Author: ${json.author}`)
        message.channel.send(embed)

    })


    // if(res.tags.length > 0 && res.tags.join(', ').length < 1024){
    //     embed.addField('Tags', res.tags.join(', '),true)
    // }

}
module.exports.help = {
    name:"urban"
}