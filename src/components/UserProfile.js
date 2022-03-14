import React from 'react';
import './userprofile.css';

export const UserProfile = ({srcImg}) => {
    return (
        <img className="user-img" src={srcImg} />
    )
}