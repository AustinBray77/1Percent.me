import React from 'react';
import './GroupNameHeader.css'

export default function GroupNameHeader( {name}) {
    return (
        <h1 className="groupNameHeader">{name}</h1>
    );
}