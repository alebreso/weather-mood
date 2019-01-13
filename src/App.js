import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link} from 'react-router-dom';
import AmsterdamWeather from './components/Amsterdam/AmsterdamWeather'
import NewYorkWeather from './components/NewYork/NewYorkWeather'
import MoscowWeather from './components/Moscow/MoscowWeather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/amsterdam" classname="tab-links" active >Amsterdam</Link>
        <Link to="/newYork" classname="tab-links"  >New York</Link>
        <Link to="/moscow" classname="tab-links"  >Moscow</Link>
  
        <Switch>
          <Route path={`/amsterdam`} component={AmsterdamWeather} />
          <Route path={`/newYork`} component={NewYorkWeather} />
          <Route path={`/moscow`} component={MoscowWeather} />
        </Switch>
      </div>
    );
  }
}

export default App;
