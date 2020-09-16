// React
import React, { useState } from "react";

// Components
import CollapsibleContent from "./CollapsibleContent";
import CollapsibleHeaders from "./CollapsibleHeaders";

// Types
import { Film } from "./types";

type Props = {
    singleFilm: Film;
};

const CollapsibleMobile: React.FC<Props> = ({ singleFilm }) => {
    const [param, setParam] = useState<string>("");
    const [isAscending, setIsAscending] = useState<boolean>(false);

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

            <div
                className={`collapsible-content ${
                    isOpen ? "opened" : "closed"
                }`}
            >
                {singleFilm.planetsInFilms.map((singlePlanet) => (
                    <div
                        className="collapsible-row"
                        key={singlePlanet.planetId}
                    >
                        <CollapsibleHeaders
                            isOpen={isOpen}
                            param={param}
                            setParam={setParam}
                            isAscending={isAscending}
                            setIsAscending={setIsAscending}
                            setIsText={() => true}
                        />
                        <CollapsibleContent
                            singlePlanet={singlePlanet}
                            isOpen={isOpen}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollapsibleMobile;
