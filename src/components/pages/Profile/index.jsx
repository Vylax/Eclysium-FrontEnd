import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as axios from "axios";
import Cookies from 'js-cookie';
import { Typography } from "@material-ui/core";

const Profile = () => {

    const history = useHistory();
    const [userData, setUserData] = useState({});

    // Get user's data
    const getData = async () => {
        try {
            const { data } = await axios.get('http://localhost:3001/api/users/account', { headers: { Authorization: Cookies.get("access-token") } })
            setUserData(data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        if (!Cookies.get("access-token")) history.push()
        getData();
        
    }, []);

    return (
        <div>
            <div style={{ textAlign: "center", margin: "0 auto" }}>
                <Typography variant="h1">{userData.name}</Typography>
            </div>
            <div>
                dasd
            </div>
        </div>
    )
}

export default Profile;