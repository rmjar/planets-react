import React, { Fragment } from 'react';

const PlanetItem = props => {
    const {planet} = props;

    const clickHandler = (planet, e) => {
        console.log(e.type, planet)
        e.preventDefault()
      }

    return <Fragment>
        <div onClick = {e => clickHandler(planet, e)}>{planet.id} {planet.name}</div>
    </Fragment>;
}


export default PlanetItem;