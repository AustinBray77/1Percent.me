import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./Button.css";

const LoginButton = () => {
    const { user, loginWithRedirect, isAuthenticated } = useAuth0();

    const handleClick = () =>
    {
        loginWithRedirect();
    }

    return(
        
        !isAuthenticated && (
            <button onClick = {handleClick}>
                Login!
            </button>
        )


    )
}

export default LoginButton