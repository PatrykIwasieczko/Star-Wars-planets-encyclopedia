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
            <p className="collapsible-text">{planetName}</p>
            <p className="collapsible-text">{rotationPeriod}</p>
            <p className="collapsible-text">{orbitalPeriod}</p>
            <p className="collapsible-text">{diameter}</p>
            <p className="collapsible-text">{climate}</p>
            <p className="collapsible-text">{surfaceWater}</p>
            <p className="collapsible-text">{population}</p>
        </ul>
    );
};

export default CollapsibleContent;
