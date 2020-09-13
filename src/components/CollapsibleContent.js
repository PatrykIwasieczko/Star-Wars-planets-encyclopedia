import React from "react";

const CollapsibleContent = ({ singlePlanet, isOpen }) => {
    return (
        <ul
            key={singlePlanet.planetId}
            className={isOpen ? "collapsible-opened" : "collapsible-closed"}
        >
            <p className="collapsible-text" key={singlePlanet.planetId}>
                {singlePlanet.planetName}
            </p>
        </ul>
    );
};

export default CollapsibleContent;
