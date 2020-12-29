const Discord = require('discord.js');
const author = require('discord.js')

module.exports.run = async(bot,message,args) =>{
    let com = args.join(' ').toLowerCase();
    let emb = new Discord.MessageEmbed()
    .setTitle('Command List')
    .setThumbnail(bot.user.displayAvatarURL())
    .setTimestamp()
    .setDescription("[Use this link to invite me to your server!](https://discord.com/oauth2/authorize?client_id=714149186987229184&scope=bot&permissions=939846662)")
    .addField(':camera_with_flash: Image','`$help image`', true)
    .addField(':tools: Moderation','`$help moderation`', true)
    .addField(':wrench: Utility','`$help utility`', true)
    .addField(':joy: Fun','`$help fun`', true)
    .addField(':hugging: Anime stuff','`$help anime`', true)
    .addField(':money_with_wings: Economy','`$help economy`', true)
    .addField(`:dog: Animals`, '`$help animals`', true)
    .addField(`:performing_arts: Social`,'`$help social`', true)
    .setFooter(`Made by Parsa#0760`)
    .setColor(0xe1e1e1)

    if(!com) message.channel.send(emb)

    if(com === 'image'){
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`:camera_with_flash: Image Commands`)
        .setDescription('`trigger`, `youtube`, `pornhub`, `putin`, `tatoo`, `discord`, `lisa`, `bobross`, `beautiful`, `facepalm`, `invert`, `affect`, `gay`, `changemind`, `delete`, `jail`, `rip`, `shit`, `trash`, `wanted`, `kill`')
        .setColor(0xe1e1e1)
        )
    }
    if(com === 'moderation'){
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`:tools: Moderation Commands`)
        .setDescription('`purge`, `ban`, `kick`')
        .setTimestamp()
        .setColor(0xe1e1e1)
        )
    }
    if(com === 'utility'){
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`:tools: Utility Commands`)
        .setDescription('`ping`, `say`, `servericon`, `serverinfo`, `prefix`, `dm`, `botinfo`')
        .setTimestamp()
        .setColor(0xe1e1e1)
        )
    }
    if(com === 'fun'){
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`:joy: Fun Commands`)
        .setDescription('`penis`, `fban`, `poll` `howsimp`, `howgay`, `howretarded`, `howthicc`, `howstupid`, `deathclock`, `covidtest`, `reverse`, `coinflip`, `snipe`, `8ball`, `meme`')
        .setTimestamp()
        .setColor(0xe1e1e1)
        )
    }
if(com === 'anime'){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`:hugging: Anime Stuff Commands`)
    .setDescription('`cry`, `slap`, `shrug`, `kiss`, `hug`, `sing`, `dance`')
    .setTimestamp()
    .setColor(0xe1e1e1)
    )
}
if(com === 'economy'){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`:money_with_wings: Economy Commands`)
    .setDescription('`bal`, `dep`, `with`, `work`, `beg`, `give`, `bet`, `daily`, `Search`, `shop`, `buy`, `collection`')
    .setTimestamp()
    .setColor(0xe1e1e1)
    )
}
if(com === 'animals'){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`:dog: Animal Commands`)
    .setDescription('`puppy`, `kitten`')
    .setTimestamp()
    .setColor(0xe1e1e1)
    )
}
if(com === 'social'){
    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`:performance_art: Social Commands`)
    .setDescription(' `avatar`, `userinfo`, `ship`')
    .setTimestamp()
    .setColor(0xe1e1e1)
    )
}


}
module.exports.help = {
    name:'help'
}