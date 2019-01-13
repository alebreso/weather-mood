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
        <Link to="/amsterdam" className="tab-links" active='true' >Amsterdam</Link>
        <Link to="/newYork" className="tab-links"  >New York</Link>
        <Link to="/moscow" className="tab-links"  >Moscow</Link>
  
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
