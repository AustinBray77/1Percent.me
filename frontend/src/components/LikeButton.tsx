import React from 'react';
import { FaHeart } from "react-icons/fa";
import './GroupButtons.css';


export default function LikeButton() {
    return (
        <button type="button" class="button1">
            <FaHeart />
        </button>
    );
}