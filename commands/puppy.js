const { MessageEmbed } = require ("discord.js");
const randomPuppy = require("random-puppy");

   module.exports.run = async(bot,message,args) => {
       try{
       const subReddits = ["dankmeme", "meme"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

       const img = await randomPuppy();

       const embed = new MessageEmbed()
       .setAuthor(`Author: ${message.author.tag}`,message.author.displayAvatarURL)
       .setColor(0xe1e1e1)
       .setImage(img)
       .setTitle(`From /r/${random}`)
       .setTimestamp()
       .setURL(`https://reddit.com/r/${random}`);

       message.channel.send(embed)
       }catch{
        message.reply(`there was an error executing the command.`)
    }
   }
   module.exports.help = {
    name: "puppy",
    category: "fun",
    description: "Sends an epic meme",
   }