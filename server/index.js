import { Bot } from "node-telegram-bot-api";
import { run } from "node-telegram-bot-api/node";

const token = "7994023028:AAF4yFD9G3HRz_e727nNwI5H-59u4MvZvDc";

const bot = new Bot(token);

const botRender = () => {
  bot.on("message", async (ctx) => {
    const msg = ctx.update.message;
    const chatId = msg.chat.id;
    const text = msg.text;

    console.log(msg);

    msg.reply("Furqat.app platformasidagi kurslarni sotib olishingiz mumkin");
  });
};

botRender();

await run(bot);
