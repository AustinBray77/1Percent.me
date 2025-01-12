import React from "react";
import "./Profile.css";
import NavBar from "../components/NavBar.tsx";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserStreaks } from "../api/streaks.ts";
import { User } from "../types/user.ts";
import { Navigate } from "react-router-dom";

export default function Profile(props: { user: User }) {
    const [fitness, setFitness] = useState(0);
    const [reading, setReading] = useState(0);
    const [coding, setCoding] = useState(0);
    const [meditate, setMeditate] = useState(0);
    const [gratitude, setGratitude] = useState(5);
    const [nature, setNature] = useState(10); //Testing style

    const { user, isAuthenticated } = useAuth0();
    //console.log(JSON.stringify(user));

    if (!isAuthenticated) {
        <Navigate to="/" />;
    }

    const setStreaks = async () => {
        console.log(props.user);

        const userInfo = await getUserStreaks(props.user.id);
        console.log(userInfo);
        console.log(userInfo.fitness_streak);
        setFitness(userInfo.fitness_streak);
        setReading(userInfo.reading_streak);
        setCoding(userInfo.coding_streak);
        setMeditate(userInfo.meditation_streak);
        setGratitude(userInfo.graditude_streak);
        setNature(userInfo.nature_streak);
        //setNature(12);
    };

    setStreaks();

    return (
        <main>
            <div className="phoneScreen">
                <h1 className="title"> Streaks</h1>
                <div className="streaks">
                    <h1 className="streakName"> Fitness {fitness}/21 </h1>
                    <progress
                        className="progressBar"
                        value={Math.min(fitness / 21, 100)}
                    />
                    <h1 className="streakName"> Reading {reading}/21 </h1>
                    <progress
                        className="progressBar"
                        value={Math.min(reading / 21, 100)}
                    />
                    <h1 className="streakName"> Coding {coding}/21 </h1>
                    <progress
                        className="progressBar"
                        value={Math.min(coding / 21, 100)}
                    />
                    <h1 className="streakName"> Meditation {meditate}/21 </h1>
                    <progress
                        className="progressBar"
                        value={Math.min(meditate / 21, 100)}
                    />
                    <h1 className="streakName"> Gratitude {gratitude}/21 </h1>
                    <progress
                        className="progressBar"
                        value={Math.min(gratitude / 21, 100)}
                    />
                    <h1 className="streakName"> Nature {nature}/21 </h1>
                    <progress
                        className="progressBar"
                        value={Math.min(nature / 21, 100)}
                    />
                </div>
                <NavBar />
            </div>
        </main>
    );
}
