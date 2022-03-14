import React from 'react';
import { Mensaje } from './Mensaje';
import { HeaderChat } from './HeaderChat';
import './main.css';
import conversacion from '../../base/conversacion';

export const Main = () => {
    return (
        <main className="main-chat">
            <img src="https://i.pinimg.com/originals/db/64/17/db64173e76454fbfc0b437498258742e.jpg" className="chat-bg" />
            <HeaderChat />
            <div className="bandeja">
                {
                    conversacion.map(msg => {
                        let msgBg = '';
                        (msg.type === 'get') ? msgBg = 'msg-bg-1': msgBg = 'msg-bg-0';

                        return <Mensaje key={msg.id} type={msg.type} bg={msgBg} mensaje={msg.mensaje}/>
                    })
                }
            </div>
            <div className="response">
                <i class="las la-icons"></i>
                <i class="las la-paperclip"></i>
                <div className="field-chat-response">
                    <input className="input-res" placeholder="Escribe un mensaje aqui"/>
                </div>
                <i class="las la-microphone"></i>
            </div>
        </main>
    )
}