import React from "react";
import Card from "react-bootstrap/Card";
import WeatherImage from "./WeatherImage";

const WeatherCard = ({ dt, weather, main }) => {
    const { temp_min, temp_max } = main;
    const timestamp = new Date();
    timestamp.setTime(dt * 1000); // javascript timestamps are in milliseconds
    timestamp.toUTCString();
    
    // TODO: move it to util function
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfTheWeek = days[timestamp.getDay()];

    return (
        <Card>
            <Card.Header as="h5">Sofia</Card.Header>
            <Card.Body>

                <WeatherImage weather={weather[0].main}/>

                <Card.Title>{dayOfTheWeek}</Card.Title>
                
                <Card.Text>
                    {parseInt(temp_min)}° / {parseInt(temp_max)}°
                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default WeatherCard;