import React from 'react';
import LoginButton from '../components/LoginButton.tsx';
import LogoutButton from '../components/LogoutButton.tsx';
import NavBar from '../components/NavBar.tsx';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { MdAllInbox } from 'react-icons/md';
import GroupSwipeCard from '../components/GroupSwipeCard.tsx';
import './FindGroup.css';

export default function FindGroup(){
    return(
        <main>
            <div className="groupScreenPhone">
                <GroupSwipeCard groupInfo={""} />
                <NavBar />
            </div>
        </main>

    );
}