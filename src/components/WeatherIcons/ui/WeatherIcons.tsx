import React, { useEffect, useState } from 'react';

interface WeatherData {
  main: string;
  icon: string;
}

interface WeatherIconsProps {
  weather: WeatherData[];
}

const WeatherIcons: React.FC<WeatherIconsProps> = ({ weather }) => {
  const [imageClass, setImageClass] = useState<string>('');
  const weatherImageClasses = {
    Clouds: {
      n: 'widget__img_cloudy_night',
      d: 'widget__img_cloudy_day',
    },
    Clear: {
      n: 'widget__img_clear_night',
      d: 'widget__img_clear_day',
    },
    Rain: {
      n: 'widget__img_rain_night',
      d: 'widget__img_rain_day',
    },
    Snow: {
      n: 'widget__img_snow_night',
      d: 'widget__img_snow_day',
    },
    Thunderstorm: 'widget__img_thunder',
    Drizzle: 'widget__img_drizzle',
    Fog: 'widget__img_fog',
  };

  useEffect(() => {
    const weatherType = weather[0].main;
    const weatherIcon = weather[0].icon;

    if (weatherType in weatherImageClasses) {
      if (typeof weatherImageClasses[weatherType] === 'string') {
        setImageClass(weatherImageClasses[weatherType]);
      } else {
        const imageClass = weatherIcon.includes('n')
          ? weatherImageClasses[weatherType].n
          : weatherImageClasses[weatherType].d;
        setImageClass(imageClass);
      }
    } else {
      setImageClass('widget__img_clear_day');
    }
  }, [weather]);

  return <div></div>;
};

export default WeatherIcons;
