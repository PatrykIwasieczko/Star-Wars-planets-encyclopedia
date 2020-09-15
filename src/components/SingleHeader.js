import React from "react";

const SingleHeader = (
  { headerTitle, setIsAscending, isAscending, setParam },
) => {
  return (
    <div className="single-collapsible">
      <p
        className="collapsible-text"
      >
        {headerTitle}
      </p>
      <div className="caret-icons">
        <i
          onClick={() => {
            setIsAscending(false);
            setParam("planetName");
          }}
          className={`fas fa-caret-up ${
            !isAscending ? "active-icon" : "inactive-icon"
          }`}
        >
        </i>
        <i
          onClick={() => {
            setIsAscending(true);
            setParam("planetName");
          }}
          className={`fas fa-caret-down ${
            isAscending ? "active-icon" : "inactive-icon"
          }`}
        >
        </i>
      </div>
    </div>
  );
};

export default SingleHeader;
