export type Film = {
    filmId: string;
    filmTitle: string;
    planetsInFilms: Planet[];
};

export type Planet = {
    planetId: string;
    planetName: string;
    rotationPeriod: number | string;
    orbitalPeriod: number | string;
    diameter: number | string;
    climate: string;
    surfaceWater: number | string;
    population: number | string;
};

export type FilmData = {
    id: string;
    title: string;
};

export type PlanetData = {
    id: string;
    name: string;
    rotationPeriod: number | null;
    orbitalPeriod: number | null;
    diameter: number | null;
    climates: string[];
    surfaceWater: number | null;
    population: number | null;
    filmConnection: { films: { id: string }[] };
};
