const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('5974706862:AAGl6OivNNN5bDCmG54y4LrlzqTTTfFcPYk', {
  polling: true,
})

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'oh no');
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'I love u');
});
