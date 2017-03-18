import React from 'react';
import {Link} from 'react-router-dom';

const PrevButton = ({url}) => {
  let prevPage = '';
  
  if (url) {
    const i = (url).lastIndexOf('/');
    if (i !== -1) {
      // end of the url
      const thisPage = (url).substr(i, 0) + url.substr(i);
      // take out the last /x part
      prevPage = url.replace(thisPage, '') || '';
    }
  }

  const prevButton = url ? 
      <Link to={prevPage} className="waves-effect waves-teal  btn-flat">
          <i className="fa fa-arrow-left" aria-hidden="true"></i> previous
      </Link> : '';
  return (
    <div>
      {prevButton}
    </div>
    
  );
};

export default PrevButton;
