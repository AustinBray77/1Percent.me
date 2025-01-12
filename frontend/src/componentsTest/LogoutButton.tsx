import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout, isAuthenticated, user } = useAuth0();
    return(
        
        isAuthenticated && (
            <div>
            <button onClick = {() => logout()}>
                Logout!
            </button>
            <h1>
                {JSON.stringify(user)}
            </h1>
            </div>

        )


    )
}

export default LogoutButton