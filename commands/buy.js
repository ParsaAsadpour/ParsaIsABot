const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
    let purchase = args.join(' ').toLowerCase();
    let money = db.fetch(`money_${message.author.id}`);

    if(!purchase) return message.reply(`specify an item to buy.`)

    let items = await db.fetch(`items_${message.author.id}`, { items: []});
    let amount = await db.fetch(`money_${message.author.id}`)

    if(purchase === 'dildo'){
        if(db.includes(`items_${message.author.id}`, purchase)){
            message.reply(`You already own one.`)
            return;
        }
        if(amount < 100) return message.channel.send(`you don't have enough money to buy this item`);
        db.subtract(`money_${message.author.id}`, 100);
        db.push(`items_${message.author.id}`, "dildo")
        message.channel.send('successfully purchased the item.')
    }

    if(purchase === 'laptop'){
        if(db.includes(`items_${message.author.id}`, purchase)){
            message.reply(`You already own one.`)
            return;
        }
        if(amount < 2000) return message.channel.send(`you don't have enough money to buy this item`);
        db.subtract(`money_${message.author.id}`, 2000);
        db.push(`items_${message.author.id}`, "laptop")
        message.channel.send('successfully purchased the item.')
    }

    if(purchase === 'cellphone'){
        if(db.includes(`items_${message.author.id}`, purchase)){
            message.reply(`You already own one.`)
            return;
        }
        if(amount < 1200) return message.channel.send(`you don't have enough money to buy this item`);
        db.subtract(`money_${message.author.id}`, 1200);
        db.push(`items_${message.author.id}`, "cellphone")
        message.channel.send('successfully purchased the item.')
    }

    if(purchase === 'ring'){
        if(db.includes(`items_${message.author.id}`, purchase)){
            message.reply(`You already own one.`)
            return;
        }
        if(amount < 22000) return message.channel.send(`you don't have enough money to buy this item`);
        db.subtract(`money_${message.author.id}`, 22000);
        db.push(`items_${message.author.id}`, "Golden ring")
        message.channel.send('successfully purchased the item.')
    }

    if(purchase === 'condom'){
        if(db.includes(`items_${message.author.id}`, purchase)){
            message.reply(`You already own one.`)
            return;
        }
        if(amount < 1000) return message.channel.send(`you don't have enough money to buy this item`);
        db.subtract(`money_${message.author.id}`, 1000);
        db.push(`items_${message.author.id}`, "HiT's used condom")
        message.channel.send('successfully purchased the item.')
    }

    if(purchase === 'medal'){
        if(db.includes(`items_${message.author.id}`, purchase)){
            message.reply(`You already own one.`)
            return;
        }
        if(amount < 6000) return message.channel.send(`you don't have enough money to buy this item`);
        db.subtract(`money_${message.author.id}`, 6000);
        db.push(`items_${message.author.id}`, "Clown Medal")
        message.channel.send('successfully purchased the item.')
    }

    if(purchase === 'trophy'){
        if(db.includes(`items_${message.author.id}`, purchase)){
            message.reply(`You already own one.`)
            return;
        }
        if(amount < 10000) return message.channel.send(`you don't have enough money to buy this item`);
        db.subtract(`money_${message.author.id}`, 10000);
        db.push(`items_${message.author.id}`, "Clown Trophy")
        message.channel.send('successfully purchased the item.')
    }

    if(purchase === 'rifle'){
        if(db.includes(`items_${message.author.id}`, purchase)){
            message.reply(`You already own one.`)
            return;
        }
        if(amount < 5000) return message.channel.send(`you don't have enough money to buy this item`);
        db.subtract(`money_${message.author.id}`, 5000);
        db.push(`items_${message.author.id}`, "Hunting Rifle")
        message.channel.send('successfully purchased the item.')
    }

    if(purchase === 'bike'){
        if(db.includes(`items_${message.author.id}`, purchase)){
            message.reply(`You already own one.`)
            return;
        }
        if(amount < 8000) return message.channel.send(`you don't have enough money to buy this item`);
        db.subtract(`money_${message.author.id}`, 8999);
        db.push(`items_${message.author.id}`, "Bike")
        message.channel.send('successfully purchased the item.')
    }

    if(purchase === 'car'){
        if(db.includes(`items_${message.author.id}`, purchase)){
            message.reply(`You already own one.`)
            return;
        }
        if(amount < 18000) return message.channel.send(`you don't have enough money to buy this item`);
        db.subtract(`money_${message.author.id}`, 18000);
        db.push(`items_${message.author.id}`, "Car")
        message.channel.send('successfully purchased the item.')
    }
}

  module.exports.help = {
    name: "buy"
  }