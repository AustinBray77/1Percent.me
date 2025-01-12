import React from "react";
import LoginButton from "../components/LoginButton.tsx";
import LogoutButton from "../components/LogoutButton.tsx";
import NavBar from "../components/NavBar.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { MdAllInbox } from "react-icons/md";
import GroupSwipeCard from "../components/GroupSwipeCard.tsx";
import "./FindGroup.css";
import { User } from "../types/user.ts";
import { addUserToGroup, getAllGroups } from "../api/groups.ts";

export default function FindGroup(props: { user: User | undefined }) {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated || props.user == undefined) {
        return <Navigate to="/login" />;
    }

    const [groups, setGroups] = React.useState([]);

    const pullGroups = async () => {
        setGroups(await getAllGroups());
    };

    pullGroups();

    const joinGroup = async (group_name: string) => {
        addUserToGroup(props.user?.id ?? "", group_name);
    };

    return (
        <main>
            <div className="groupScreenPhone">
                <GroupSwipeCard groups={groups} joinGroup={joinGroup} />
                <NavBar />
            </div>
        </main>
    );
}
