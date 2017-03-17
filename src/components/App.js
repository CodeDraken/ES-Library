import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';

import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ships: {}
    };
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/CodeDraken/ES-Scraper/master/json/ships/all_ships.json').then((res) => {
      const ships = res.data;
      this.setState({
        ships: ships
      });
    });
  }

  render() {
    return (
      <div>

        <div className="navbar">
          <nav className="blue lighten-3">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">Endless Sky Library</a>
            </div>
          </nav>
        </div>

        <main className="container">
          <Route exact path="/" render={ ({match}) => (
            <Home factions={Object.keys(this.state.ships)} />
            )} />
        </main>
        

      </div>
    );
  }
}

export default App;
