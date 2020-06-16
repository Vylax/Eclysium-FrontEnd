import React from "react";
import { Link } from "react-router-dom";

const Li = props => {

    

    // const customStyles = {
    //     color: "darkblue",
    //     textDecoration: "none",
    //     fontWeight: 500,

    //     onFocus: {
    //         color: "red"
    //     }
    // };

    return (
        <li>
            <Link  to={props.target}>
            { props.sectionName }
            {/* <Button size="small" variant="outlined" color="primary" disableElevation>{props.sectionName}</Button> */}
            </Link>
        </li>
    );
}

export default Li;