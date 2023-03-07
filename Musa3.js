require("dotenv").config();
//console.log(process.env)
//const { generateDependencyReport } = require('@discordjs/voice');
//console.log(generateDependencyReport());
const {Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent ],
});

const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource
} = require('@discordjs/voice');

client.on(Events.MessageCreate, message => {
    if (message.author.bot || !message.guild) return;
    const prefix = "/"
    const args = message.content.slice(prefix.length).trim().split(/ +/g)

    if (message.content.toLowerCase() === prefix + "biisi") {

        var myfunc = setInterval(function() {

        const connection = joinVoiceChannel({
            channelId: message.member.voice.channelId,
            guildId: message.guildId,
            adapterCreator: message.guild.voiceAdapterCreator
        })


        const player = createAudioPlayer()
        const resource = createAudioResource('Musat/musa6.mp3')

        connection.subscribe(player)

        player.play(resource)
        }, 10000)

    }

});


client.login(process.env.TOKEN);