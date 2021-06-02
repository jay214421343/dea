const Discord = require ("discord.js")

exports.run = async (client, message) => {
  const embed = new Discord.RichEmbed()
	.setColor("#363940")       
	.setThumbnail('https://cdn.discordapp.com/attachments/846293404043575337/849766932201603102/QScriptsHot.png')
	.setTitle('__Help__');
	//.setFooter('**✩** Remember that you are using the free generator, this accounts may not work !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
