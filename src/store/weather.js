import { makeAutoObservable } from 'mobx';
import { getWeatherFromApi } from '../api/getWeatherFromApi';

class Weather {
  isLoading = false;

  error = '';

  weather = {};

  constructor() {
    makeAutoObservable(this);
  }

  setError(error) {
    this.error = error;
  }

  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  }

  setWeather(weather) {
    this.weather = weather;
  }

  async getWeatherData(city) {
    this.setError('');
    this.setIsLoading(true);
    try {
      const { status, data } = await getWeatherFromApi(city);
      if (status === 200 && Object.keys(data).length > 1) {
        this.setWeather(data);
      }
    } catch (err) {
      const error = err.response?.data?.message || err.message;
      this.setError(error);
      this.setWeather({});
    } finally {
      this.setIsLoading(false);
    }
  }

  get chartData() {
    return (
      this.weather?.list?.map((el) => ({
        date: el.dt_txt,
        temp: el.main.temp,
      })) || []
    );
  }

  get cityName() {
    return this.weather?.city?.name || '';
  }
}

export default new Weather();
