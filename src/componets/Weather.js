import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import Axios from "axios";

const Weather = () => {
    const [ searchvalue , searchItemValue ] = useState('Pune');
    const [ tempInfo, setTempInfo ] = useState({});
    
    const getWeatherInfo = async () => {
        //await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=e43e8df2f9df7954f38eec1a7d297820`)
        await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=b6e3767baff81f86ca667e652b142269`)
          .then((response) => {
              console.log("Get Response", response.data);
              const { temp, humidity, pressure } = response.data.main;
              const { main: weathermood } = response.data.weather[0];
              const { name } = response.data;
              const { speed } = response.data.wind;
              const {  sunset } = response.data.sys; //country,

              const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                // country,
                sunset,
              };

              setTempInfo(myNewWeatherInfo);
        
          }).catch((error) => {
             console.log("Error",error);
          });
    }

    useEffect(() => {
        getWeatherInfo();
    }, []);

    const getWeatherdetails = () => {
        getWeatherInfo();
     }

    return (
        <>
            <div className="wrap">
                <div className="input-group mb-3">
                    <input type="text"  className="form-control" placeholder="Search..." value={searchvalue} onChange={(e) => searchItemValue (e.target.value) } />
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1" onClick={getWeatherdetails}>Search</span>
                    </div>
                </div>
            </div>
            <WeatherCard {...tempInfo}/>
        </>
    );
};

export default Weather;
