import React from 'react';
import PrevButton from './PrevButton';

const ShipPage = ({ship, match}) => {
  const { layout, outfits } = ship,
    attr = ship.attributes,
    weapon = attr.weapon;

  let sprite;
  console.log('ship: ', ship)
  try {
    sprite = require(`./../img/${(ship.sprite).replace(/ /g, '_')}.png`);
  } catch (err) {
    console.warn(err)
    try {
      sprite = require(`./../img/${(ship.sprite).replace(/ /g, '_')}-0.png`);
    } catch (err) {
      sprite = '';
    }
  }

  return (
    <section>
      { match && match.url ? <PrevButton url={ match.url } /> : '' }
      <div className="row">

        <div className="col s12">
          <h3 className="ship__title center-align">{ ship.name }</h3>
          <p className="ship__description">{ ship.description }</p>
          <div className="row">

            <div className="col s12 m3 l2">
              <table className="bordered highlight">
                <thead>
                  <tr>
                    <th data-field="attribute">Attribute</th>
                    <th data-field="value"> Value</th>
                  </tr>

                  <tr>
                    <td><strong>Cost</strong></td>
                    <td>{attr.cost.toString()}</td>
                  </tr>

                </thead>
              </table>
            </div>


            <div className="col s12 m6 l8">
              <img className="ship__sprite" src={ sprite } alt={ `${ship.name} missing image` } />
            </div>


            <div className="col s12 m3 l2">
              <table className="bordered highlight">
                <thead>
                  <tr>
                    <th data-field="attribute">Attribute</th>
                    <th data-field="value"> Value</th>
                  </tr>

                  <tr>
                    <td><strong>Cost</strong></td>
                    <td>{attr.cost.toString()}</td>
                  </tr>

                </thead>
              </table>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

ShipPage.defaultProps = {
  ship: {
    attributes: {
      automation: false,
      bunks: 0,
      cargoSpace: 0,
      category: 'Unknown',
      cost: 0,
      drag: 0,
      engineCap: 0,
      fuelCap: 0,
      heat: 0,
      hull: 0,
      mass: 0,
      outfitSpace: 0,
      requiredCrew: 0,
      shields: 0,
      weapon: {
        blastRadius: 0,
        hitForce: 0,
        hullDamage: 0,
        shieldDamage: 0
      },
      weaponCap: 0
    },
    description: '...',
    layout: {},
    name: 'Loading ship...',
    outfits: [],
    sprite: ''
  }
};

export default ShipPage;



// <tbody>
//   {Object.keys(ship.attributes).map((key) => {
//     if(key !== 'weapon') {
//       return (
        // <tr key={key}>
        //   <td><strong>{key}</strong></td>
        //   <td>{(ship.attributes[key]).toString()}</td>
        // </tr>
//       );
//     } else {
//       return Object.keys(ship.attributes.weapon).map((key) => {
//         return (
//           <tr key={key}>
//             <td><strong>{key}</strong></td>
//             <td>{(ship.attributes.weapon[key]).toString()}</td>
//           </tr>
//         );
//       });
//     }

//   })}
// </tbody>
