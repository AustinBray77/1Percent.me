import React from 'react';
import "./UpdateStreaks.css";
import NavBar from '../components/NavBar.tsx';
import {useState, useEffect} from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { getUserStreaks } from '../api/streaks.ts';

export default function UpdateStreaks() {
    return (
        <main>
            <div className = 'phoneScreen'>
                <h1 className = 'title'> IDK NAME</h1>
                <div className = "streaks">
                    <h1 className = "streakName">I worked out today!</h1>
                    <h1 className = "streakName">I read today!</h1>
                    <h1 className = "streakName">I coded today!</h1>
                    <h1 className = "streakName">I meditated today! </h1>
                    <h1 className = "streakName">I was greatful today! </h1>
                    <h1 className = "streakName">I enjoyed nature today!</h1>
                </div>
                <NavBar/>
            </div>
        </main>
    )
}