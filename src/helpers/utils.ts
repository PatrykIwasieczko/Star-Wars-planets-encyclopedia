// Types
import { PlanetData, FilmData, Film } from "./types";

// Function to map current data into the new format to correctly display into table
export const transformData = (films: FilmData[], planets: PlanetData[]) => {
    const filmData: Film[] = [];

    // Map all films into new array
    films.map((film) => {
        return filmData.push({
            filmId: film.id,
            filmTitle: film.title,
            planetsInFilms: [],
        });
    });

    // If planet appeared in any film map it into new object and push into planetsInFilmsArray
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
                                : undefined,
                            orbitalPeriod: planet.orbitalPeriod
                                ? planet.orbitalPeriod
                                : undefined,
                            diameter: planet.diameter
                                ? planet.diameter
                                : undefined,
                            climate: planet.climates[0],
                            surfaceWater: planet.surfaceWater
                                ? planet.surfaceWater
                                : undefined,
                            population: planet.population
                                ? planet.population
                                : undefined,
                        });
                    }
                });
            });
        }
        return null;
    });
    return filmData;
};
