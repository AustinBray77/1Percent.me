import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import LikeButton from "./LikeButton.tsx";
import DislikeButton from "./DislikeButton.tsx";

export default function SwipeButtonsBar(props: {
    onLike: () => void;
    onDislike: () => void;
}) {
    return (
        <div className="buttonBar">
            <DislikeButton onClick={props.onDislike} />
            <LikeButton onClick={props.onLike} />
        </div>
    );
}
