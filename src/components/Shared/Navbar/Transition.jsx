import React, { forwardRef, Children, useEffect } from "react";

import { CSSTransition } from "react-transition-group";

const Transition = forwardRef(({ inHandler, menuClass, onEnterHandler, children, setMenuHeight }, ref) => {

    setMenuHeight && useEffect(() => {
        setMenuHeight(Children.count(children));
    }, []);

    return (
        <CSSTransition in={inHandler} unmountOnExit timeout={500} classNames={menuClass} onEnter={onEnterHandler}>
            <div className="menu" ref={ref}>
                {children}
            </div>
        </CSSTransition>
    );
});

export default Transition;