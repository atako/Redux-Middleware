import { combineReducers } from 'redux';
import WeatherReducers from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducers
});

export default rootReducer;
