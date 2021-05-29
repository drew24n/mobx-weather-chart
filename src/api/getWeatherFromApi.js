import { callApi } from '../helpers/callApi';

export const getWeatherFromApi = async ({ city }) =>
  callApi.get('', { params: { q: city, units: 'metric' } });
