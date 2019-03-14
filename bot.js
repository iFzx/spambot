const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");

/*
client.on("ready", () => {
let channel =     client.channels.get("545961377634844685")
setInterval(function() {
channel.send(`i do spam of shit for credits..`);
}, 30)
})
*/

 client.on('message', message => {
  if(!message.channel.guild) return;
var args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('*bcall')){
if (message.author.id !== '542787046142640138') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
if(!message.author.id === '542787046142640138') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login(process.env.BOT_TOKEN);
