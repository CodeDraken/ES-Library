import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';

import Home from './Home';
import SelectPage from './SelectPage';
import InfoPage from './InfoPage';
import ShipPage from './ShipPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factions: {
        'coalition': {ships: {}, outfits: {}},
        'drak': {ships: {}, outfits: {}},
        'generic': {ships: {}, outfits: {}},
        'hai': {ships: {}, outfits: {}},
        'kestrel': {ships: {}, outfits: {}},
        'korath': {ships: {}, outfits: {}},
        'marauders': {ships: {}, outfits: {}},
        'pug': {ships: {}, outfits: {}},
        'quarg': {ships: {}, outfits: {}},
        'wanderer': {ships: {}, outfits: {}}
      }
    };
  }

  componentDidMount() {
    // get ships
    axios.get('https://raw.githubusercontent.com/CodeDraken/ES-Scraper/master/json/ships/all_ships.json').then((res) => {
      const ships = res.data;
      // string names of factions
      const factions = Object.keys(ships);
      const newState = {};
      factions.forEach((faction) => {
        newState[faction] = {};
        newState[faction].outfits = this.state.factions[faction].outfits;
        newState[faction].ships = ships[faction];
      });
      this.setState({factions: newState});
    });
  }

  render() {
    return (
      <div>

        <div className="navbar">
          <nav className="blue lighten-3">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo center">Endless Sky Library</Link>
            </div>
          </nav>
        </div>

        <main className="container">

          <Route exact path="/" render={ ({match}) => (
            <Home match={match} factions={Object.keys(this.state.factions)} />
          )} />

          <Route exact path="/:faction" render={ ({match}) => (
            <SelectPage match={match} title='What do you want to know about?' links={['Ships', 'Outfits']} relative={true} />
          )} />

          <Route exact path={`/:faction/ships`} render={ ({match}) => (
            <SelectPage match={match} title='Select a ship' relative={true} links={Object.keys(this.state.factions[match.params.faction].ships)} />
          )} />

          <Route path={`/:faction/ships/:ship`} render={ ({match}) => (
            <ShipPage match={match} ship={this.state.factions[match.params.faction].ships[match.params.ship]} />
          )} />

        </main>

      </div>
    );
  }
}

export default App;

// ships={this.state.ships[match.params.faction]}

// <Route path={`/:faction/ships`} render={ ({match}) => (
//   <SelectPage match={match} title='Select a ship' links={Object.keys(this.state.ships[match.params.faction]) || []} />
// )} />


              // <Link to={`${match.url}/ships`} className="collection-item">Ships</Link>
              // <Link to={`${match.url}/outfits`} className="collection-item">Outfits</Link>
