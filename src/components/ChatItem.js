import React from 'react';
import { ContentChat } from './ContentChat';
import { UserProfile } from './UserProfile';
import './chatitem.css';

export const ChatItem = ({id}) => {
    return (
        <div className="chat-item">
            <UserProfile />
            <ContentChat name={`User ${id}`} msg={'Ultimo mensaje'} time={'8:19 p.m.'}/>
        </div>
    )
}