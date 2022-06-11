const { Bot } = require("grammy");

// Create a bot object
const bot = new Bot("5560669008:AAEndE6tCR7bWyy-dpopDeUwfre1RrTcW1A"); // <-- place your bot token in this string

// Register listeners to handle messages
bot.on("message:text", (ctx) => ctx.reply(ctx.message.text));

// Start the bot (using long polling)
bot.start();