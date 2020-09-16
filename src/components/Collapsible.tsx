// React
import React, { useState } from "react";

// Components
import CollapsibleContent from "./CollapsibleContent";
import CollapsibleHeaders from "./CollapsibleHeaders";

// Types
import { Film, Planet } from "./types";

type Props = {
    singleFilm: Film;
};

const Collapsible: React.FC<Props> = ({ singleFilm }) => {
    const [param, setParam] = useState<string>("");
    const [isAscending, setIsAscending] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isText, setIsText] = useState<boolean>(true);
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

            <div
                className={`${
                    isOpen ? "opened" : "closed"
                } collapsible-content`}
            >
                <CollapsibleHeaders
                    setIsText={setIsText}
                    isOpen={isOpen}
                    param={param}
                    setParam={setParam}
                    isAscending={isAscending}
                    setIsAscending={setIsAscending}
                />
                {singleFilm.planetsInFilms
                    .sort((a: Planet, b: Planet) => {
                        return (isAscending && isText) ||
                            (!isAscending && !isText)
                            ? a[param] > b[param]
                                ? 1
                                : -1
                            : a[param] < b[param]
                            ? 1
                            : -1;
                    })
                    .map((singlePlanet: Planet) => (
                        <CollapsibleContent
                            singlePlanet={singlePlanet}
                            isOpen={isOpen}
                            key={singlePlanet.planetId}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Collapsible;
