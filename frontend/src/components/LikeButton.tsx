import React from "react";
import { FaHeart } from "react-icons/fa";
import "./GroupButtons.css";

export default function LikeButton(props: { onClick: () => void }) {
    return (
        <button type="button" class="button1" onClick={props.onClick}>
            <FaHeart />
        </button>
    );
}
