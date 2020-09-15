import React from "react";

const CollapsibleContent = ({ singlePlanet, isOpen }) => {
  const {
    planetName,
    rotationPeriod,
    orbitalPeriod,
    diameter,
    climate,
    surfaceWater,
    population,
  } = singlePlanet;
  return (
    <ul
      key={singlePlanet.planetId}
      className={isOpen ? "collapsible-opened" : "collapsible-closed"}
    >
      <p className="collapsible-text text-content">{planetName}</p>
      <p className="collapsible-text text-content">{rotationPeriod}</p>
      <p className="collapsible-text text-content">{orbitalPeriod}</p>
      <p className="collapsible-text text-content">{diameter}</p>
      <p className="collapsible-text text-content">{climate}</p>
      <p className="collapsible-text text-content">{surfaceWater}</p>
      <p className="collapsible-text text-content">{population}</p>
    </ul>
  );
};

export default CollapsibleContent;
