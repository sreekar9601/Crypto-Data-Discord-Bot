const { Client } =  require('discord.js');
const dotenv = require('dotenv');
const axios = require('axios');
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
    //price commands starts here
    if(message.content.startsWith('!price')){
        const[command, ...args] = message.content.split(' ');
        if(args.length!==2){
            return message.reply('Enter crypto and currency to compare with!');
        }
        else{
            const[coin, vsCurrency] = args;
            try{
                const{data} = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${vsCurrency}`);
                if(!data[coin][vsCurrency])throw Error();
                return message.reply(`The current price of 1 ${coin} = ${data[coin][vsCurrency]} ${vsCurrency}`);

            }
            catch(err){
                return message.reply('Please check input values correctly');
            }
        }
    }
});


