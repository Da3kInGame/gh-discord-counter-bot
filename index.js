const DiscordJS = require('discord.js')
const client = new DiscordJS.Client()

const config = require('./config.json')
const memberCounter = require('./counters/member-counter.js')

client.on('ready', () => {
    console.log('Member Counter is online !')
    memberCounter(client)
})

client.login(process.env.TOKEN)