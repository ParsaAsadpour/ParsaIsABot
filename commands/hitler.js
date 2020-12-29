const Discord = require("discord.js");  //Discord Client
const canva = require('canvacord');


module.exports.run = async (bot,message,args) => {
	try{
		let image = await canva.Canvas.changemymind(args.join(' '));
		message.channel.send(new Discord.MessageAttachment(image, "changemymind.png"))
	}
	catch{
		message.reply(`Please provide me a text`, (err) => {
			if(err) console.log(err)
		}) 
	}

}
module.exports.help = {
	name:"changemind"
}