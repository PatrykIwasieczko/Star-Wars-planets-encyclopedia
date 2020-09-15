// React
import React, { useEffect, useState } from "react";

// Components
import { DATA } from "./data";
import { transformData } from "./utils";
import Collapsible from "./components/Collapsible";
import CollapsibleMobile from "./components/CollapsibleMobile";

const App = () => {
  const [planets] = useState(DATA.data.planets);
  const [films] = useState(DATA.data.films);
  const [transformedData, setTransformedData] = useState([]);

  const [isMobile, setIsMobile] = useState(false);

  const mql = window.matchMedia("(max-width: 600px)");

  let mobileView = mql.matches;

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600 ? true : false);
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    setTransformedData(transformData(films, planets));
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [films, planets]);

  return (
    <div className="app">
      <div className="logo">
        <img src="/images/LOGO.svg" alt="logo" />
      </div>
      <div className="wrapper">
        {transformedData.map((singleFilm) => {
          return isMobile
            ? <CollapsibleMobile
              singleFilm={singleFilm}
              key={singleFilm.filmId}
            />
            : <Collapsible singleFilm={singleFilm} key={singleFilm.filmId} />;
        })}
      </div>
    </div>
  );
};

export default App;
