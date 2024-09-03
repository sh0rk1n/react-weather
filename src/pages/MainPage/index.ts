import { MainPageAsync } from './ui/MainPage.async';

export { MainPageAsync as MainPage };

export type { WeatherSchema } from '../MainPage/model/types/WeatherSchema';
export { default as mainReducer } from './model/slices/weatherSlice';
