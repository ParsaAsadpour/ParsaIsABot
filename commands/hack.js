const Discord = require("discord.js");	
const { Member } = require("eris");
const ms = require('ms');
const randomString = require('random-string');

module.exports.run = async (bot,message,args) => {
	let member = message.mentions.members.first() || message.author;
	let msg = await message.channel.send(`Hacking ${member}...`);

	var dat = randomString({
		length: 4,
		numeric: true,
		letters: false,
		special: false,
	  });
	
	  var pass = randomString({
		length: 10,
		numeric: true,
		letters: true,
		special: false,
	  });
	
	  var str = randomString({
		  length: 8,
		  numeric: false,
		  letters: true,
		  special: false
	  });
	
	
	let time = '3s';
	
	setTimeout(function(){
		msg.edit(`Finding ${member}'s Email...`)
	}, ms(time));

	let email = str + dat + `@gmail.com`;

	let time2 = '6s';

	setTimeout(function(){
		msg.edit(email)
	}, ms(time2));

	let time3 = '9s';

	setTimeout(function(){
		msg.edit(`Finding Password...`)
	}, ms(time3));

	let embed = new Discord.MessageEmbed()
	.setColor(0xe1e1e1)
	.setDescription(`${member} has been hacked Hacked`)
	.addField(`Email`,email)
	.addField(`Password`,`||${pass}||`)
	.setFooter(`Hacked by: ${message.author.tag}`,message.author.displayAvatarURL());

	let time4 = '12s';
	setTimeout(function(){
		msg.edit(`Done.`)
	}, ms(time4));

	setTimeout(function(){
		msg.edit(embed)
	}, ms(time4));
	
}
module.exports.help = {
	name:"hack"
}