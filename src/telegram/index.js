import TelegramBot from "node-telegram-bot-api"


class Telegram {
    token = process.env.TELEGRAM_TOKEN;
    chat_id = process.env.TELEGRAM_CHAT_ID;
    sendMessage = (text) => {
        const bot = new TelegramBot(this.token);
        bot.sendMessage(this.chat_id, text)
    }
}

const telegram = new Telegram()

export default telegram