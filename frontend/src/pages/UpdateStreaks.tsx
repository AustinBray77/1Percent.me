import React from "react";
import "./UpdateStreaks.css";
import NavBar from "../components/NavBar.tsx";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserStreaks, incrementStreak } from "../api/streaks.ts";

export default function UpdateStreaks() {
    const {user} = useAuth0();
    const [fitness, setFitness] = useState(false);

    const handleClick = (streak : string) => {
        incrementStreak("user_id_2908855241575081", streak);
        //Set clicked to be true 
    }
    
    return (
        <main>
            <div className="phoneScreen">
                <h1 className="title">IDK NAME</h1>
                <div className = "streaks">
                    <h1 className = "streakName2">I worked out today! 
                        <button className = "streakButton2" onClick = {handleClick("fitness_streak")}></button>
                    </h1>
                    <h1 className = "streakName2">I read today!
                        <button className = "streakButton2" onClick = {handleClick("reading_streak")}></button>
                    </h1>

                    <h1 className = "streakName2">I coded today!
                        <button className = "streakButton2" onClick = {handleClick("coding_streak")}></button>
                    </h1>

                    <h1 className = "streakName2">I meditated today! 
                        <button className = "streakButton2" onClick = {handleClick("meditation_streak")}></button>
                    </h1>

                    <h1 className = "streakName2">I was greatful today! 
                        <button className = "streakButton2" onClick = {handleClick("gratitude_streak")}></button>
                    </h1>

                    <h1 className = "streakName2" onClick = {handleClick("nature_streak")}>I went outside today!
                        <button className = "streakButton2"></button>
                    </h1>
                </div>
                <NavBar />
            </div>
        </main>
    );
}
