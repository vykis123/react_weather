import "./index.scss";

const List = ({ weather }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function convertMsToDate(miliseconds) {
    let date = new Date(miliseconds * 1000),
      month = months[date.getMonth()],
      day = date.getDate(),
      year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  let ICON_URL = `http://openweathermap.org/img/wn/${weather.weather[0]["icon"]}.png`;

  return (
    <ul className="info">
      <li className="info-list">{weather.name}</li>
      <li className="info-list">Tempreture: {weather.main.temp}</li>
      <li className="info-list">Feels like: {weather.main.feels_like}</li>
      <li className="info-list flex">
        {weather.weather[0].description}
        <img src={ICON_URL} alt="weather icon" />
      </li>
      <li className="info-list">Wind speed: {weather.wind.speed} m/s</li>
      <li className="info-list">Date: {convertMsToDate(weather.dt)}</li>
    </ul>
  );
};

export default List;
