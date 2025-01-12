import React from 'react';
import './GroupImage.css';

export default function GroupImage({ image }) {
    return(
        <img className="groupImage" src={image} alt = "Group Image"></img>
    );
}