import React, { useState } from "react";
import CollapsibleContent from "./CollapsibleContent";

const Collapsible = ({ singleFilm }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="collapsible" key={singleFilm.filmId}>
            <div
                className="collapsible-header"
                onClick={() => setIsOpen((previous) => !previous)}
            >
                <h3>{singleFilm.filmTitle}</h3>
                <img
                    src={
                        isOpen
                            ? "/images/ARROW CLOSE.svg"
                            : "/images/ARROW OPEN.svg"
                    }
                    alt="arrow open"
                />
            </div>

            {singleFilm.planetsInFilms.map((singlePlanet) => (
                <CollapsibleContent
                    singlePlanet={singlePlanet}
                    isOpen={isOpen}
                />
            ))}
        </div>
    );
};

export default Collapsible;
