import React from 'react';
import "./UpdateStreaks.css";
import NavBar from '../components/NavBar.tsx';
import {useState, useEffect} from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { getUserStreaks, incrementStreak } from '../api/streaks.ts';

<<<<<<< HEAD
export default function UpdateStreaks() {
    const {user} = useAuth0()
    const [fitness, setFitness] = useState(false)
    //const handleClick(streak : string) =>{
        //incrementStreak("UserID", streak);
        //Set clicked to be true 
    //}
    return (
=======
export default function UpdateStreaks(){  
    return(
>>>>>>> d60b8ad2c1bd9effb1ddf6623bfed2298f9e3d1c
        <main>
            <div className = "phoneScreen">
                <h1 className = "title">
                    IDK NAME
                </h1>

                <div className = "streaks">
<<<<<<< HEAD
                    <h1 className = "streakName2">I worked out today! 
                        <button className = "streakButton"></button>
                    </h1>
                    <h1 className = "streakName2">I read today!
                        <button className = "streakButton"></button>
                    </h1>

                    <h1 className = "streakName2">I coded today!
                        <button className = "streakButton"></button>
                    </h1>

                    <h1 className = "streakName2">I meditated today! 
                        <button className = "streakButton"></button>
                    </h1>

                    <h1 className = "streakName2">I was greatful today! 
                        <button className = "streakButton"></button>
                    </h1>

                    <h1 className = "streakName2">I enjoyed nature today!</h1>
=======
                    <h1 className = "streakName"> I worked out today!<button></button> </h1>
                    <h1 className = "streakName"> I read today! </h1>
                    <h1 className = "streakName"> I coded today! </h1>
                    <h1 className = "streakName"> I meditated today! </h1>
                    <h1 className = "streakName"> I thought of three things I was greatful for! </h1>
                    <h1 className = "streakName"> I was in nature today! </h1>
>>>>>>> d60b8ad2c1bd9effb1ddf6623bfed2298f9e3d1c
                </div>
                <NavBar/>
            </div>
        </main>
    )
}