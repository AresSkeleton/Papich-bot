


const Discord = module.require("discord.js");
const fs = require("fs");
const ytdl = require('ytdl-core');



module.exports.run = async (bot, msg, args) => {
    //let url = 'https://www.youtube.com/watch?v=Abr8aQ22ls8';
    //const dispatcher = playStream(ytdl(url));
    //dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    var voiceChannel = msg.member.voiceChannel;
    voiceChannel.leave();

};

module.exports.help = {
    name: "stop"
};
