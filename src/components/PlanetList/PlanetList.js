import React from "react";
import PlanetItem from "../PlanetItem";

const PlanetList = props => {
    const {planets} = props ;

    

  return (
    <ul>
      {planets.map(planet => {
        return (
          <li key={planet.id}>
            <PlanetItem planet={planet} />
          </li>
        );
      })}
    </ul>
  );
};

export default PlanetList;
