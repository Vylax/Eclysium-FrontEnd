import React, { useEffect, useState, createRef } from "react";
import { Link } from "react-router-dom";
import { Typography, Box } from "@material-ui/core";
import DropdownMenu from "./DropdownMenu";
import NavItem from "./NavItem";

// import MessengerIcon from "./icons/messenger.svg";
import OptionsIcon from "./icons/options.svg";
// import BellIcon from "./icons/bell.svg";
import PlusIcon from "./icons/plus.svg";


import "./navbar.sass";

const Navbar = () => {

    const [displayed, setDisplayed] = useState(false);
    const ref = createRef();

    // If the dropdown is displayed, it will be closed if a click event is done outside the NavItem with ref attribute
    const outsideClickHandler = ref => {
        useEffect(() => {

            const handleClickOutside = event => {
                if (ref.current && !ref.current.contains(event.target) && displayed) {
                    setDisplayed(false)
                }
            }

            document.addEventListener("mousedown", handleClickOutside);

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    outsideClickHandler(ref);

    return (
        <nav className="navbar">
            <Typography component="div" className="title" style={{ color: "#eee" }}>
                <Box fontWeight={700} fontSize="2rem" m={1} letterSpacing={3} >
                    <Link to="/">Eclysium</Link>
                </Box>
            </Typography>
            <ul className="navbar-nav">
                <NavItem icon={<PlusIcon />} to="/library"/>
                {/* <NavItem icon={<BellIcon />} />
                <NavItem icon={<MessengerIcon />} /> */}
                <NavItem icon={<OptionsIcon style={displayed ? { transform: "rotate(-90deg)" } : {}} />} displayed={displayed} setDisplayed={setDisplayed} ref={ref}>
                    <DropdownMenu displayHandler={setDisplayed}  />
                </NavItem>
            </ul>
        </nav>
    );
}

export default Navbar;