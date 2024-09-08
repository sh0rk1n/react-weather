import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { mainReducer } from 'src/pages/MainPage';

const rootReducer = combineReducers({
  main: mainReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
