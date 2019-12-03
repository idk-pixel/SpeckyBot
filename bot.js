const { Client, Collection } = require("discord.js");
const bot = new Client({autoReconnect:true});
["events","commands","aliases"].forEach(x => bot[x] = new Collection());
["events", "commands", "console"].forEach(x => {console.log(`\n\nLoading ${x.toUpperCase()}!\n`); require(`./handlers/${x}`)(bot)});
const { token, prefix } = require("../config.json"); 		//remove one dot if you h
try{bot.login(token)}catch(e){console.log("Error occourred on logging in");process.exit()} console.log(`Bot prefix: ${prefix}`);