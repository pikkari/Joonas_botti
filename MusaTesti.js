require("dotenv").config();

const {Client, Events, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require('@discordjs/voice');

const client = new Client({ intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
    ]
});

const player = createAudioPlayer()
const resource1 = createAudioResource('Musat/musa1.mp3')
const resource2 = createAudioResource('Musat/musa2.mp3')
const resource3 = createAudioResource('Musat/musa3.mp3')
const resource4 = createAudioResource('Musat/musa4.mp3')
const resource5 = createAudioResource('Musat/musa5.mp3')
const resource6 = createAudioResource('Musat/musa6.mp3')
const resource7 = createAudioResource('Musat/musa7.mp3')
const resource8 = createAudioResource('Musat/musa8.mp3')
const resource9 = createAudioResource('Musat/musa9.mp3')
const resource10 = createAudioResource('Musat/musa10.mp3')

/*//console.log(biisit);

var lista = ['Aku', 'Mikki', 'Hessu', 'Iines', 'Tupu', 'Hupu', 'Lupu'];
var max = biisit.length;
var biisi = Math.floor(Math.random() * max);
console.log(biisit[biisi]);

/*var items = biisit[Math.floor(Math.random()*biisit.length)];*/

client.on(Events.MessageCreate, message => {
    if (message.author.bot || !message.guild) return;
    console.log(message.author.id);
    const prefix = "/"
    const args = message.content.slice(prefix.length).trim().split(/ +/g)

    if (message.content.toLowerCase() === prefix + "biisi") {

        //while (true) {}

        //Eemil
        const biisit = [
            'Musat/musa1.mp3',
            'Musat/musa2.mp3',
            'Musat/musa3.mp3',
            'Musat/musa4.mp3',
            'Musat/musa5.mp3',
            'Musat/musa6.mp3',
            'Musat/musa7.mp3',
            'Musat/musa8.mp3',
            'Musat/musa9.mp3',
            'Musat/musa10.mp3'
        ];

        var max = biisit.length;
        var biisi = Math.floor(Math.random() * max);
        console.log(biisit[biisi]);

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guildId,
            adapterCreator: message.guild.voiceAdapterCreator
        })
        connection.on('stateChange', (oldState, newState) => {
            const oldNetworking = Reflect.get(oldState, 'networking');
            const newNetworking = Reflect.get(newState, 'networking');

            const networkStateChangeHandler = (oldNetworkState, newNetworkState) => {
                const newUdp = Reflect.get(newNetworkState, 'udp');
                clearInterval(newUdp?.keepAliveInterval);
            }
            oldNetworking?.off('stateChange', networkStateChangeHandler);
            newNetworking?.on('stateChange', networkStateChangeHandler);
        });
        //Oma
        const resource = createAudioResource(biisit[biisi])
        connection.subscribe(player)
        player.play(resource)

    }
    if (message.content.toLowerCase() === prefix + "stop") {
        player.stop();
        message.reply("Musiikin pysäytetty.");
    }
    if (message.content.toLowerCase() === prefix + "pause") {
        player.pause();
        message.reply("Musiikin on pausella.");
    }
    if (message.content.toLowerCase() === prefix + "resume") {
        player.unpause();
        message.reply("Musiikin toistoa jatkettu.");
    }
});

client.login(process.env.TOKEN);