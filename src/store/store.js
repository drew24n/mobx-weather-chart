import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { weatherReducer } from './weather/weather.reducer';

export const rootReducer = combineReducers({
  weather: weatherReducer,
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeWithDevTools() ? composeWithDevTools() : (f) => f),
);
