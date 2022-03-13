import React from 'react';
import './contentchat.css';

export const ContentChat = ({name, msg, time}) => {
    return (
        <div className="data-chat">
            <h3 className="contact-name">{name} <span className="msg-time">{time}</span></h3>
            <p className="msg-content"><i class="las la-check-double"></i> {msg}</p>
        </div>
    )
}