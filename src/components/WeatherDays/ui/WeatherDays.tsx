const WeatherDays = () => {
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = 'Sunday';
      break;
    case 6:
      day = 'Saturday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 1:
      day = 'Monday';
      break;
    default:
      day = "Can't get value";
  }
  return;
};

export default WeatherDays;
