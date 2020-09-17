export type Film = {
    filmId: string;
    filmTitle: string;
    planetsInFilms: Planet[];
};

export type Planet = {
    planetId: string;
    planetName: string;
    rotationPeriod: number | undefined;
    orbitalPeriod: number | undefined;
    diameter: number | undefined;
    climate: string;
    surfaceWater: number | undefined;
    population: number | undefined;
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
