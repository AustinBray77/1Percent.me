import React from "react";
import "./UpdateStreaks.css";
import NavBar from "../components/NavBar.tsx";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserStreaks, incrementStreak } from "../api/streaks.ts";

export default function UpdateStreaks() {
    const { user } = useAuth0();
    const [fitness, setFitness] = useState(false);
    //const handleClick(streak : string) =>{
    //incrementStreak("UserID", streak);
    //Set clicked to be true
    //}
    return (
        <main>
            <div className="phoneScreen">
                <h1 className="title">IDK NAME</h1>

                <div className="streaks">
                    <h1 className="streakName2">
                        I worked out today!
                        <button className="streakButton"></button>
                    </h1>
                    <h1 className="streakName2">
                        I read today!
                        <button className="streakButton"></button>
                    </h1>

                    <h1 className="streakName2">
                        I coded today!
                        <button className="streakButton"></button>
                    </h1>

                    <h1 className="streakName2">
                        I meditated today!
                        <button className="streakButton"></button>
                    </h1>

                    <h1 className="streakName2">
                        I was greatful today!
                        <button className="streakButton"></button>
                    </h1>

                    <h1 className="streakName2">I enjoyed nature today!</h1>
                </div>
                <NavBar />
            </div>
        </main>
    );
}
