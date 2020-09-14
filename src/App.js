// React
import React, { useEffect, useState } from "react";

// Components
import { DATA } from "./data";
import { transformData } from "./utils";
import Collapsible from "./components/Collapsible";

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
                    <Collapsible
                        singleFilm={singleFilm}
                        key={singleFilm.filmId}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
