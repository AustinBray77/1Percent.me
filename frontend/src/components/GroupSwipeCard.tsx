import { React, useState, useEffect } from "react";
import LikeButton from "./LikeButton.tsx";
import DislikeButton from "./DislikeButton.tsx";
import GroupDescription from "./GroupDescription.tsx";
import GroupImage from "./GroupImage.tsx";
import GroupNameHeader from "./GroupNameHeader.tsx";
import "./GroupSwipeCard.css";
import GroupSearchBar from "./GroupSearchBar.tsx";
import SwipeButtonsBar from "./SwipeButtonsBar.tsx";
//import mainLogo from "../treeImage.jpg";
import { Group } from "../types/group.ts";

export default function GroupSwipeCard(props: {
    joinGroup: (group_name: string) => void;
    groups: Group[];
}) {
    const [currentGroups, setCurrentGroups] = useState([]);

    useEffect(() => {
        setCurrentGroups(props.groups);
    }, [props.groups]);

    console.log(props.groups);
    console.log(currentGroups);

    if (currentGroups.length === 0) {
        return <GroupSearchBar />;
    }

    const currentGroup: Group = currentGroups[0];

    const nextGroup = () => {
        const newGroups = currentGroups.slice(1);
        setCurrentGroups(newGroups);
    };

    const onLike = () => {
        props.joinGroup(currentGroup.name);
        nextGroup();
    };

    const onDislike = () => {
        nextGroup();
    };

    return (
        <div className="groupSwipeCard">
            <GroupNameHeader name={currentGroup.name} />
            <GroupImage image={currentGroup.image} />
            <GroupDescription description={currentGroup.description} />
            <SwipeButtonsBar onLike={onLike} onDislike={onDislike} />
        </div>
    );
}
