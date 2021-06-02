const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let ree = new Discord.RichEmbed()
  .setTitle('Invite me')
  .setThumbnail('https://cdn.discordapp.com/attachments/846293404043575337/849766932201603102/QScriptsHot.png')
  .setColor("#363940")
  .setDescription('Press"invite me" so you can invite the bot!') 
  .setURL('https://discord.gg/6tZa9zBApv')
  
  message.channel.send(ree)
  
}
module.exports.help = {
  name: "invite",
}  
  