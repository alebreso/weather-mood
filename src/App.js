import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link} from 'react-router-dom';
import WeatherGauge from './components/WeatherGauge/WeatherGauge'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/amsterdam" className="tab-links">Amsterdam</Link>
        <Link to="/newYork" className="tab-links">New York</Link>
        <Link to="/moscow" className="tab-links">Moscow</Link>
  
        <Switch>
          <Route exact path={'/amsterdam'} component={WeatherGauge}/>
          <Route exact path={'/newYork'} component={WeatherGauge}/>
          <Route exact path={'/moscow'} component={WeatherGauge}/>
        </Switch>
      </div>
    );
  }
}

export default App;
