import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import WeatherCard from "../src/Components/WeatherCard";

const App = () => {

  const [weather, setWeather] = useState([]);

  
  useEffect(() => {
    // Fetch the data from the weather api
    fetch("http://localhost:8207/weather/sofia")
      .then(results => {
        return results.json();
      })
      .then((data) => {
        // Filter and get the forecast for the 5 days
        const days = data.list.filter(day => {
          return day.dt_txt.endsWith("15:00:00");
        })

        setWeather(days);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  

  return (
    <Container>

      <Row>

        <Col sm={1}></Col>
        
        {weather.map(day => {
          return (
            <Col key={day.dt} sm={2}>
              <WeatherCard {...day} />
            </Col>
          );
        })}

        <Col sm={1}></Col>

      </Row>
      
    </Container>
  );
}

export default App;