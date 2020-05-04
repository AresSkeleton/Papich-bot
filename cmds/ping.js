const Discord = module.require("discord.js");
const fs = require("fs");


module.exports.run = async (bot, msg, args) => {
    //var message = decodeURI("’уенг!");
    msg.channel.send("\u041f\u043e\u0448\u0435\u043b \u043d\u0430\u0445\u0443\u0439");
};

module.exports.help = {
    name: "ping"
};
