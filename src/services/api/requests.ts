import axios from 'axios';


export const BASE_BACK_URL = 'http://localhost:1337';
export const BASE_API_URL = 'http://localhost:1337/api';

// Создаем инстанс axios для API
export const getPageData = (pageName: string) => axios({
  baseURL: `${BASE_API_URL}/${pageName}/full`,
});

