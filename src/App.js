import React, { useEffect, useState } from "react";
import { DATA } from "./data";
import { transformData } from "./utils";

const App = () => {
    const [planets, setPlanets] = useState(DATA.data.planets);
    const [films, setFilms] = useState(DATA.data.films);
    const [transformedData, setTransformedData] = useState([]);

    useEffect(() => {
        setTransformedData(transformData(films, planets));
    }, [films, planets]);

    return (
        <div className="App">
            <div>
                <img src="/images/LOGO.svg" alt="logo" />
            </div>
            <div>
                {transformedData.map((singleFilm) => (
                    <div key={singleFilm.filmId}>
                        <h3>{singleFilm.filmTitle}</h3>
                        <ul>
                            {singleFilm.planetsInFilms.map((singlePlanet) => (
                                <p key={singlePlanet.planetId}>
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
