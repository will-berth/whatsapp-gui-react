import React from 'react';
import { ChatItem } from './ChatItem';
import './chats.css';
import contactos from '../base/contactos';

export const Chats = () => {
    return (
        <div className="chats">
            {
                contactos.map(item => {
                    return <ChatItem 
                        key={item.id} 
                        img={item.foto}
                        nombre={item.nombre}
                        mssg={item.lastMsg}
                        tiempo={item.lastTime}
                    />
                })
            }
        </div>
    )
}