import React from "react";
import { Link } from "react-router-dom";

//Element of dropdown
const DropdownItem = ({ leftIcon, rightIcon, children, goToMenu, setActive, target = "#", displayHandler }) => {
    return (
        <Link to={target} className="menu-item" onClick={() => {goToMenu && setActive(goToMenu); displayHandler && displayHandler(false) }}>
            {leftIcon && <span className="icon-button icon-left">{leftIcon}</span>}

            {children}

            {rightIcon && <span className="icon-button icon-right">{rightIcon}</span>}
        </Link>
    );
};

export default DropdownItem;