import { Bot } from "node-telegram-bot-api";
import { run } from "node-telegram-bot-api/node";
import gameOptions from "./option.js";

const token = "8718534112:AAEyZJV3G1_nuRjCBH5rXapgGXhBHeoyIdM";

const bot = new Bot(token);

const obj = {};

const botRender = () => {
  bot.api.setMyCommands({
    commands: [
      {
        command: "start",
        description: "Hello World!",
      },
      {
        command: "info",
        description: "Hello",
      },
      {
        command: "game",
        description: "o`yinni boshlash",
      },
    ],
  });

  bot.on("message", async (ctx) => {
    const chatId = ctx.update.message.chat.id;
    const text = ctx.update.message.text;

    if (text === "/game") {
      await ctx.reply("0 dan 9 gacha");
      const randomNum = Math.floor(Math.random() * 10);
      obj[chatId] = randomNum;
      ctx.reply("Top", gameOptions);
    }
  });

  bot.on("callback_query", async (ctx) => {
    const data = ctx.update.callback_query.data;
    const chatId = ctx.update.callback_query.message.chat.id;

    if (data.length === 1) {
      if (data != obj[chatId]) {
        let word = "";
        if (Number(data) < obj[chatId]) word = "katta";
        else word = "kichik";
        await ctx.reply(word, gameOptions);
      } else {
        await ctx.reply(`Siz topdingiz`);
      }
    }
    if (data === "/again") {
      return ctx.reply("Top", gameOptions);
    }
  });
};

botRender();
run(bot);
