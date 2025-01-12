import React from 'react';
import "./GroupDescription.css";

export default function GroupDescription({ description }) {
    return(
        <p className="groupDescription">
            {description}
        </p>
    );
}