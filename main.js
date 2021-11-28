
require("dotenv").config();
console.log ("env import loaded")
    // sorta like import for python

const { Client, Intents } = require("discord.js");
console.log ("discord.js loaded")
    // allows env files to be read

const apiKey = process.env.discordkey;
console.log ("grabed token from env File")
    // grabs my discord key from my env file

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
    // these are the permisions the bot uses, i still havent figured this out yet




client.on("ready", () => {

    client.user.setActivity("the Timewarp Again", { type: 'WATCHING' }); 
    console.log("status is set")
        // sets the bots status 
    
        
    /* the bot has finaly loaded, inform the owner that it has done so */
    
    const tw_botlog = client.channels.cache.get('914360638975905822'); 
        // this is the id of my bot log channel, in the Timewarp Discord Server
    tw_botlog.send("i have booted up")
        // sends a message to a channel on discord

    console.log(`Logged in as ${client.user.tag}!`);
        //client.user.tag is the name of the bot    

});












//logs the bot online
client.login(process.env.DISCORD_TOKEN); 
/*
DISCORD_TOKEN is grabed from the .env file 
with process.env
*/
