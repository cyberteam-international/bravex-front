import axios from 'axios';


// export const BASE_BACK_URL = 'http://localhost:1337';
// export const BASE_API_URL = 'http://localhost:1337/api';

export const BASE_BACK_URL = '';
export const BASE_API_URL = 'https://natural-idea-f072dc6abb.strapiapp.com/api';

// Создаем инстанс axios для API
export const getHomePageData = () => axios({
  baseURL: `${BASE_API_URL}/home-page`,
});

export const getPageData = (pageName: string) => axios({
  baseURL: `${BASE_API_URL}/${pageName}`,
});

export const getProjectData = (pageName: string) => axios({
  baseURL: `${BASE_API_URL}/projects?slug${pageName}`,
});

// Telegram Bot API
const TELEGRAM_BOT_TOKEN = '8251163175:AAEayStzbHdIVJjbIhr2wgHfOk4hcIfGKv8';
const TELEGRAM_CHAT_ID = '-4839870080';

export const sendToTelegram = async (data: { name: string; email: string; phone: string }) => {
  const message = `
🔔 Новая заявка с сайта!

👤 Имя: ${data.name}
📧 Email: ${data.email}
📱 Телефон: ${data.phone}
  `.trim();

  return axios({
    method: 'POST',
    url: `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    data: {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML',
    },
  });
};

