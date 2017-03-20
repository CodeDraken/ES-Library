import React from 'react';

import PrevButton from './PrevButton';

const OutfitPage = ({outfit, match}) => {
  return (
    <section>
      {match && match.url ? <PrevButton url={match.url} /> : ''}
       <table>
        <tbody>
        {outfit ? Object.keys(outfit).map((key) => {
          return (
            <tr key={key}>
              <td><strong>{key}</strong></td>
              <td>{(outfit[key]).toString()}</td>
            </tr>
          );
        }) : ''}
        </tbody>
      </table>
    </section>

  );
};

export default OutfitPage;
