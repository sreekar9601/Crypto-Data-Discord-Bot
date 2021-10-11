const { Client } =  require('discord.js');
const dotenv = require('dotenv');
dotenv.config();//using dotenv to load environment variables from ./.env
const bot = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });//create new bot instance
bot.login(process.env.DISCORD_BOT_TOKEN);//functionality of discordjs

