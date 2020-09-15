import React from "react";

const CollapsibleHeaders = (
  { isOpen, setParam, isAscending, setIsAscending },
) => {
  return (
    <>
      <ul
        className={isOpen
          ? "collapsible-opened headers"
          : "collapsible-closed headers"}
      >
        <div className="collapsible-text">
          <p
            className="collapsible-text"
          >
            Planet Name
          </p>
          <div className="caret-icons">
            <i
              onClick={() => {
                setIsAscending(false);
                setParam("planetName");
              }}
              className={`fas fa-caret-up ${
                !isAscending ? "active-icon" : null
              }`}
            >
            </i>
            <i
              onClick={() => {
                setIsAscending(true);
                setParam("planetName");
              }}
              className={`fas fa-caret-down ${
                isAscending ? "active-icon" : null
              }`}
            >
            </i>
          </div>
        </div>
        <div className="collapsible-text">
          <p
            className="collapsible-text"
          >
            Rotation period
          </p>
          <div className="caret-icons">
            <i
              onClick={() => {
                setIsAscending(false);
                setParam("rotationPeriod");
              }}
              className={`fas fa-caret-up ${
                !isAscending ? "active-icon" : null
              }`}
            >
            </i>
            <i
              onClick={() => {
                setIsAscending(true);
                setParam("rotationPeriod");
              }}
              className={`fas fa-caret-down ${
                isAscending ? "active-icon" : null
              }`}
            >
            </i>
          </div>
        </div>
        <div className="collapsible-text">
          <p
            className="collapsible-text"
          >
            Orbital period
          </p>
          <div className="caret-icons">
            <i
              onClick={() => {
                setIsAscending(false);
                setParam("orbitalperiod");
              }}
              className={`fas fa-caret-up ${
                !isAscending ? "active-icon" : null
              }`}
            >
            </i>
            <i
              onClick={() => {
                setIsAscending(true);
                setParam("orbitalPeriod");
              }}
              className={`fas fa-caret-down ${
                isAscending ? "active-icon" : null
              }`}
            >
            </i>
          </div>
        </div>
        <div className="collapsible-text">
          <p
            className="collapsible-text"
          >
            Diameter
          </p>
          <div className="caret-icons">
            <i
              onClick={() => {
                setIsAscending(false);
                setParam("diameter");
              }}
              className={`fas fa-caret-up ${
                !isAscending ? "active-icon" : null
              }`}
            >
            </i>
            <i
              onClick={() => {
                setIsAscending(true);
                setParam("diameter");
              }}
              className={`fas fa-caret-down ${
                isAscending ? "active-icon" : null
              }`}
            >
            </i>
          </div>
        </div>
        <div className="collapsible-text">
          <p
            className="collapsible-text"
          >
            Climate
          </p>
          <div className="caret-icons">
            <i
              onClick={() => {
                setIsAscending(false);
                setParam("climate");
              }}
              className={`fas fa-caret-up ${
                !isAscending ? "active-icon" : null
              }`}
            >
            </i>
            <i
              onClick={() => {
                setIsAscending(true);
                setParam("climate");
              }}
              className={`fas fa-caret-down ${
                isAscending ? "active-icon" : null
              }`}
            >
            </i>
          </div>
        </div>
        <div className="collapsible-text">
          <p
            className="collapsible-text"
          >
            Surface water
          </p>
          <div className="caret-icons">
            <i
              onClick={() => {
                setIsAscending(false);
                setParam("surfaceWater");
              }}
              className={`fas fa-caret-up ${
                !isAscending ? "active-icon" : null
              }`}
            >
            </i>
            <i
              onClick={() => {
                setIsAscending(true);
                setParam("surfaceWater");
              }}
              className={`fas fa-caret-down ${
                isAscending ? "active-icon" : null
              }`}
            >
            </i>
          </div>
        </div>
        <div className="collapsible-text">
          <p
            onClick={() => {
              setParam("population");
            }}
            className="collapsible-text"
          >
            Population
          </p>
          <div className="caret-icons">
            <i
              onClick={() => {
                setIsAscending(false);
                setParam("population");
              }}
              className={`fas fa-caret-up ${
                !isAscending ? "active-icon" : null
              }`}
            >
            </i>
            <i
              onClick={() => {
                setIsAscending(true);
                setParam("population");
              }}
              className={`fas fa-caret-down ${
                isAscending ? "active-icon" : null
              }`}
            >
            </i>
          </div>
        </div>
      </ul>
      <div className={isOpen ? "hr-open" : "hr-closed"} />
    </>
  );
};

export default CollapsibleHeaders;
