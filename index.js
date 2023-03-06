require('dotenv').config()

console.log(process.env)

const Discord = require('discord.js');

const { Client, GatewayIntentBits, Events } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

client.on("ready", function () {
    console.log("Ready to begin! Serving in " + client.channels.length + " channels");
});

client.on('messageCreate', msg => {

    if (msg.author.id !== client.user.id) {
        if(msg.content.indexOf("Smash") === 0)
        {
        console.log(msg.author.id);
        //msg.channel.send(msg.content.split('').reverse().join(''));
        msg.channel.send("bing chilling!");
    }
    }
});

const { generateDependencyReport } = require('@discordjs/voice');
console.log(generateDependencyReport());

const { DisTube } = require("distube");

client.DisTube = new DisTube(client, {
    leaveOnStop: false,
    emitNewSongOnly: true,
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false,
})

client.on('messageCreate', message => {
    if (message.author.bot || !message.guild) return;
    const prefix = "/"
    const args = message.content.slice(prefix.length).trim().split(/ +/g)

    if (!message.content.startsWith(prefix)) return;

    if (args.shift().toLowerCase() === "play") {
        client.DisTube.play(message.member.voice.channel, args.join(""), {
            member: message.member,
            textChannel: message.channel,
            message
        })
    }
})

client.DisTube.on("playSong", (queue, song) => {
    queue.textChannel.send("Nyt Soi: " + song.name)
})

client.on("disconnected", function () {
    // alert the console
    console.log("Disconnected!");

    // exit node.js with an error
    process.exit(1);
});

client.once('ready', () => {
    console.log('Ready!');
});

client.login(process.env.TOKEN);
