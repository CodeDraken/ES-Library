import React from 'react';

//import sprite from './../img/ship/aerie.png';

const ShipPage = (props) => {
  const ship = props.data;
  let sprite;

  try {
    sprite = require(`./../img/${(ship.sprite).replace(/ /g, '_')}.png`);
  } catch(err) {
    console.warn(err)
    try {
      sprite = require(`./../img/${(ship.sprite).replace(/ /g, '_')}-0.png`);
    } catch(err) {
      sprite = '';
    }
    
  }
  
  return (
    <section>
      <h3>
        {ship.name}
      </h3>

      <div className="row">

        <div className="col s12 m8">
          <p>{ship.description}</p>
        </div>

        <div className="col s4">
          <img src={sprite} alt={`${ship.name} missing image`}/>

          <table className="bordered highlight">
            <thead>
              <tr>
                  <th data-field="attribute">Attribute</th>
                  <th data-field="value"> Value</th>
              </tr>
            </thead>

            <tbody>

              {Object.keys(ship.attributes).map((key) => {
                if(key !== 'weapon') {
                  return (
                    <tr key={key}>
                      <td><strong>{key}</strong></td>
                      <td>{(ship.attributes[key]).toString()}</td>
                    </tr>
                  );
                } else {
                  return Object.keys(ship.attributes.weapon).map((key) => {
                    return (
                      <tr key={key}>
                        <td><strong>{key}</strong></td>
                        <td>{(ship.attributes.weapon[key]).toString()}</td>
                      </tr>
                    );
                  });
                }

              })}

            </tbody>
        </table>
          
        </div>

      </div>

    </section>
  );
};

ShipPage.defaultProps = {
  data: {
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
    sprite: 'ship/sparrow'
  }
};

export default ShipPage;
