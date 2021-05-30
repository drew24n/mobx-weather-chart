import { SET_ERROR, SET_IS_LOADING, SET_WEATHER_DATA } from './weather.constants';
import { getWeatherFromApi } from '../../api/getWeatherFromApi';

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  isLoading,
});

export const setWeatherData = (weather) => ({
  type: SET_WEATHER_DATA,
  weather,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

export function getWeatherData({ city }) {
  return async (dispatch) => {
    try {
      dispatch(setError(''));
      dispatch(setIsLoading(true));

      const { status, data } = await getWeatherFromApi({ city });
      if (status === 200 && Object.keys(data).length > 1) {
        dispatch(setWeatherData(data));
      }
    } catch (err) {
      dispatch(setError(err.response?.data?.message || err.message));
      dispatch(setWeatherData({}));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
}
