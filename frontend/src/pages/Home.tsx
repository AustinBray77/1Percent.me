import React from 'react';
import './Home.css';
import LoginButton from '../componentsTest/LoginButton.tsx';
import LogoutButton from '../componentsTest/LogoutButton.tsx';
import NavBar from '../componentsTest/NavBar.tsx';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

export default function Home(){

    const {isAuthenticated} = useAuth0();

    if (isAuthenticated){
        return <Navigate to= "/profile"/>
    }

    else {
        return(
            <main>
                <div className = 'phoneScreen'>
                    <h1 className = 'title1'>
                        Welcome to
                    </h1>
                    <h1 className = 'title2'>
                        1Percent.me
                    </h1>
                    <p className = 'quote'> "If you can get 1% better each day for one year, you'll end up 37 times better by the time you're done."</p>
                    <LoginButton/>
                </div>
            </main>
        )
    }

}