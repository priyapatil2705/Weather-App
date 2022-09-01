import React, { useEffect, useState } from "react";

const WeatherCard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
//   country,
  sunset,
}) => {
    const [weatherState, setWeatheState] = useState("");

    useEffect(() => {
        if (weathermood) {
        switch (weathermood) {
            case "Clouds":
            setWeatheState("wi-day-cloudy");
            break;
            case "Haze":
            setWeatheState("wi-fog");
            break;
            case "Clear":
            setWeatheState("wi-day-sunny");
            break;
            case "Mist":
            setWeatheState("wi-dust");
            break;

            default:
            setWeatheState("wi-day-sunny");
            break;
        }
        }
    }, [weathermood]);

    const sec = sunset;
    const date = new Date(sec * 1000);
    const timeStr = `${date.getHours()}:${date.getMinutes()}`;
    
    return (
        <>
            <div className="wrap">
                <article className="widget">
                    <div className="weatherIcon">
                        <i className={`wi ${weatherState}`}></i>
                    </div>
                    <div>
                        <h2>Weather in {name}</h2>
                    </div>
                    <div className="weatherInfo">
                        <div className="temperature">
                            <span>{temp}&#8451;</span>
                        </div>
                        <div className="description">
                            <div className="weatherCondition">{weathermood}</div>
                        </div>
                    </div>
                    <div className="date"> {new Date().toLocaleString()} </div>

                    {/* our 4column section  */}
                    <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {timeStr} PM <br />
                            Sunset
                        </p>
                        </div>

                        <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-humidity"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {humidity} <br />
                            Humidity
                        </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-rain"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {pressure} <br />
                            Pressure
                        </p>
                        </div>

                        <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {speed} <br />
                            Speed
                        </p>
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        </>
    );
};

export default WeatherCard;
