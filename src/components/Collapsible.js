import React, { useState } from "react";
import CollapsibleContent from "./CollapsibleContent";
import CollapsibleHeaders from "./CollapsibleHeaders";

const Collapsible = ({ singleFilm }) => {
  const [param, setParam] = useState("");
  const [isAscending, setIsAscending] = useState(null);
  //   const sortByParam = (a, b, ascending) => {
  //     return a[param] > b[param] ? 1 : -1;
  //   };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapsible" key={singleFilm.filmId}>
      <div
        className="collapsible-header"
        onClick={() => setIsOpen((previous) => !previous)}
      >
        <h3>{singleFilm.filmTitle}</h3>
        <img
          src={isOpen ? "/images/ARROW CLOSE.svg" : "/images/ARROW OPEN.svg"}
          alt="arrow open"
        />
      </div>

      <CollapsibleHeaders
        isOpen={isOpen}
        param={param}
        setParam={setParam}
        isAscending={isAscending}
        setIsAscending={setIsAscending}
      />
      {singleFilm.planetsInFilms.sort((a, b) => {
        return isAscending
          ? ((a[param] > b[param] ? 1 : -1))
          : (a[param] > b[param] ? -1 : 1);
      })
        .map((singlePlanet) => (
          <CollapsibleContent
            singlePlanet={singlePlanet}
            isOpen={isOpen}
            key={singlePlanet.planetId}
          />
        ))}
    </div>
  );
};

export default Collapsible;
