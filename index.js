// import { Bot } from "node-telegram-bot-api";

// const bot = new Bot(token);

// bot.on("message", (msg) => {
//   console.log(msg.text);
//   const chatId = msg.chat.id;
// });

import { Bot } from "node-telegram-bot-api";
import { run } from "node-telegram-bot-api/node";

const token = "8718534112:AAEyZJV3G1_nuRjCBH5rXapgGXhBHeoyIdM";

const bot = new Bot(token);

const obj = {};

const gameOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: 1,
        },
        {
          text: "2",
          callback_data: 2,
        },
        {
          text: "3",
          callback_data: 3,
        },
      ],
      [
        {
          text: "4",
          callback_data: 4,
        },
        {
          text: "5",
          callback_data: 5,
        },
        {
          text: "6",
          callback_data: 6,
        },
      ],
      [
        {
          text: "7",
          callback_data: 7,
        },
        {
          text: "8",
          callback_data: 8,
        },
        {
          text: "9",
          callback_data: 9,
        },
      ],
      [
        {
          text: "0",
          callback_data: 0,
        },
      ],
    ],
  },
};

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
