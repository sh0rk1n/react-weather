import React, { useContext, useEffect } from 'react';
import { IPInfoContext } from 'ip-info-react';
import axios from 'axios';
import Header from '../../../widgets/header/Header';
import Footer from '../../../widgets/footer/Footer';
import {
  setDescr,
  setHumidity,
  setIsOpen,
  setTemp,
  setTempFeels,
  setVisibility,
  setWindSpeed,
} from '../model/slices/weatherSlice';
import WeatherIcons from '../../../widgets/weather/WeatherIcons';
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector/useAppSelector';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch/useAppDispatch';
import Weather from '../../../widgets/weather/Weather';

const MainPage = () => {
  const userInfo = useContext(IPInfoContext);
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.main);
  const now = new Date();
  const date = now.toLocaleDateString();
  const city = userInfo.city; // из за того что fetchData асинхронна, получаем ошибку в первый раз

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab379417fd48de69e0199e3ce58b1a28`,
        );
        const { main, weather, visibility, wind } = response.data;
        dispatch(setTemp(main.temp));
        dispatch(setDescr(weather[0].description));
        dispatch(setVisibility(visibility / 1000));
        dispatch(setTempFeels(Math.floor(main.feels_like)));
        dispatch(setWindSpeed(wind.speed));
        dispatch(setHumidity(main.humidity));

        <WeatherIcons weather={weather} />;
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    dispatch(setIsOpen(true));
  }, [city]);

  return (
    <div className="page">
      <Header isOpen={isOpen} />
      <Weather isOpen={isOpen} city={city} date={date} />
      <Footer isOpen={isOpen} />
    </div>
  );
};

export default MainPage;
