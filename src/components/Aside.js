import React from 'react';
import './aside.css';
import { NavAside } from './NavAside';

export const Aside = () => {

    return (
        <>
            <aside className="aside-component">
                <NavAside />
            </aside>
        </>
    );
}