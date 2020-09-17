// React
import React, { useEffect, useState } from "react";

// Components
import { DATA } from "./helpers/data";
import Collapsible from "./components/Collapsible";
import CollapsibleMobile from "./components/CollapsibleMobile";

// Utils
import { transformData } from "./helpers/utils";

// Types
import { Film, FilmData, PlanetData } from "./helpers/types";

const App = () => {
    const [planets] = useState<PlanetData[]>(DATA.data.planets);
    const [films] = useState<FilmData[]>(DATA.data.films);
    const [transformedData, setTransformedData] = useState<Film[]>([]);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 600 ? true : false);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        handleResize();

        setTransformedData(transformData(films, planets));
        return () => window.removeEventListener("resize", handleResize);
    }, [films, planets]);

    return (
        <div className="app">
            <div className="logo">
                <img src="/images/LOGO.svg" alt="logo" />
            </div>
            <div className="wrapper">
                {transformedData.map((singleFilm: Film) => {
                    return isMobile ? (
                        <CollapsibleMobile
                            singleFilm={singleFilm}
                            key={singleFilm.filmId}
                        />
                    ) : (
                        <Collapsible
                            singleFilm={singleFilm}
                            key={singleFilm.filmId}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default App;
