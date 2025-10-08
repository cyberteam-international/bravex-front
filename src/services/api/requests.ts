import axios from 'axios';



const BASE_API_URL = 'http://localhost:1337/api';

// Создаем инстанс axios для API
export const getPageData = (pageName: string) => axios({
  baseURL: `${BASE_API_URL}/${pageName}/`,
  params: {
    'populate[Sections][populate]': "*",
  },
});

