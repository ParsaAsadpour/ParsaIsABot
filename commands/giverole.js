const Discord = require("discord.js");

module.exports.run = async(bot,message,args) => {
  // `Member.hasPermissions()` is deprecated
  const roles = message.guild.roles.cache.map((role) => role);

  if (!message.member.permissions.has(["MANAGE_ROLES", "ADMINISTRATOR"]))
    return message.channel.send(
      "Sorry, frog lover! :disappointed: :broken_heart: You don't have permission to perform this command!"
    );


  let rMember =
    message.mentions.members.first() || // `.first()` is a function.
    message.guild.members.cache.find((m) => m.user.tag === args[0]) ||
    message.guild.members;
  let role =
    message.guild.roles.cache.find((r) => r.name == args[1]) ||
    message.guild.roles.cache.find((r) => r.id == args[1]) ||
    message.mentions.roles.first();
  if (!role)
    return message.channel.send(
      "Which role do I give to this user, frog lover? :point_right: :point_left:"
    );

  if (!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"]))
    return message.channel.send(
      "Sorry, friend :broken_heart: :shrug: I don't have permission to perform this command!"
    );

  if (rMember.roles.has(role.id)) {
    return message.channel.send(
      `$rMember.displayName), already has this role!`
    );
  } else {
    await rMember.roles.add(role.id).catch((e) => console.log(e));
    message.channel.send(
      `The role ${role.name} has been added to ${rMember.displayName}.`
    );
  }

  let embed = new Discord.MessageEmbed()
    .setColor(0xe1e1e1)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
    .addField("Moderation:", "Addrole")
    .addField("Mute:", rMember.user.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt); // `.toLocaleString()` isn't required, discord automatically coonverts it to string.

  let sChannel = message.guild.channels.cache.find(
    (c) => c.name === "beans-the-frog"
  );
  sChannel.send(embedVariable);}

module.exports.help = {
    name: 'giverole'
}