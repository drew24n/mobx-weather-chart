import { SET_ERROR, SET_IS_LOADING, SET_WEATHER_DATA } from './weather.constants';

const initialState = {
  isLoading: false,
  error: '',
  weather: {},
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case SET_WEATHER_DATA:
      return {
        ...state,
        weather: action.weather,
      };

    default:
      return state;
  }
};
