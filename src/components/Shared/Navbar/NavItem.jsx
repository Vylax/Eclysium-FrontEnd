import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const NavItem = forwardRef(({ icon, children, setDisplayed, displayed, to = "#" }, ref) => {

    return (
        <li className="nav-item" ref={ref}>
            <Link to={to} className="icon-button" onClick={() => setDisplayed && setDisplayed(!displayed) }>
                {icon}
            </Link>
            {displayed && children}
        </li>
    );
});

export default NavItem;