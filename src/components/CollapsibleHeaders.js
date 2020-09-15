import React from "react";
import SingleHeader from "./SingleHeader";

const headersTitles = [
  "Planet name",
  "Rotation period",
  "Orbital period",
  "Diameter",
  "Climate",
  "Surface water",
  "Population",
];

const CollapsibleHeaders = (
  { isOpen, setParam, isAscending, setIsAscending },
) => {
  return (
    <ul
      className={isOpen
        ? "collapsible-opened headers"
        : "collapsible-closed headers"}
    >
      {headersTitles.map((headersTitle) => (
        <SingleHeader
          key={headersTitle}
          headerTitle={headersTitle}
          setIsAscending={setIsAscending}
          isAscending={isAscending}
          setParam={setParam}
        />
      ))}
    </ul>
  );
};

export default CollapsibleHeaders;
