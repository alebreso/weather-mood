import React, { Component } from 'react'
import './AmsterdamWeather.css';
import * as request from 'superagent'
import { APIweather, amsterdam, moscow, newYork } from '../../const';

export default class AmsterdamWeather extends Component {
  state= {
    height:0
  }

  fetchData = () => {
    request
    .get(`http://api.openweathermap.org/data/2.5/forecast?id=${amsterdam}&APPID=${APIweather}`)
    .then(response => this.calculateWeather(response))
    .catch(console.error)
  }

  calculateWeather = (response) => {
    let weatherAvg = 0
    response.body.list.map(weatherUpdates => {
      const condition = weatherUpdates.weather[0].main
      if(condition==='Thunderstorm') weatherAvg+=0.4
      if(condition==='Drizzle') weatherAvg+=1.8
      if(condition==='Rain') weatherAvg+=1.45
      if(condition==='Snow') weatherAvg+=0.75
      if(condition==='Atmosphere') weatherAvg+=1.1
      if(condition==='Clear') weatherAvg+=2.5
      if(condition==='Clouds') weatherAvg+=2.15
    })
    this.setState({height:(weatherAvg).toFixed(2)})
    return (weatherAvg).toFixed(2)
   }

  componentDidMount(){
    this.fetchData();
  }

  render() {
    return (
      <div>
        <div className="weather-bar-container">
          <div className="amsterdam-weather-bar" style={{height:`${this.state.height}px`}} ></div>
        </div>
      </div>
    )
  }
}

