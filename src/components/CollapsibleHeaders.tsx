// React
import React from "react";

// Components
import SingleHeader from "./SingleHeader";

const titlesAndParams = [
    { key: "planetName", value: "Planet name" },
    { key: "rotationPeriod", value: "Rotation period" },
    { key: "orbitalPeriod", value: "Orbital period" },
    { key: "diameter", value: "Diameter" },
    { key: "climate", value: "Climate" },
    { key: "surfaceWater", value: "Surface water" },
    { key: "population", value: "Population" },
];

type Props = {
    isOpen: boolean;
    setParam: (param: string) => void;
    isAscending: boolean;
    setIsAscending: (boolean: boolean) => void;
    param: string;
};

const CollapsibleHeaders: React.FC<Props> = ({
    isOpen,
    setParam,
    isAscending,
    setIsAscending,
    param,
}) => {
    return (
        <ul
            className={
                isOpen
                    ? "collapsible-opened headers"
                    : "collapsible-closed headers"
            }
        >
            {titlesAndParams.map((headersTitle) => (
                <SingleHeader
                    key={headersTitle.value}
                    headerTitle={headersTitle.value}
                    setIsAscending={setIsAscending}
                    isAscending={isAscending}
                    setParam={setParam}
                    param={headersTitle.key}
                />
            ))}
        </ul>
    );
};

export default CollapsibleHeaders;
