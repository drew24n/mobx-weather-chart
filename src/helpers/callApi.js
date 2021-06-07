import { setup } from 'axios-cache-adapter';

export const callApi = setup({
  baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
  params: {
    appid: process.env.REACT_APP_WEATHER_API_KEY,
  },
  cache: { maxAge: 15 * 60 * 1000, exclude: { query: false } },
});
