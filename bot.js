const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require('fs');
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix
const ytdl = require('ytdl-core');

fs.readdir('./cmds/', (err, files) => {
    if (err)
        console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0)
        console.log("No commands!");
    console.log(`${jsfiles.length} commands is loaded!`);
    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}.${f} loaded!`);
        bot.commands.set(props.help.name, props);
        //console.log(props.help.name);
    })
})

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.username}!`);
    bot.generateInvite(["ADMINISTRATOR"]).then(link => {
        //console.log(link);
    })
});

bot.on('message', async msg => {
    if (msg.author.bot)
        return;
    if (msg.channel.type == "dm")
        return;
    let user = msg.author.username;
    let userid = msg.author.id;
    let messageArray = msg.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if (!msg.content.startsWith(prefix))
        return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd)
        cmd.run(bot, msg, args);
})

bot.login(token);