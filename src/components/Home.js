import React, {Component} from 'react';

import {Link} from 'react-router-dom';

const Home = (props) => {
  console.log(props)
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

        <section>
          <ul className="collection with-header">
            <li className="collection-header">
              <h4>Select a Faction</h4>
            </li>
          </ul>
        </section>
    </div>
  );
};

export default Home;


// <Link to='/coalition' className="collection-item">Coalition</Link>
// <Link to='' className="collection-item">Drak</Link>
// <Link to='' className="collection-item">Human</Link>
// <Link to='' className="collection-item">Hai</Link>
// <Link to='' className="collection-item">Kestrel</Link>
// <Link to='' className="collection-item">Korath</Link>
// <Link to='' className="collection-item">Marauders</Link>
// <Link to='' className="collection-item">Pug</Link>
// <Link to='' className="collection-item">Quarg</Link>
// <Link to='' className="collection-item">Wanderer</Link>
