import React, { useState } from "react";

import Transition from "./Transition";
import DropdownItem from "./DropdownItem";

import UserIcon from "./icons/user.svg";
import CogIcon from "./icons/cog.svg";
import ArrowIcon from "./icons/arrow.svg";

const DropdownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(setFirstMenuHeight);

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
                <DropdownItem leftIcon={<UserIcon />}>My profile</DropdownItem>
                <DropdownItem leftIcon={<CogIcon />} goToMenu={menuNames.SETTINGS} setActive={setActiveMenu} >Settings</DropdownItem>
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