import React from 'react';
import {Route, Link} from 'react-router-dom';

const FactionPage = ({match}) => {
  return (
    <div>

      <section>
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>What do you want to know about?</h4>
          </li>

          <Link to={`${match.url}/ships`} className="collection-item">Ships</Link>
          <Link to={`${match.url}/outfits`} className="collection-item">Outfits</Link>


        </ul>
      </section>
      
    </div>
  );
};

export default FactionPage;
