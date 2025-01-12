import React from 'react';
import { FaHeartBroken } from "react-icons/fa";
import LikeButton from './LikeButton.tsx';
import DislikeButton from './DislikeButton.tsx';

export default function SwipeButtonsBar() {
    return (
        <div className="buttonBar">
            <DislikeButton />
            <LikeButton />
        </div>
    );
}