import React from 'react';
import uuid from 'uuid';
import _ from 'lodash';
import {Link} from 'react-router-dom';

import PrevButton from './PrevButton';

const ShipPage = ({ship, match}) => {
  let { layout, outfits } = ship,
    attr = ship.attributes,
    weapon = attr.weapon,
    sprite;

  console.log('ship: ', ship)

  if(outfits) {
    let start = 0;
    const out = outfits.reduce((p, c, i, a) => {
      if (c === '' || i === a.length-1) {
        let end = i === a.length - 1 ? i+1 : i;
        p.push(a.slice(start, end));
        start = i+1;
      }
      return p;
    }, []);
    outfits = out;
  }

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
                  <tr className="tooltipped" data-position="right" data-tooltip="The ship's stats">
                    <th data-field="attribute">Attribute</th>
                    <th data-field="value"> Value</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="tooltipped" data-position="right" data-tooltip="Cost of the ship without outfits">
                    <td><strong>Cost</strong></td>
                    <td>{attr.cost.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="right" data-tooltip="Maximum shields">
                    <td><strong>Shields</strong></td>
                    <td>{attr.shields.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="right" data-tooltip="Maximum hull">
                    <td><strong>Hull</strong></td>
                    <td>{attr.hull.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="right" data-tooltip="You need at least this many crew (does not include turrets)">
                    <td><strong>Required Crew</strong></td>
                    <td>{attr.requiredCrew.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="right" data-tooltip="Rooms for crew & passengers">
                    <td><strong>Bunks</strong></td>
                    <td>{attr.bunks.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="right" data-tooltip="the mass of the ship's chassis, without any outfits or cargo. The higher the mass, the more thrust is needed in order to turn or accelerate at a certain rate.">
                    <td><strong>Mass</strong></td>
                    <td>{attr.mass.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="right" data-tooltip="the maximum speed of the ship will be equal to thrust divided by drag">
                    <td><strong>Drag</strong></td>
                    <td>{attr.drag.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="right" data-tooltip="how well this ship gets rid of excess heat. This should vary from .9 for tiny ships to .5 or less for large ships. For ships of a given size, it should be higher for ships with more exposed hull area or that might be expected to have higher quality construction, and lower for ships that ought to be plagued by overheating issues.">
                    <td><strong>Heat Dissipation</strong></td>
                    <td>{attr.heat.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="right" data-tooltip="the amount of fuel (one jump = 100) that this ship can carry">
                    <td><strong>Fuel Capacity</strong></td>
                    <td>{attr.fuelCap.toString()}</td>
                  </tr>

                </tbody>

              </table>
            </div>

            <div className="col s12 m6 l8">
              <img className="ship__sprite" src={ sprite } alt={ `${ship.name} missing image` } />
              <table className="bordered outfits">
                <thead>
                  <tr>
                    <th>Outfits</th>
                  </tr>
                </thead>

                <tbody>
                  {outfits.map((outfitChunk) => {
                    return (
                      <tr key={uuid()}>
                        {outfitChunk.map((outfit) => {
                          return (
                            <td key={uuid()}>
                              <Link to={`/outfits/${outfit.toLowerCase().replace(/ \d+/g, '')}`}>
                                {outfit}
                              </Link>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>

              </table>
            </div>


            <div className="col s12 m3 l2">
              <table className="bordered highlight">
                <thead>
                  <tr className="tooltipped" data-position="left" data-tooltip="The ship's stats">
                    <th data-field="attribute">Attribute</th>
                    <th data-field="value"> Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tooltipped" data-position="left" data-tooltip="the amount of cargo that can be carried.">
                    <td><strong>Cargo Space</strong></td>
                    <td>{attr.cargoSpace.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="left" data-tooltip="the amount of outfits (weapons, generators, engines, etc.) that can be installed.">
                    <td><strong>Outfit Space</strong></td>
                    <td>{attr.outfitSpace.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="left" data-tooltip="the amount of outfit space that can be occupied by weapons.">
                    <td><strong>Weapon Capacity</strong></td>
                    <td>{attr.weaponCap.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="left" data-tooltip="the amount of that outfit space which is suitable for installing engines. Some ships have lots of engine capacity but not much weapon capacity, or vice versa.">
                    <td><strong>Engine Capacity</strong></td>
                    <td>{attr.engineCap.toString()}</td>
                  </tr>
                </tbody>
              </table>

              <br/>

              <table className="bordered highlight">
                <thead>
                  <tr className="tooltipped" data-position="left" data-tooltip="How much damage this ship does when it explodes">
                    <th data-field="explode">Explosion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tooltipped" data-position="left" data-tooltip="The death explosion radius (Typical value value: (shields + hull) * .01)">
                    <td>
                    <strong>Blast Radius</strong></td>
                    <td>{weapon.blastRadius.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="left" data-tooltip="Damage dealt to nearby ship's shields from the explosion (Typical value value: (shields + hull) * .10)">
                    <td><strong>Shield Damage</strong></td>
                    <td>{weapon.shieldDamage.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="left" data-tooltip="damage dealt to nearby ship's hull from the explosion (Typical value value: (shields + hull) * .05)">
                    <td><strong>Hull Damage</strong></td>
                    <td>{weapon.hullDamage.toString()}</td>
                  </tr>
                  <tr className="tooltipped" data-position="left" data-tooltip="Knocks back nearby ships (Typical value value: (shields + hull) * .15)">
                    <td><strong>Hit Force</strong></td>
                    <td>{weapon.hitForce.toString()}</td>
                  </tr>
                </tbody>
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
