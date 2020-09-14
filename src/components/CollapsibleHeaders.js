import React from "react";

const CollapsibleHeaders = ({ isOpen }) => {
    return (
        <>
            <ul
                className={
                    isOpen
                        ? "collapsible-opened headers"
                        : "collapsible-closed headers"
                }
            >
                <p className="collapsible-text">Planet Name</p>
                <p className="collapsible-text">Rotation period</p>
                <p className="collapsible-text">Orbital period</p>
                <p className="collapsible-text">Diameter</p>
                <p className="collapsible-text">Climate</p>
                <p className="collapsible-text">Surface water</p>
                <p className="collapsible-text">Population</p>
            </ul>
            <div className={isOpen ? "hr-open" : "hr-closed"} />
        </>
    );
};

export default CollapsibleHeaders;
