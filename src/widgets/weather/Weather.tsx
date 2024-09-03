import React from 'react';
import { useAppSelector } from '../../shared/lib/hooks/useAppSelector/useAppSelector';

const Weather = ({ isOpen, city, date }) => {
  const { temp, descr, tempFeels, visibility, windSpeed, humidity } =
    useAppSelector((state) => state.main);

  const weatherStats = [
    { title: 'Видимость', specific: `${visibility} км` },
    { title: 'Ощущается', specific: `${tempFeels / 10}°` },
    { title: 'Влажность', specific: `${humidity} %` },
    { title: 'Ветер', specific: `${windSpeed} м/с` },
  ];

  return (
    <main className="container main">
      <div className="widget">
        {!isOpen ? (
          <div className="widget__img widget__img_rain_day widget__img_loader"></div>
        ) : (
          ''
        )}
        <div
          className={
            isOpen ? 'widget__heading' : 'widget__heading widget__heading_over'
          }
        >
          <div className={`widget__img ` + 'widget__img_cloudy_day'}></div>
          <div className="widget__info">
            <h1 className="widget__city">{city}</h1>
            <p className="widget__date">{date}</p>
          </div>
        </div>
        <div className="widget__main">
          <div
            className={
              isOpen ? 'widget__temp' : 'widget__temp widget__temp_over'
            }
          >
            {Math.round(temp / 10)}
          </div>
          <div
            className={
              isOpen ? 'widget__descr' : 'widget__descr widget__descr_over'
            }
          >
            {descr}
          </div>
        </div>
        <ul
          className={
            isOpen ? 'widget__stats' : 'widget__stats widget__stats_over'
          }
        >
          {weatherStats.map((item, index) => (
            <li className="widget__stats-item" key={index}>
              <div className="widget__stats-text">{item.title}</div>
              <div className="widget__stats-range">{item.specific}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Weather;
