import React from 'react';
import { Aside } from './components/Aside';
import { Main } from './components/chat/Main';
import { Welcome } from './components/Welcome';
import './whatsappgui.css';

export const WhatsAppGui = () => {
    return (
        <div className="app-gui">
            {/* <h1>Hola mundo</h1> */}
            <Aside />
            {/* <Welcome /> */}
            <Main />
        </div>
    )
}