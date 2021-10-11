const { Client } =  require('discord.js');
const dotenv = require('dotenv');
dotenv.config();//using dotenv to load environment variables from ./.env
const bot = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });//create new bot instance
bot.login(process.env.DISCORD_BOT_TOKEN);//functionality of discordjs

bot.on('ready',()=>{
    console.log('${bot.user.username} is now online!')
});// logs 'bot is now online' when logged in

bot.on('message',async (message)=>{
    if(message.author.bot)return;

    if(message.content.startsWith('!ping')){
        return message.reply('I am working');
    }
});

