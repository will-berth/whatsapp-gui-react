import React from 'react';
import './mensaje.css';

export const Mensaje = ({type, bg, mensaje}) => {
    return (
        <div className={`mensaje-${type}`}>
            <p className={`mensaje-content ${bg}`}>{mensaje} <span>12:00 p.m.</span></p>
        </div>
    )
}