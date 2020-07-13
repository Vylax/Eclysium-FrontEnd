import React, { forwardRef } from "react";

const NavItem = forwardRef(({ icon, children, setDisplayed, displayed }, ref) => {

    return (
        <li className="nav-item" ref={ref}>
            <a href="#" className="icon-button" onClick={() => { setDisplayed(!displayed) }}>
                {icon}
            </a>
            {displayed && children}
        </li>
    );
});

export default NavItem;