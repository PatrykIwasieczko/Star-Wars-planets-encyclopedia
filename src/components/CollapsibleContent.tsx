// React
import React from "react";

// Types
import { Planet } from "../helpers/types";

type Props = {
    singlePlanet: Planet;
    isOpen: boolean;
};

const CollapsibleContent: React.FC<Props> = ({ singlePlanet, isOpen }) => {
    const rows = [
        singlePlanet.planetName,
        singlePlanet.rotationPeriod,
        singlePlanet.orbitalPeriod,
        singlePlanet.diameter,
        singlePlanet.climate,
        singlePlanet.surfaceWater,
        singlePlanet.population,
    ];
    return (
        <ul
            key={singlePlanet.planetId}
            className={isOpen ? "collapsible-opened" : "collapsible-closed"}
        >
            {rows.map((row, index) => (
                <p key={index} className="collapsible-text text-content">
                    {row ? row : "unknown"}
                </p>
            ))}
        </ul>
    );
};

export default CollapsibleContent;
