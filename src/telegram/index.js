import TelegramBot from "node-telegram-bot-api"

const token = process.env.TELEGRAM_TOKEN;

const chat_id = process.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(token);


export const sendMessage = (text) => {
    bot.sendMessage(chat_id,text)
}