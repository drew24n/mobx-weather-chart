export const getChartData = (state) =>
  state?.weather?.weather?.list?.map((el) => ({
    date: el.dt_txt,
    temp: el.main.temp,
  })) || [];

export const getError = (state) => state?.weather.error || '';

export const getCityName = (state) => state?.weather?.weather?.city?.name || '';
