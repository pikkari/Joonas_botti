require('dotenv').config()

const {track, estimateDuration, Player, Playlist, Queue} = require('discord-player');

console.log(process.env)

const Discord = require('discord.js');

//const {AudioPlayerPausedState, createAudioPlayer, createAudioResource} = require('@discordjs/voice');

const { Client, GatewayIntentBits, Events, NumberUtil } = require('discord.js');
const {parseNumber} = require("distube");
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

const {
    joinVoiceChannel,
    createAudioResource
} = require('@discordjs/voice');


const musa = createAudioResource('Musat/musa3.mp3');
public String getFormattedDuration() {
    return NumberUtil.formatTime(getAudioTrack().getDuration());
}
const aika = musa.getFormattedenDuration







/*client.on(Events.MessageCreate, message => {
    if (message.author.bot || !message.guild) return;
    console.log(message.author.id);
    const prefix = "/"
    const args = message.content.slice(prefix.length).trim().split(/ +/g)

    if (message.content.toLowerCase() === prefix + "biisi") {
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
        connection.subscribe(player)
        player.play(resource)
    }
});*/

console.log(kesto)

client.on('messageCreate', msg => {

    if (msg.author.id !== client.user.id) {
        if(msg.content.indexOf("kesto") === 0)
        {
            console.log(msg.author.id);
            //msg.channel.send(msg.content.split('').reverse().join(''));
            msg.channel.send(kesto + " Sekunttia");
        }
    }
});

client.login(process.env.TOKEN);