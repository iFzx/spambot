const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("545961377634844685")
setInterval(function() {
channel.send(`i do spam of shit for credits..`);
}, 30)
})

client.login(process.env.BOT_TOKEN);