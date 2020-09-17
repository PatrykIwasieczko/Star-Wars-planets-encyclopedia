// React
import React from "react";

type Props = {
    headerTitle: string;
    setIsAscending: (boolean: boolean) => void;
    isAscending: boolean;
    setParam: (param: string) => void;
    param: string;
    setActiveIcon: (icon: string) => void;
    activeIcon: string;
};

const SingleHeader: React.FC<Props> = ({
    headerTitle,
    setIsAscending,
    isAscending,
    setParam,
    param,
    setActiveIcon,
    activeIcon,
}) => {
    return (
        <div className="single-collapsible">
            <p className="collapsible-text">{headerTitle}</p>
            <div className={`caret-icons ${activeIcon}`}>
                <i
                    onClick={() => {
                        setIsAscending(false);
                        setParam(param);
                        setActiveIcon(param);
                    }}
                    className={`fas fa-caret-up ${
                        !isAscending && activeIcon === param
                            ? "active-icon"
                            : "inactive-icon"
                    }`}
                ></i>
                <i
                    onClick={() => {
                        setIsAscending(true);
                        setParam(param);
                        setActiveIcon(param);
                    }}
                    className={`fas fa-caret-down ${
                        isAscending && activeIcon === param
                            ? "active-icon"
                            : "inactive-icon"
                    }`}
                ></i>
            </div>
        </div>
    );
};

export default SingleHeader;
