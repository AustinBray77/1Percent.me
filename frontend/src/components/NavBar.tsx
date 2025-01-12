import React from 'react';
import "./NavBar.css";
import { IoPerson,IoChatbox } from "react-icons/io5";
import { MdGroups,MdOutlineSettings } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom';
import { FaFireAlt } from "react-icons/fa";

export default function NavBar() {
    const { isAuthenticated } = useAuth0();
    const location = useLocation();
    return(
        
        <div className = 'bar'>
            <div className = {location.pathname === "/profile" ? "selectedElem" : "element"}>
                <a href = {location.pathname === "/profile" ? null : "/profile"}>
                    <IoPerson className='icon' />
                </a>
            </div>

            <div className = {location.pathname === "/findgroup" ? "selectedElem" : "element"}>
                <a href = {location.pathname === "/findgroup" ? null : "/findgroup"}>
                    <MdGroups className = 'icon' />
                </a>
            </div>
                
            <div className = {location.pathname === "/updateStreaks" ? "selectedElem" : "element"}>
                <a href = {location.pathname === "/updateStreaks" ? null : "/updateStreaks"}>
                    <FaFireAlt className = 'icon' />
                </a>
            </div>

            <div className = 'element'>
                <MdOutlineSettings className = 'icon' />
            </div>
        </div>
        
    )
}

