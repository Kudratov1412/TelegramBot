const TelegramBot = require("node-telegram-bot-api");

const token = "8718534112:AAEyZJV3G1_nuRjCBH5rXapgGXhBHeoyIdM";

const bot = new TelegramBot(token, { pollong: true });

bot.on("message", (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "aaaaaaaaaaaaaa");
});
