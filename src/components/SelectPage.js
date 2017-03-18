import React from 'react';
import {Link, browserHistory} from 'react-router-dom';

import Preloader from './Preloader';

const SelectPage = ({title, links, children, match, relative}) => {

  let prevPage = '';
  if (match) {
   const i = (match.url).lastIndexOf('/');
    if (i != -1) {
      // end of the url
      const thisPage = (match.url).substr(i, 0) + match.url.substr(i);
      // take out the last /x part
      prevPage = match.url.replace(thisPage, '') || '';
    }
  }

  const prevButton = match && match.params ? 
      <Link to={prevPage} className="waves-effect waves-teal  btn-flat">
          <i className="fa fa-arrow-left" aria-hidden="true"></i> previous
      </Link> : '';

  if(links || children) {
    return (
      <section>

        {prevButton}

        <ul className="collection with-header">
          <li className="collection-header">
            <h4>{title}</h4>
          </li>

        {links.map((link) => {
          let to = relative ? `${match.url}/${link}` : `/${link}`;
          return (
            <Link key={link} to={to} className="collection-item">{link}</Link>
          );
        })}

        {children}

        </ul>
      </section>
    );
  } else {
    return <Preloader />;
  }
  
};

export default SelectPage;
