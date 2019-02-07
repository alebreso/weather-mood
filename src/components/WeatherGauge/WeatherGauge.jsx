import React, { Component } from 'react'
import './WeatherGauge.css';
import * as request from 'superagent'
import { APIweather,baseURL,amsterdam, newYork, moscow } from '../../const';

export default class WeatherGauge extends Component {
  state= {
    amsterdam:0,
    newYork:0,
    moscow:0
  }

  fetchData = async () => {
    const amsData = await request.get(`${baseURL}?id=${amsterdam}&APPID=${APIweather}`)
    const nyData = await request.get(`${baseURL}?id=${newYork}&APPID=${APIweather}`)
    const mscData = await request.get(`${baseURL}?id=${moscow}&APPID=${APIweather}`)
    const res = {
      ams:amsData.body.list,
      ny:nyData.body.list,
      msc:mscData.body.list
  }
    if(!res) throw new Error('city not found')
    this.setState({
      amsterdam:this.calculateWeather(res.ams),
      newYork:this.calculateWeather(res.ny),
      moscow:this.calculateWeather(res.msc)
    })

  }
  
  calculateWeather = (city) => {
    let weatherAvg = 0
    city.map(weatherUpdates => {
      const condition = weatherUpdates.weather[0].main
      if(condition==='Thunderstorm') weatherAvg+=0.4
      if(condition==='Drizzle') weatherAvg+=1.8
      if(condition==='Rain') weatherAvg+=1.45
      if(condition==='Snow') weatherAvg+=0.75
      if(condition==='Atmosphere') weatherAvg+=1.1
      if(condition==='Clear') weatherAvg+=2.5
      if(condition==='Clouds') weatherAvg+=2.15
      return weatherAvg
    })
    return (weatherAvg).toFixed(2)
   }

  componentDidMount(){
    this.fetchData();
  }

  render() {
    console.log(this.props.location)
    console.log(this.state)
    let city = this.props.location.pathname
    let style = {}
    if(city==='/amsterdam') {
      style={height:`${this.state.amsterdam}px`}
      city=this.state.amsterdam
    }
    else if (city==='/newYork') {
      style={height:`${this.state.newYork}px`}
      city=this.state.newYork
    }
    else {
      style={height:`${this.state.moscow}px`}
      city=this.state.moscow
    }
    return (
      <div>
        <div className="weather-bar-container">
          <div className={`weather-bar ${this.props.city}`} style={style} ></div>
          <div className="city-height">{city}</div>
        </div>
      </div>
    )
  }
}

