import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';

import Home from './Home';
import SelectPage from './SelectPage';
import InfoPage from './InfoPage';
import ShipPage from './ShipPage';
import OutfitPage from './OutfitPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factions: {
        'coalition': {ships: {}},
        'drak': {ships: {}},
        'generic': {ships: {}},
        'hai': {ships: {}},
        'other': {ships: {}},
        'korath': {ships: {}},
        'marauders': {ships: {}},
        'pug': {ships: {}},
        'quarg': {ships: {}},
        'wanderer': {ships: {}}
      },
      outfits: {}
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
        newState[faction].ships = ships[faction];
      });
      this.setState({factions: newState});
    });
    axios.get('https://raw.githubusercontent.com/CodeDraken/ES-Scraper/master/json/outfits/outfits.json').then((res) => {
      const outfits = res.data;
      this.setState({
        outfits
      });
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
            <Home match={match} />
          )} />

          <Route exact path='/factions' render={({match}) => (
            <SelectPage match={match} links={Object.keys(this.state.factions)} title='Select a Faction' relative={true} />
          )} />

          <Route exact path='/factions/:faction' render={ ({match}) => (
            <SelectPage match={match} title='What do you want to know about?' links={['Ships']} relative={true} />
          )} />

          <Route exact path={`/factions/:faction/ships`} render={ ({match}) => (
            <SelectPage match={match} title='Select a ship' relative={true} links={Object.keys(this.state.factions[match.params.faction].ships)} />
          )} />

          <Route path={`/factions/:faction/ships/:ship`} render={ ({match}) => (
            <ShipPage match={match} ship={this.state.factions[match.params.faction].ships[match.params.ship]} />
          )} />

          <Route exact path={`/outfits`} render={ ({match}) => (
            <SelectPage match={match} title='Select an outfit' relative={true} links={Object.keys(this.state.outfits)} />
          )} />

          <Route path={`/outfits/:outfit`} render={ ({match}) => (
            <OutfitPage match={match} outfit={this.state.outfits[match.params.outfit]} />
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
