const Discord = require('discord.js')
const WOKComamnds = require('wokcommands')
require('dotenv').config()
require('./server')

const client = new Discord.Client({
    partials: ['CHANNEL', 'MESSAGE', 'REACTION']
})

client.on('ready', () => {
    console.log('\n Клиент запущен!\n')

    new WOKComamnds(client, {
        commandsDir: 'commands',
        featuresDir: 'features',
        messagesPath: '',
        showWarns: false,
        del: 3,
        testServers: ['834198040843255850'] // bot owner's test server
    })
    .setDefaultPrefix('hhb!')
    .setColor(0xffddff)
    .setMongoPath(process.env.MONGO_URI)
    .setBotOwner(['298137115877965844', '302151237674205184']) // bot owner's user id
})

client.login(process.env.TOKEN)