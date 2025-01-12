import React from 'react';
import "./NavBar.css";
import { IoPerson } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom';

export default function NavBar() {
    const { isAuthenticated } = useAuth0();
    const location = useLocation();
    return(
        
        //className={location.pathname === "/home" ? "navbar-home" : location.pathname === "/profile" ? "navbar-profile" : "navbar-default"}
        <div className = 'bar'>
            <div className = {location.pathname === "/profile" ? "selectedElem" : "element"}>
                <IoPerson className='icon' />
            </div>

            <div className = 'element'>
                <MdGroups className = 'icon' />
            </div>
                
            <div className = 'element'>
                <IoChatbox className = 'icon' />
            </div>

            <div className = 'element'>
                <MdOutlineSettings className = 'icon' />
            </div>
        </div>
        
    )
}

