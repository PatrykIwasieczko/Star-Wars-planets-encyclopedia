import React, { useEffect, useState } from "react";
import { DATA } from "./data";

const App = () => {
    const [planets, setPlanets] = useState(DATA.data.planets);
    const [films, setFilms] = useState(DATA.data.films);
    const [transformedData, setTransformedData] = useState([]);

    useEffect(() => {
        transformData();
    }, []);

    const transformData = () => {
        const filmData = [];
        films.map((film) => {
            return filmData.push({
                filmId: film.id,
                filmTitle: film.title,
                planetsInFilms: [],
            });
        });
        planets.map((planet) => {
            if (planet.filmConnection.films.length !== 0) {
                planet.filmConnection.films.forEach((film) => {
                    filmData.forEach((data) => {
                        if (data.filmId === film.id) {
                            data.planetsInFilms.push({
                                planetId: planet.id,
                                planetName: planet.name,
                            });
                        }
                    });
                });
            }
            return setTransformedData(filmData);
        });
    };

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
