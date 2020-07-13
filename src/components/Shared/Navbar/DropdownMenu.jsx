import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

import Transition from "./Transition";
import DropdownItem from "./DropdownItem";

import UserIcon from "./icons/user.svg";
import CogIcon from "./icons/cog.svg";
import ArrowIcon from "./icons/arrow.svg";

const DropdownMenu = ({ displayHandler }) => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(setFirstMenuHeight);

    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        setIsLogged( Cookies.get("access-token") ? true : false );
    }, [isLogged]);

    // Sets the first value of menuHeight. This allows to see the menu animation on the first render.
    // Parameter: countChildrenOfMainTransition <number> Comes from main Transition and gets the number of children
    // 50 of height for each child + 32 because of padding
    const setFirstMenuHeight = (countChildrenOfMainTransition) => {
        return (50 * countChildrenOfMainTransition) + 32;
    };

    const menuNames = {
        MAIN: "main",
        SETTINGS: "settings"
    };

    // Updates menuHeight for the next menu transition every time a new Transition is rendered
    const calcHeight = ({ offsetHeight, offsetTop }) => {
        const height = offsetHeight + (offsetTop * 2);
        setMenuHeight(height);
    };

    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            <Transition inHandler={activeMenu === menuNames.MAIN} menuClass="menu-primary" onEnterHandler={calcHeight} setMenuHeight={setFirstMenuHeight}>
                {isLogged
                    ? <DropdownItem displayHandler={displayHandler} leftIcon={<UserIcon />}>My profile</DropdownItem>
                    : <DropdownItem displayHandler={displayHandler} leftIcon={<UserIcon />} target="/login">Log in / Sign up</DropdownItem>}

                <DropdownItem leftIcon={<CogIcon />} rightIcon={<ArrowIcon style={{transform: "rotate(180deg)"}} />} goToMenu={menuNames.SETTINGS} setActive={setActiveMenu} >Settings</DropdownItem>
            </Transition>
            <Transition inHandler={activeMenu === menuNames.SETTINGS} menuClass="menu-secondary" onEnterHandler={calcHeight}>
                <DropdownItem leftIcon={<ArrowIcon />} goToMenu={menuNames.MAIN} setActive={setActiveMenu} >Settings</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
            </Transition>
        </div>
    );
};

export default DropdownMenu;