import React, { useContext, useEffect, useState } from 'react';
import { IPInfoContext } from 'ip-info-react';
import axios from 'axios';

const MainPage = () => {
  const userInfo = useContext(IPInfoContext);
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const now = new Date();
  const date = now.toLocaleDateString();
  const city = userInfo.city;
  const [temperature, setTemperature] = useState<number>();
  const [description, setDescription] = useState<string>();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab379417fd48de69e0199e3ce58b1a28`,
        );
        const { main, weather } = response.data;
        setTemperature(main.temp);
        setDescription(weather[0].main);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      <h1>Date: {date}</h1>
      <h1>Time: {time}</h1>
      <h1>City: {city}</h1>
      <h1>Temperature: {Math.round(temperature / 10)}°C</h1>
      <h1>Weather: {description}</h1>
    </div>
  );
};

export default MainPage;
