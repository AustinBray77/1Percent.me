import React from "react";
import { FaHeartBroken } from "react-icons/fa";

export default function DislikeButton(props: { onClick: () => void }) {
    return (
        <button type="button" class="button1" onClick={props.onClick}>
            <FaHeartBroken />
        </button>
    );
}
