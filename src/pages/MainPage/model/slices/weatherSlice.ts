import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherSchema } from '../types/WeatherSchema';

const initialState: WeatherSchema = {
  isOpen: false,
  temp: 0,
  descr: '',
  visibility: 0,
  tempFeels: 0,
  humidity: 0,
  windSpeed: 0,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setTemp: (state, action: PayloadAction<number>) => {
      state.temp = action.payload;
    },
    setDescr: (state, action: PayloadAction<string>) => {
      state.descr = action.payload;
    },
    setVisibility: (state, action: PayloadAction<number>) => {
      state.visibility = action.payload;
    },
    setTempFeels: (state, action: PayloadAction<number>) => {
      state.tempFeels = action.payload;
    },
    setHumidity: (state, action: PayloadAction<number>) => {
      state.humidity = action.payload;
    },
    setWindSpeed: (state, action: PayloadAction<number>) => {
      state.windSpeed = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const {
  setTemp,
  setTempFeels,
  setIsOpen,
  setHumidity,
  setWindSpeed,
  setVisibility,
  setDescr,
} = weatherSlice.actions;
export default weatherSlice.reducer;
