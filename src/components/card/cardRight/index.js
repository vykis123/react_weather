import { useRef, useState } from "react";
import SearchBtn from "../../resusables/sreachBtn";
import List from "../../resusables/list";
import Spinner from "../../resusables/spinner";
import "./index.scss";

const CardRight = () => {
  const API_KEY = "c364660d479f89ce3472e450b1a599b1";
  const [weather, setWeather] = useState("");
  const [noCity, setNoCity] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(false);
  const cityName = useRef(null);

  const gettingLocation = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      const data = await response.json();
      setLoading(false);
      setShowList(true);

      if (response.statusText === "Not Found") {
        setNoCity(true);
        setShowList(false);
      } else {
        setWeather(data);
        setNoCity(false);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  const submitingFormForWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowList(false);

    gettingLocation(cityName.current.value);

    e.target.reset();
  };

  return (
    <div className="card__right">
      <h2 className="card__right-heading">Enter Your City Name</h2>
      <form className="card__right-search" onSubmit={submitingFormForWeather}>
        <input
          placeholder="Enter City Name Here"
          required
          ref={cityName}
        ></input>
        <SearchBtn name="Find" />
        {noCity && <span className="error">Enter valid City Name!</span>}
      </form>
      {loading && <Spinner />}
      {!showList && <p>Type in for info</p>}
      {showList && <List weather={weather} />}
    </div>
  );
};

export default CardRight;
