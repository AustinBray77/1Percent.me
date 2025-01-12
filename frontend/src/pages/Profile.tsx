import React from 'react';
import "./Profile.css";
import NavBar from '../components/NavBar.tsx';
import {useState} from "react";


export default function Profile() {
    const [fitness, setFitness] = useState(8);
    const [reading, setReading] = useState(18);
    const [coding, setCoding] = useState(2);
    const [meditate, setMeditate] = useState(23);
    const [gratitude, setGratitude] = useState(3);
    const [nature, setNature] = useState(35);

    return (
        <main>
            <div className = 'phoneScreen'>
                <h1 className = 'title'> Streaks</h1>
                <div className = "streaks">
                    <h1 className = "streakName"> Fitness {fitness}/21 </h1>
                    <progress className = "progressBar" value = {Math.min(fitness/21,100)} />
                    <h1 className = "streakName"> Reading {reading}/21 </h1>
                    <progress className = "progressBar" value = {Math.min(reading/21,100)} />
                    <h1 className = "streakName"> Coding {coding}/21 </h1>
                    <progress className = "progressBar" value = {Math.min(coding/21,100)} />
                    <h1 className = "streakName"> Meditation {meditate}/21 </h1>
                    <progress className = "progressBar" value = {Math.min(meditate/21,100)} />
                    <h1 className = "streakName"> Gratitude {gratitude}/21 </h1>
                    <progress className = "progressBar" value = {Math.min(gratitude/21,100)} />
                    <h1 className = "streakName"> Nature {nature}/21 </h1>
                    <progress className = "progressBar" value = {Math.min(nature/21,100)} />
                </div>
                <NavBar/>
            </div>
        </main>
    )
}