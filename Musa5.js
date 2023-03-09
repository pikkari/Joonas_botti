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

client.on(Events.MessageCreate, message => {
    if (message.author.bot || !message.guild) return;
    console.log(message.author.id);
    const prefix = "/"
    const args = message.content.slice(prefix.length).trim().split(/ +/g)

    if (message.content.toLowerCase() === prefix + "biisi") {

        /*var item = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].find((_, i, ar) => Math.random() < 1 / (ar.length - i));
        console.log(item);*/

        var item = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].find((_, i, ar) => Math.random() < 1 / (ar.length - i));
        console.log(item);

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
        if (item === '1') {
            connection.subscribe(player)
            player.play(resource1)
        } else if (item === '2') {
            connection.subscribe(player)
            player.play(resource2)
        } else if (item === '3') {
            connection.subscribe(player)
            player.play(resource3)
        } else if (item === '4') {
            connection.subscribe(player)
            player.play(resource4)
        } else if (item === '5') {
            connection.subscribe(player)
            player.play(resource5)
        } else if (item === '6') {
            connection.subscribe(player)
            player.play(resource6)
        }else if (item === '7') {
            connection.subscribe(player)
            player.play(resource7)
        } else if (item === '8') {
            connection.subscribe(player)
            player.play(resource8)
        } else if (item === '9') {
            connection.subscribe(player)
            player.play(resource9)
        } else if (item === '10') {
            connection.subscribe(player)
            player.play(resource10)
        }
    }
    if (message.content.toLowerCase() === prefix + "stop") {
        player.stop();
    }
});

client.login(process.env.TOKEN);