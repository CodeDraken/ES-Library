import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import SelectPage from './SelectPage';

const Home = () => {
  return (
    <div>
      <section>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <form className="input-field col s12">
                <label htmlFor="search">Search</label>
                <input type="text" id="search" className="search" />
              </form>
            </div>
          </div>
        </div>
      </section>

      <SelectPage links={['factions', 'outfits']} title='View factions or outfits' />

    </div>
  );
};

export default Home;
