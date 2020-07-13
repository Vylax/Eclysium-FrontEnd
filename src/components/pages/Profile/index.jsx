import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as axios from "axios";
import Cookies from 'js-cookie';
import { Container, Typography } from "@material-ui/core";

const Profile = () => {

    const historyRoutes = {
        LOGIN: "login"
    }
    const history = useHistory();
    const [isRendered, setIsRendered] = useState(false);
    const [userData, setUserData] = useState({});

    // Get user's data
    const getData = async () => {
        try {
            const { data: { account, following, followers } } = await axios.get('http://localhost:3001/api/users/account', { headers: { Authorization: Cookies.get("access-token") } });
            account.following = following;
            account.followers = followers;

            // Sets user's data and enable the component rendering
            setUserData(account);
            setIsRendered(true)
        } catch (error) {
            history.push(historyRoutes.LOGIN);
        }
    }
    
    useEffect(() => {
        if (!Cookies.get("access-token")) history.push(historyRoutes.LOGIN);
        getData();
    }, []);

    // Conditional render
    if (isRendered) {
        return (
            <Container maxWidth="xl">
                <div style={{ textAlign: "center", margin: "0 auto" }}>
                    <Typography variant="h3">{userData.name}</Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "white", textAlign: "center", padding: "10px" }}>
                    <div>
                        <Typography variant="h6"><div style={{ paddingBottom: "10px" }}>Followers</div></Typography>
                        {userData.followers.length}
                    </div>
                    <div>
                        <Typography variant="h6"><div style={{ paddingBottom: "10px" }}>Following</div></Typography>
                        {userData.following.length}
                    </div>
                    {/* <div>
                        <Typography variant="h6"><div style={{ paddingBottom: "10px" }}>Stars</div></Typography>
                            Num
                    </div> */}
                </div>
                <div style={{ textAlign: "center", margin: "0 auto" }}>
                    <h2>Your articles</h2>
                </div>
                <div>
                    You have no articles yet.
                </div>
            </Container>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }


}

export default Profile;