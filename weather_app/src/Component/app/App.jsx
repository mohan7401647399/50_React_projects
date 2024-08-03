import React from 'react';
import './app.css';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import rain_icon from '../Assets/rain.png';
import search_icon from '../Assets/search.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';

export default function WeatherApp() {

    let api_key = "5c4641ce3b948b87d23607a339e4ea2a";

    const search = async () => {
        const ele = document.getElementsByClassName("cityInput");
        if (ele[0].value === "") {
            return 0
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ele[0].value}&units=Metric&appid=${api_key}`

        let res = await fetch(url);
        let data = await res.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temp = document.getElementsByClassName("weather-temp");
        const loc = document.getElementsByClassName("weather-loc");

        humidity[0].innerHTML = data.main.humidity + "";
        wind[0].innerHTML = data.wind.speed + "km/h";
        temp[0].innerHTML = data.main.temp + "°C";
        loc[0].innerHTML = data.name;

    }

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className='cityInput' placeholder='Search' />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">24°C</div>
            <div className="weather-loc">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className='icon' />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Wind Speech</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
