import {React, useState} from 'react';
import LikeButton from './LikeButton.tsx';
import DislikeButton from './DislikeButton.tsx';
import GroupDescription from './GroupDescription.tsx';
import GroupImage from './GroupImage.tsx';
import GroupNameHeader from './GroupNameHeader.tsx';
import './GroupSwipeCard.css';
import GroupSearchBar from './GroupSearchBar.tsx';
import SwipeButtonsBar from './SwipeButtonsBar.tsx';
import mainLogo from '../treeImage.jpg';

export default function GroupSwipeCard( { groupInfo }) {
    const [currentGroup, setCurrentGroup] = useState(false);

    return (
        <div className= 'groupSwipeCard'>   
            <GroupNameHeader name="Foresters" /*{groupInfo.name}*/ />
            <GroupImage image={mainLogo} /*{groupInfo.coverImage}*/ />
            <GroupDescription description="This group loves walking in forests and stuff we are very coolio."/*{groupInfo.description}*/ />
            <SwipeButtonsBar />
        </div>
    );
}