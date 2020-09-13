// React
import React, { useEffect, useState } from "react";

// Components
import { DATA } from "./data";
import { transformData } from "./utils";

const App = () => {
    const [planets] = useState(DATA.data.planets);
    const [films] = useState(DATA.data.films);
    const [transformedData, setTransformedData] = useState([]);

    useEffect(() => {
        setTransformedData(transformData(films, planets));
    }, [films, planets]);

    return (
        <div className="app">
            <div className="logo">
                <img src="/images/LOGO.svg" alt="logo" />
            </div>
            <div className="wrapper">
                {transformedData.map((singleFilm) => (
                    <div className="collapsible" key={singleFilm.filmId}>
                        <div className="collapsible-header">
                            <h3>{singleFilm.filmTitle}</h3>
                            <img
                                src="/images/ARROW OPEN.svg"
                                alt="arrow open"
                            />
                        </div>

                        <ul>
                            {singleFilm.planetsInFilms.map((singlePlanet) => (
                                <p
                                    className="collapsible-text"
                                    key={singlePlanet.planetId}
                                >
                                    {singlePlanet.planetName}
                                </p>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
