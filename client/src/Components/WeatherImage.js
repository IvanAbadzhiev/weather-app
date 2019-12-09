import React from "react";
import Image from "react-bootstrap/Image";

const WeatherImage = ({ weather }) => {
    let weatherIcon;

    switch (weather) {
        case "Clear":
            weatherIcon = "cloudy-day-1";
        break;

        case "Rain":
            weatherIcon = "rainy-7";
        break;

        case "Clouds":
            weatherIcon = "cloudy";
        break;

        case "Snow":
            weatherIcon = "snowy-6";
        break;

        default:
            weatherIcon = "cloudy";
        break;
    }

    return (
        <Image 
            style={{
                width: "100%"
            }}
            src={`https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/${weatherIcon}.svg`} 
            rounded 
        />
    );
}

export default WeatherImage;