import React from 'react';
import './aside.css';
import { NavAside } from './NavAside';
import { SearchChat } from './SearchChat';

export const Aside = () => {

    return (
        <>
            <aside className="aside-component">
                <NavAside />
                <div className="content-search">
                    <SearchChat />
                </div>
            </aside>
        </>
    );
}