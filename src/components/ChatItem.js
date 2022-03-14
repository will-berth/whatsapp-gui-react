import React from 'react';
import { ContentChat } from './ContentChat';
import { UserProfile } from './UserProfile';
import './chatitem.css';

export const ChatItem = ({img, nombre, mssg, tiempo}) => {
    return (
        <div className="chat-item">
            <UserProfile srcImg={img}/>
            <ContentChat name={nombre} msg={mssg} time={tiempo}/>
        </div>
    )
}