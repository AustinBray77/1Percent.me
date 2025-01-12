import React from 'react';
import "./Profile.css";
import NavBar from '../components/NavBar.tsx';

export default function Profile() {
    return (
        <main>
            <div className = 'phoneScreen'>
                <h1 class> Streaks</h1>
                <NavBar/>
            </div>
        </main>
    )
}