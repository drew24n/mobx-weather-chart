import axios from 'axios';

export const callApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/forecast',
  params: {
    appid: process.env.REACT_APP_WEATHER_API_KEY,
  },
});
