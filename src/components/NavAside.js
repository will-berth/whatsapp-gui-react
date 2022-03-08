import React from 'react';
import './navaside.css';

export const NavAside = () => {
    return (
        <div className="nav-aside">
            <div className="nav-user">
                <h4>W</h4>   
            </div>
            <div className="nav-options">
                <i class="las la-history"></i>
                <i class="las la-sms"></i>
                <i class="las la-ellipsis-v"></i>
            </div>
        </div>
    )
}