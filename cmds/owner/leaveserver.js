module.exports.run = async (bot, msg, args, owner, prefix) => {
    if(!(msg.author.id === owner)){
        msg.channel.send("You aren't my owner.");
        return;
    }
    if(!args[0]) return msg.channel.send("You have to define a server");
    guild = fetchGuild(args[0]);
    guild.leave();

}

module.exports.config = {
    name: "leaveserver",
	description: "The bot will leave the servers where there isn't the owner!",
    usage: ``,
    category: `owner`,
	accessableby: "Bot Owner",
    aliases: ["ls","sl","serverleave"]
}