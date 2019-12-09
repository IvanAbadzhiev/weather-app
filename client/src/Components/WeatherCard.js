import React from "react";
import Card from "react-bootstrap/Card";
import WeatherImage from "./WeatherImage";
import { getDayByTimestamp } from "../utils/util";

const WeatherCard = ({ dt, weather, main }) => {
    const { temp_min, temp_max } = main;
    const dayOfTheWeek = getDayByTimestamp(dt);

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