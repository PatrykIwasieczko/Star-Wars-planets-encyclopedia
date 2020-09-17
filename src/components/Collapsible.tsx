// React
import React, { useState } from "react";

// Components
import CollapsibleContent from "./CollapsibleContent";
import CollapsibleHeaders from "./CollapsibleHeaders";

// Types
import { Film, Planet } from "../helpers/types";

type Props = {
    singleFilm: Film;
};

const Collapsible: React.FC<Props> = ({ singleFilm }) => {
    const [param, setParam] = useState<string>("");
    const [isAscending, setIsAscending] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
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
                    isOpen={isOpen}
                    param={param}
                    setParam={setParam}
                    isAscending={isAscending}
                    setIsAscending={setIsAscending}
                />
                {singleFilm.planetsInFilms
                    .sort((a: Planet, b: Planet) => {
                        if (isAscending) {
                            if (a[param] === undefined) return Infinity;
                            else if (b[param] === undefined) return -Infinity;
                            else if (a[param] < b[param]) return 1;
                            else if (a[param] > b[param]) return -1;
                            else return 0;
                        } else {
                            if (a[param] === undefined) return Infinity;
                            else if (b[param] === undefined) return -Infinity;
                            else if (a[param] > b[param]) return 1;
                            else if (a[param] < b[param]) return -1;
                            else return 0;
                        }
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
