// Types
import { PlanetData, FilmData, Film } from "./types";

export const transformData = (films: FilmData[], planets: PlanetData[]) => {
    const filmData: Film[] = [];
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
                            rotationPeriod: planet.rotationPeriod
                                ? planet.rotationPeriod
                                : "unknown",
                            orbitalPeriod: planet.orbitalPeriod
                                ? planet.orbitalPeriod
                                : "unknown",
                            diameter: planet.diameter
                                ? planet.diameter
                                : "unknown",
                            climate: planet.climates[0],
                            surfaceWater: planet.surfaceWater
                                ? planet.surfaceWater
                                : "unknown",
                            population: planet.population
                                ? planet.population
                                : "unknown",
                        });
                    }
                });
            });
        }
        return null;
    });
    return filmData;
};
