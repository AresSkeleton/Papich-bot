const Discord = module.require("discord.js");
const fs = require("fs");
const ytdl = require('ytdl-core');



module.exports.run = async (bot, msg, args) => {
    //let url = 'https://www.youtube.com/watch?v=Abr8aQ22ls8';
    //const dispatcher = playStream(ytdl(url));
    //dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    var voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) {

    } else {
    voiceChannel.join().then(connection => {
        //const dispatcher = connection.playFile('./mamich.mp3');
        const url = ytdl('https://www.youtube.com/watch?v=Abr8aQ22ls8');
        const streamoption = {
            volume: 0.3
        }
        const dispatcher = connection.playStream(url, streamoption);



        dispatcher.on("end", end => {
            voiceChannel.leave();
            
        });


    }).catch(err => console.log(err));
    }

};

module.exports.help = {
    name: "hi"
};
