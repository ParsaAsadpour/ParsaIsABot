const Discord = require("discord.js");
const bot = new Discord.Client();
const moment = require('moment');
const {token} = require('./config.json')
const fs = require("fs");
const db = require("quick.db")

const editedMessage = new Discord.Collection()

  
bot.on("messageUpdate", message => {
  editedMessage.set(message.channel.id, message)
})  


bot.commands = new Discord.Collection();
bot.snipes = new Map();
fs.readdir("./commands", (err, files) => {

  if(err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if(jsfiles.length <= 0) return console.error("there is no commands to load...");

    console.log(`Loading ${jsfiles.length} commands...`);
    jsfiles.forEach((f, i) => {
      let props= require(`./commands/${f}`);
      console.log(`${i + 1}: ${f} commands loaded!`);
      bot.commands.set(props.help.name, props);
    });
})

bot.on("ready", () => {
  console.log(`Bot has started, with ${bot.users.cache.size} users, in ${bot.channels.cache.size} channels of ${bot.guilds.cache.size} guilds.`);


  
  bot.user.setStatus('idle')
});

bot.on('ready', () => {
bot.user.setActivity(`to $help`,{type:'LISTENING'});
})

bot.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

bot.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});



bot.on("message", async message => {
  if(message.author.bot) return;
  
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;

  let prefix = db.get(`prefix_${message.guild.id}`);
  if(prefix === null) prefix = "$";

  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  let cmd = bot.commands.get(command.slice(prefix.length));
  if(!message.content.startsWith(prefix)) return;

  if(cmd){
    cmd.run(bot,message,args);
  }


  
  if(command === `${prefix}say`) {
    const ath = message.member.hasPermission('MANAGE_MESSAGES');

    if(!ath){
      message.channel.send(new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTitle('Only people with MANAGE MESSAGES Permission can use this command'))
    }
    if(ath){
    const sayemb = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setTimestamp()
    .setDescription(sayemb)
    .setColor(0xe1e1e1)
    );
  }
  }


  if(command === `${prefix}editsnipe`){
    const msg = editedMessage.get(message.channel.id)
if(!msg) return message.reply('there is nothing to snipe')

const embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL())
.setTitle(`Edit Sniped!`)
.setColor(0xe1e1e1)
.addField(`Member`, message.author.tag)
.addField('Message Content',msg.content)
.setFooter(`Sniped By ${message.author.tag} | Edited by ${msg.author.tag}`, message.author.displayAvatarURL());

message.channel.send(embed)
  }


  if(command === `${prefix}botinfo`){
    fs.readdir("./commands", (err, files) => {

      if(err) console.error(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    
    const servers = bot.guilds.cache.size;
    const memebrs = bot.users.cache.size;
    const channels = bot.channels.cache.size;
    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) {
        prefix = '$'
        return;
    }
  
    let emb = new Discord.MessageEmbed()
    .setTitle('Bot informations')
    .setThumbnail(bot.user.displayAvatarURL())
    .addField(`Commands`, jsfiles.length + 3, true)
    .addField(`Servers`,servers, true)
    .addField(`Users`,memebrs, true)
    .addField(`Channels`, channels, true)
    .addField(`Prefix`,prefix, true)
    .addField(`Bot Uptime`, `${days} days, ${hours}:${minutes}:${seconds}`, true)
    .addField(`Bot Ping`,`${Math.round(bot.ws.ping)}ms`, true)
    .setColor(0xe1e1e1)
    .setFooter(`Bot Owner: Parsa#0760`, bot.user.displayAvatarURL());
  
    message.channel.send(emb)
    })
  }
  

  bot.on("messageDelete", async(message,channel) => {
    if(message.author.bot) return;
    if(!message.guild) return;
  bot.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
  })
});
});



bot.login(token);