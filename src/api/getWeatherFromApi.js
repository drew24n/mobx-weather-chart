import { callApi } from '../helpers/callApi';

export const getWeatherFromApi = ({ city }) =>
  callApi.get('', { params: { q: city, units: 'metric' } });
