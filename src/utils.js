export const transformData = (films, planets) => {
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
        return null;
    });
    return filmData;
};
