import axios from 'axios';


// export const BASE_BACK_URL = 'http://localhost:1337';
// export const BASE_API_URL = 'http://localhost:1337/api';

export const BASE_BACK_URL = '';
export const BASE_API_URL = 'https://ambitious-friend-4af7a2d2d8.strapiapp.com/api';

// Создаем инстанс axios для API
export const getHomePageData = (pageName: string) => axios({
  baseURL: `${BASE_API_URL}/${pageName}/full`,
});

export const getPageData = (pageName: string) => axios({
  baseURL: `${BASE_API_URL}/${pageName}`,
});

