const Discord = require("discord.js");  //Discord Client
const canva = require('canvacord');


module.exports.run = async (bot,message,args) => {
	try{
	let member = message.mentions.users.first()
	let avatar = message.author.displayAvatarURL({dynamic: false, format: "png"});
	
	if(!member){
		let image = await canva.Canvas.wasted(avatar);
		message.channel.send(new Discord.MessageAttachment(image, "wasted.png"))
	}
	if(member){
		let avatarM = member.displayAvatarURL({dynamic: false, format: "png"});
		let image = await canva.Canvas.wasted(avatarM);
		message.channel.send(new Discord.MessageAttachment(image, "wasted.png"))
	}
}catch{
    message.reply(`there was an error executing the command.`)
}
}
module.exports.help = {
    name:"kill"
}