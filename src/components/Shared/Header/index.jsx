import React, { useEffect } from "react";
import "./header.sass";

import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import Li from "./Li"

import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {

    //List items data
    const listItems = [
        { target: "/", sectionName: "Biblioteca" },
        { target: "/caps", sectionName: "Caps" },
        { target: "/lists", sectionName: "Listas" },
        { target: " ", sectionName: " " },
        { target: "/login", sectionName: "Acceso" }
    ];

    // List items rendering
    const renderListItems = (itemData, i) => {
        return <Li key={i} target={itemData.target} sectionName={itemData.sectionName} />
    };

    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = event => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    // const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;

    // const avatarListStyle = {
    //     li: {
    //         color: "red"
    //     },
    //     ul: {
    //         padding: "5px 50px",
    //         listStyle: "none"

    //     }
    // }

    useEffect(() => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");
        
        burger.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
                }
            });
            burger.classList.toggle("toggle")
        });
    }, []);

    return (
        <nav>
            <div className="logo">
                <h4>Eclysium</h4>
            </div>
            <ul className="nav-links">
                { listItems.map(renderListItems) }
            </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Header