import React from "react";

//Element of dropdown
const DropdownItem = ({ leftIcon, rightIcon, children, goToMenu, setActive }) => {
    return (
        <a href="#" className="menu-item" onClick={() => goToMenu && setActive(goToMenu)}>
            {leftIcon && <span className="icon-button icon-left">{leftIcon}</span>}

            {children}

            {rightIcon && <span className="icon-button icon-right">{rightIcon}</span>}
        </a>
    );
};

export default DropdownItem;