import TelegramBot from "node-telegram-bot-api"

const token = process.env.TELEGRAM_TOKEN;

const chat_id = process.env.TELEGRAM_CHAT_ID;

export const sendMessage = (text) => {
    const bot = new TelegramBot(token);
    bot.sendMessage(chat_id,text)
}