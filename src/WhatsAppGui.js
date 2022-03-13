import React from 'react';
import { Aside } from './components/Aside';
import { Welcome } from './components/Welcome';
import './whatsappgui.css';

export const WhatsAppGui = () => {
    return (
        <div className="app-gui">
            {/* <h1>Hola mundo</h1> */}
            <Aside />
            <Welcome />
        </div>
    )
}